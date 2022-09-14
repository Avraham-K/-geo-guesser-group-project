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

  const getQuestionEasy = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin/easy");
      console.log("get Question:", res.data);
      
        setquestion(res.data);
      
    } catch (err) {
      console.log(err);
    }
  };

  const getQuestionHard = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin");
      console.log("get Question:", res.data);
      
        setquestion(res.data);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (difficultyLevel === "Easy") {
      getQuestionEasy();
    } else {
      getQuestionHard();
    }
  }, []);

  const handleNextQuestion = (e) => {
    e.preventDefault();
    setquestionNumber(questionNumber + 1);
    // console.log("questionNumber:", questionNumber);

    if (answer === question[question.correct]) {
      setpoints(points + 10);
    }

    if (questionNumber < 11) {
      if (difficultyLevel === "Easy") {
        getQuestionEasy();
      } else {
        getQuestionHard();
      }
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
      const res = await axios.post(
        "http://localhost:8080/users/newpoints",
        userInfo
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
        <img
          src={question.image_location}
          alt="Image Location"
          className="image"
        />
        <span className="score">Score: {points}</span>
      </div>
      <h1 className="display-6 my-2">Location of the Image?</h1>
      <div className="bottom-container">
        {difficultyLevel === "Easy" ? (
          <Grid templateColumns="repeat(4, 1fr)" gap={5} className="answer-container">
            <GridItem
              className="location-answer"
              border={answer === question[0] && "1px solid black"}
              onClick={(e) => setAnswer(question[0])}
            >
              {question[0]}
            </GridItem>
            <GridItem
              className="location-answer"
              border={answer === question[1] && "1px solid black"}
              onClick={(e) => setAnswer(question[1])}
            >
              {question[1]}
            </GridItem>
            <GridItem
              className="location-answer"
              border={answer === question[2] && "1px solid black"}
              onClick={(e) => setAnswer(question[2])}
            >
              {question[2]}
            </GridItem>
            <GridItem
              className="location-answer"
              border={answer === question[3] && "1px solid black"}
              onClick={(e) => setAnswer(question[3])}
            >
              {question[3]}
            </GridItem>
          </Grid>
        ) : null}

        {difficultyLevel === "Hard" ? (
          <Grid templateColumns="repeat(4, 1fr)" gap={5}>
            <GridItem
              w="100%"
              h="8"
              border={answer === question[0] && "1px solid black"}
              className="location-answer"
              onClick={(e) => setAnswer(question[0])}
            >
              {question[0]}
            </GridItem>
            <GridItem
              className="location-answer"
              border={answer === question[1] && "1px solid black"}
              onClick={(e) => setAnswer(question[1])}
            >
              {question[1]}
            </GridItem>
            <GridItem
              className="location-answer"
              border={answer === question[2] && "1px solid black"}
              onClick={(e) => setAnswer(question[2])}
            >
              {question[2]}
            </GridItem>
            <GridItem
              className="location-answer"
              border={answer === question[3] && "1px solid black"}
              onClick={(e) => setAnswer(question[3])}
            >
              {question[3]}{" "}
            </GridItem>
            <GridItem
              className="location-answer"
              border={answer === question[4] && "1px solid black"}
              onClick={(e) => setAnswer(question[4])}
            >
              {question[4]}
            </GridItem>
            <GridItem
              className="location-answer"
              border={answer === question[5] && "1px solid black"}
              onClick={(e) => setAnswer(question[5])}
            >
              {question[5]}
            </GridItem>
            <GridItem
              className="location-answer"
              border={answer === question[6] && "1px solid black"}
              onClick={(e) => setAnswer(question[6])}
            >
              {" "}
              {question[6]}
            </GridItem>
            <GridItem
              className="location-answer"
              border={answer === question[7] && "1px solid black"}
              onClick={(e) => setAnswer(question[7])}
            >
              {question[7]}
            </GridItem>
          </Grid>
        ) : null}
        <div className="next-button-container">
          <button
            className="next-question-button"
            type="submit"
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
