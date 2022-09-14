import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { UsersContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export default function End() {
  const { userName, setuserName, difficultyLevel, points, setpoints } =
    useContext(UsersContext);
  const navigate = useNavigate();

  const [highScoreHard, setHighScoreHard] = useState(null);
  const [highScoreEasy, setHighScoreEasy] = useState(null);

  useEffect(() => {
    const getHighScoreEasy = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/users/highscoreeasy"
        );
        console.log("High Score Easy:", res.data);
        setHighScoreEasy(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getHighScoreHard = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/users/highscorehard"
        );
        setHighScoreHard(res.data);
        console.log("High Score Hard:", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getHighScoreEasy();
    getHighScoreHard();
  }, []);

  function handlePlayAgain() {
    setpoints(0);
    setuserName("");
    navigate("/");
  }

  return (
    <div className="top-container">
      <div>
      <div className="game-summary mx-5 mt-5">
        Hey <b>{userName}</b>{" "}
      </div>
      <div className="game-summary mx-5 mt-1">
        Your Score is: <b>{points}</b>
      </div>
      <div className="game-summary mx-5 mt-1">
        Your difficulty:<b> {difficultyLevel}</b>{" "}
      </div>

      <Button className="play-again-button" variant="danger" onClick={() => handlePlayAgain()}>
          Play Again
        </Button>
        </div>

      <div className="table-container my-5">
        <h6 className="display-6">All Time Greatest - Easy Level</h6>
        <Table striped bordered hover className="easy-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>High Score</th>
            </tr>
          </thead>
          <tbody>
            {highScoreEasy &&
              highScoreEasy.length > 0 &&
              highScoreEasy.map((elem, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{elem.user}</td>
                  <td>{elem.high_score}</td>
                </tr>
              ))}
          </tbody>
        </Table>

        <h6 className="display-6 mt-4">All Time Greatest - Hard Level</h6>
        <Table striped bordered hover className="hard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>High Score</th>
            </tr>
          </thead>
          <tbody>
            {highScoreHard &&
              highScoreHard.length > 0 &&
              highScoreHard.map((elem, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{elem.user}</td>
                  <td>{elem.high_score}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
