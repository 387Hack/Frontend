import React, { useState, useEffect } from "react";
import bell from "../../Assets/Audio/bell.wav";
import { randomNo } from "./Game2.style";
export default function Game2() {
  const [bellSound] = useState(new Audio(bell));
  const [level, setLevel] = useState(0);
  const [Count, setCount] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    bellSound.playbackRate = 1.3 + level * 0.15;

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
    if (loading) {
      return;
    }
    setLoading(true);
    setCount(randomNo(level + 3, level + 6));
    setLevel(level + 1);
  };

  const onSubmit = () => {
    let counts = parseInt(userInput);
    setUserInput("");
    console.log(counts, Count);
    if (counts === Count) {
      setStatus("Correct");
    } else {
      setStatus("Incorrect");
    }
  };

  return (
    <div>
      <h1>Hearing Game</h1>
      <div>
        <div>
          <button onClick={nextHandler}>{level ? "Next" : "Start"}</button>
        </div>
        <input
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
        ></input>
        <button onClick={onSubmit}>Submit</button>
      </div>
      {status}
    </div>
  );
}
