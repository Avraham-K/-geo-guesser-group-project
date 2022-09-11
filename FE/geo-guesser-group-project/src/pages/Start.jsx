import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { UsersContext } from "../context/context";

function Start() {

    const {userName, setuserName, difficultyLevel, setDifficultyLevel} = useContext(UsersContext);
  

  const handleStart = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post(
        "http://localhost:8080/users",
        {userName, difficultyLevel}
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getHighScoreEasy = async () => {
    try {
      const res = await axios.get("http://localhost:8080/users");
     console.log("High Score Easy:",res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getHighScoreHard = async () => {
    try {
      const res = await axios.get("http://localhost:8080/users");
     console.log("High Score Hard:",res.data);
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
      <h1 className="display-1">Geo Guesser</h1>
      <Form>
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
            <option>Select Difficulty Level</option>
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
