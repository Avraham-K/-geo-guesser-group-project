import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../context/context";
import { Grid, GridItem } from "@chakra-ui/react";
// import { CounterComponent } from "../components/counter";
function Main() {
  const { userName, difficultyLevel, c, setpoints } =
    useContext(UsersContext);
  const [counter, setCounter] = useState(120);
  const [question, setquestion] = useState({});
  const [answer, setAnswer] = useState();
  const [questionNumber, setquestionNumber] = useState(0);
  let score = 0;
  // let questionNumber = 0;

  const getQuestion = async () => {
    try {
      const res = await axios.get("http://localhost:8080/admin"); //change route
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
    console.log("questionNumber:", questionNumber)
    setquestionNumber(questionNumber +1);
    console.log("questionNumber:", questionNumber);

    // console.log("answer:", answer)
    // console.log("question.correct:", question[question.correct])
    if (answer === question[question.correct]) {
      setpoints(points + 10);
    }

    if (questionNumber < 10) {
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

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  function handleEndTimer() {
    setpoints(score);
    gameOver();
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
        {/* <CounterComponent /> */}
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
