import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

function Main() {
  const { userName, difficultyLevel, points, setpoints } =
    useContext(UsersContext);
  const [counter, setCounter] = useState(120);
  const [question, setquestion] = useState({});
  const [answer, setAnswer] = useState();
  const [questionNumber, setquestionNumber] = useState(0);
  const navigate = useNavigate();

  const getQuestion = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin");
      console.log("get Question:", res.data);
      if (res.data.correct) {
        setquestion(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);

  const handleNextQuestion = (e) => {
    e.preventDefault();
    setquestionNumber(questionNumber + 1);
    console.log("questionNumber:", questionNumber);

    if (answer === question[question.correct]) {
      setpoints(points + 10);
    }

    if (questionNumber < 11) {
      getQuestion();
    } else {
      gameOver();
      navigate("/end");
    }
  };

  const gameOver = async () => {
    const userInfo = {
      nameUser: userName,
      level: difficultyLevel,
      points: points,
    };
    try {
<<<<<<< HEAD
      const res = await axios.post("http://localhost:8080/users/newpoints",
        userInfo
=======
      const res = await axios.post(
        "http://localhost:8080/users/newpoints",
        userInfo
>>>>>>> 11ae3b1fd5df7e5c3be65aa7a54fd237142fc091
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  function handleEndTimer() {
    gameOver();
    navigate("/end");
  }

  return (
    <div className="main-page-container">
      <h1 className="display-4 mt-4">Let's Play</h1>
      <div className="main-page-header">
        {counter !== 0 ? (
          <div className="timer">{counter}</div>
        ) : (
          handleEndTimer()
        )}
        <span className="score">Score: {points}</span>
      </div>
      <div className="image-container">
        <img
          src={question.image_location}
          height="600vh"
          width="600vw"
          alt="LocationImg"
        />
        <h1 className="display-6 my-4">Location of the Image?</h1>
      </div>

      <div className="bottom-container">
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          <GridItem
            w="100%"
            h="8"
            className="location-answer"
            onClick={(e) => setAnswer(question[0])}
          >
            {question[0]}
          </GridItem>
          <GridItem
            className="location-answer"
            value="2"
            onClick={(e) => setAnswer(question[1])}
          >
            {question[1]}
          </GridItem>
          <GridItem
            className="location-answer"
            value="3"
            onClick={(e) => setAnswer(question[2])}
          >
            {question[2]}
          </GridItem>
          <GridItem
            className="location-answer"
            value="4"
            onClick={(e) => setAnswer(question[3])}
          >
            {question[3]}{" "}
          </GridItem>
          <GridItem
            className="location-answer"
            value="5"
            onClick={(e) => setAnswer(question[4])}
          >
            {question[4]}
          </GridItem>
          <GridItem
            className="location-answer"
            value="6"
            onClick={(e) => setAnswer(question[5])}
          >
            {question[5]}
          </GridItem>
          <GridItem
            className="location-answer"
            value="7"
            onClick={(e) => setAnswer(question[6])}
          >
            {" "}
            {question[6]}
          </GridItem>
          <GridItem
            className="location-answer"
            value="8"
            onClick={(e) => setAnswer(question[7])}
          >
            {question[7]}
          </GridItem>
        </Grid>

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
