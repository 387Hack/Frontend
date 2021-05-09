import React, { useState, useEffect } from "react";
import Start from "./components/Start";
import Question from "./components/Question";
import End from "./components/End";
import Modal from "./components/Modal";
import { PageWrapper } from "../pageWrapper";
import quizData from "./data/quiz";
import "./App.css";

import { useHistory } from "react-router-dom";
import { BACKEND_URL } from "../../Assets/Constants/index";

import Cookies from "universal-cookie";
const cookies = new Cookies();

let interval;

const Game3 = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
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
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <PageWrapper>
      <div className="App" style={{ display: "flex" }}>
        {step === 1 && <Start onQuizStart={quizStartHandler} />}
        {step === 2 && (
          <Question
            data={quizData.data[activeQuestion]}
            onAnswerUpdate={setAnswers}
            numberOfQuestions={quizData.data.length}
            activeQuestion={activeQuestion}
            onSetActiveQuestion={setActiveQuestion}
            onSetStep={setStep}
          />
        )}
        {step === 3 && (
          <End
            results={answers}
            data={quizData.data}
            onReset={resetClickHandler}
            onAnswersCheck={() => setShowModal(true)}
            time={time}
          />
        )}

        {showModal && (
          <Modal
            onClose={() => setShowModal(false)}
            results={answers}
            data={quizData.data}
          />
        )}
      </div>
    </PageWrapper>
  );
};

export default Game3;
