import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../context/context";
import { Grid, GridItem } from "@chakra-ui/react";
// import { CounterComponent } from "../components/counter";
function Main() {
  const { userName, difficultyLevel, points, setpoints } =
    useContext(UsersContext);
  const [counter, setCounter] = useState(120);
  const { question, setquestion } = useState({});
  const [answer, setAnswer] = useState();
  let score = 0;
  let questionNumber = 0;

  const MainImg = new URL(
    "../../images/8ec64b64e1d0805b1101f6c70c7f5b31-tel-aviv.jpg",
    import.meta.url
  ); //for test

  const data = {
    imageUrl:
      "https://res.cloudinary.com/dcvwxiaaz/image/upload/v1662627100/f8x2cax9…",
    correct: 1,
    location: "tokyo",
    location1: "tel aviv",
    location2: "new york",
    location3: "london",
    location4: "berlin",
    location5: "madrid",
    location6: "rome",
    location7: "paris",
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
        <span className="score">Score: {score}</span>
      </div>
      <div className="image-container">
        <img
          // src={data.imageUrl}
          src={MainImg} // for test
          height="450em"
          width="600em"
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
            value="1"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[0]}
          </GridItem>
          <GridItem
            className="location-answer"
            value="2"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[1]}
          </GridItem>
          <GridItem
            className="location-answer"
            value="3"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[2]}
          </GridItem>
          <GridItem
            className="location-answer"
            value="4"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[3]}{" "}
          </GridItem>
          <GridItem
            className="location-answer"
            value="5"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[4]}
          </GridItem>
          <GridItem
            className="location-answer"
            value="6"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[5]}
          </GridItem>
          <GridItem
            className="location-answer"
            value="7"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {" "}
            {data[6]}
          </GridItem>
          <GridItem
            className="location-answer"
            value="8"
            onClick={(e) => setAnswer(e.target.value)}
          >
            {data[7]}
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
