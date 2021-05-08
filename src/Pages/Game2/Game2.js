import React, { useState, useEffect } from "react";
import bell from "../../Assets/Audio/bell.wav";
import { randomNo } from "./Game2.style";
export default function Game2() {
  const [bellSound] = useState(new Audio(bell));
  const [level, setLevel] = useState(1);
  const [Count, setCount] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    bellSound.playbackRate = 1.5 + level * 0.03;
    bellSound.play();
    let count = 0;
    let loops = Count - 1;
    bellSound.onended = function () {
      if (count < loops) {
        count++;
        this.play();
      }
    };
  }, []);

  const nextHandler = () => {
    setLevel(level + 1);
  };

  const onSubmit = () => {
    let counts = parseInt(userInput);
    setUserInput("");
    console.log(counts, Count);
    if (counts === Count) {
      setStatus("Correct");
      setCount(randomNo(level * 5, (level + 1) * 5));
    } else {
      setStatus("Incorrect");
    }
  };

  return (
    <div>
      Sound GAme {level} {Count}
      <div>
        {/* <button onClick={nextHandler}>Next</button> */}
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
