import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../context/context";

function Main() {
  const { userName, difficultyLevel, points, setpoints } =
    useContext(UsersContext);
  const { question, setquestion } = useState({});
  const [answer, setAnswer] = useState();
  const [counter, setCounter] = useState(120);
  let score = 0;
  let questionNumber = 0;

  const data = {
    imageUrl:
      "https://res.cloudinary.com/dcvwxiaaz/image/upload/v1662627100/f8x2cax9…",
    correct: 1,
    0: "tokyo",
    1: "tel aviv",
    2: "new york",
    3: "london",
    4: "berlin",
    5: "madrid",
    6: "rome",
    7: "paris",
  };

  const getQuestion = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin"); //change route
      console.log("get Question:", res.data);
      setquestion(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // getQuestion();
  }, []);

  const handleNextQuestion = (e) => {
    e.preventDefault();
    if (answer === data.correct) {
      score += score + 10;
    }
    questionNumber += questionNumber + 1;
    if (questionNumber <= 10) {
      getQuestion();
    } else {
      // game over. show score
      setpoints(score);
      gameOver();
    }
  };

  const gameOver = async () => {
    const userInfo = {
      nameUser: userName,
      level: difficultyLevel,
      points: points,
    };
    try {
      const res = await axios.post("http://localhost:8080/users/newpoints", {
        userInfo,
      });
      console.log(res.data);
      // navigate to start game and show user score
    } catch (err) {
      console.log(err);
    }
  };

  console.log("answer:", answer);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  function handleEndTimer() {
    setpoints(score);
    gameOver();
  }

  return (
    <div className="main-page-container">
      <h1 className="display-4">Let's Play</h1>
      <div className="main-page-header">
        {counter !== 0 ? <div className="timer">{counter}</div> : handleEndTimer()}
        <span className="score">Score: {score}</span>
      </div>
      <div className="image-container">
        <img
          src={data.imageUrl}
          height="200em"
          width="200em"
          alt="Location Image"
        />
        <h1 className="display-6">Location of the Image?</h1>
      </div>

      <div className="bottom-container">
        <ul>
          <li
            className="location-answer"
            value="1"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[0]}
          </li>
          <li
            className="location-answer"
            value="2"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[1]}
          </li>
          <li
            className="location-answer"
            value="3"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[2]}
          </li>
          <li
            className="location-answer"
            value="4"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[3]}
          </li>
          <li
            className="location-answer"
            value="5"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[4]}
          </li>
          <li
            className="location-answer"
            value="6"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[5]}
          </li>
          <li
            className="location-answer"
            value="7"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[6]}
          </li>
          <li
            className="location-answer"
            value="8"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[7]}
          </li>
        </ul>
        <button
          className="next-question-button"
          type="submit"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}

export default Main;
