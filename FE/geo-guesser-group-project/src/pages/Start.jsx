import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { UsersContext } from "../context/context";
import { useNavigate } from "react-router-dom";

function Start() {
  const { userName, setuserName, difficultyLevel, setDifficultyLevel } =
    useContext(UsersContext);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  function handleStart(e) {
    e.preventDefault();
    if (userName.trim().length > 6) {
      navigate("/main");
      setIsVisible(false);
      setuserName("");
    } else {
      setIsVisible(true);
    }
  }

  const getHighScoreEasy = async () => {
    try {
      const res = await axios.get("http://localhost:8080/users/highscoreeasy");
      console.log("High Score Easy:", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getHighScoreHard = async () => {
    try {
      const res = await axios.get("http://localhost:8080/users/highscorehard");
      console.log("High Score Hard:", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHighScoreEasy();
    getHighScoreHard();
  });

  return (
    <div className="start-page-container">
      <Form>
        <h1 className="display-1">Geo Guesser</h1>
        <Form.Group as={Col} className="mb-3" controlId="formBasicname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="name"
            onChange={(e) => {
              setuserName(e.target.value);
            }}
            type="text"
            placeholder="Enter your Name"
          />
          <small
            className="nameCharsAlert"
            style={{ visibility: isVisible ? "visible" : "hidden" }}
          >
            Please enter your name (min 6 char).
          </small>
        </Form.Group>

        <Form.Group
          as={Col}
          className="mb-3"
          controlId="formBasicAdoptionStatus"
        >
          <Form.Label>Select Difficulty Level</Form.Label>
          <Form.Select
            name="difficultyLevel"
            onChange={(e) => {
              setDifficultyLevel(e.target.value);
            }}
          >
            <option value="easy">Easy</option>
            <option value="hard">Hard</option>
          </Form.Select>
        </Form.Group>
        <button className="start-button" type="submit" onClick={handleStart}>
          START
        </button>
      </Form>
    </div>
  );
}

export default Start;
