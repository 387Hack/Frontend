import React, { useState, useEffect } from "react";
import bell from "../../Assets/Audio/bell.wav";
import { randomNo } from "./Game2.style";
import { Button, Input, Card, Icon, Image } from "semantic-ui-react";
import { PageWrapper } from "../pageWrapper";
import { useHistory } from "react-router-dom";
import { BACKEND_URL } from "../../Assets/Constants/index";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Game2() {
  const [bellSound] = useState(new Audio(bell));
  const [level, setLevel] = useState(0);
  const [Count, setCount] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [status, setStatus] = useState("Let's Play");
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);

  const history = useHistory();

  useEffect(() => {
    fetch(`${BACKEND_URL}auth/protected`, {
      headers: {
        Authorization: "Bearer " + cookies.get("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        history.push("/login");
      });
  }, [history]);

  useEffect(() => {
    if (level === 0) {
      return;
    }
    bellSound.playbackRate = 1.3 + level * 0.25;

    bellSound.play();
    let count = 0;
    let loops = Count - 1;
    console.log(loops);
    bellSound.onended = function () {
      if (count < loops) {
        count++;
        this.play();
      } else {
        setLoading(false);
      }
    };
  }, [level, Count, bellSound]);

  const nextHandler = () => {
    setCount(randomNo(level + level * 2 + 2, level + level * 3 + 5));
    if (loading) {
      return;
    }
    setLoading(true);
    setLevel(level + 1);
    if (level === 10) {
      setStatus(`Your score is ${score}`);
      setLevel(0);
    }
  };

  const onSubmit = () => {
    let counts = parseInt(userInput);
    setUserInput("");
    console.log(counts, Count);
    if (counts === Count) {
      setStatus("Correct");
      setScore(score + 1);
    } else {
      setStatus("Incorrect");
    }
  };

  return (
    <PageWrapper>
      <div>
        <h1>Hearing Game</h1>

        <div
          style={{ margin: "auto", display: "flex", justifyContent: "center" }}
        >
          <Card>
            <div style={{ fontSize: "1.8rem" }}>{status}</div>
            <Image src="https://picsum.photos/200/150" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Hey</Card.Header>
              <Card.Description>
                <b>Guess the Count of Sound</b>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="chart pie" />
              Level : {level}
            </Card.Content>
            <div>
              <Button style={{ fontSize: "1.3rem" }} onClick={nextHandler}>
                {level ? "Next" : "Start"}
              </Button>
            </div>
            <div style={{ padding: "0 10%", margin: "1rem 0" }}>
              <Input
                onChange={(e) => {
                  setUserInput(e.target.value);
                }}
                value={userInput}
                style={{ margin: 0, padding: 0 }}
                placeholder="Predict the Count"
              ></Input>
            </div>
            <div>
              <Button style={{ fontSize: "1.2rem" }} onClick={onSubmit}>
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
}
