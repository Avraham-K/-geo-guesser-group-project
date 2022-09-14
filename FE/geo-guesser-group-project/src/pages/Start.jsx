import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { UsersContext } from "../context/context";
import { useNavigate } from "react-router-dom";

function Start() {
  const {
    userName,
    setuserName,
    difficultyLevel,
    setDifficultyLevel,
    setpoints,
  } = useContext(UsersContext);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  function handleStart(e) {
    e.preventDefault();
    if (userName.trim().length >= 3) {
      setpoints(0);
      navigate("/main");
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }

  return (
    <div className="start-page-container">
      <Form>
        <h1 className="display-1 mb-5">Geo Guesser Game</h1>
        <div className="middle-container">
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
              Please enter your name (min 3 char).
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
              <option>Select Level</option>
              <option value="Easy">Easy</option>
              <option value="Hard">Hard</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="start-button-container">
          <button className="start-button" type="submit" onClick={handleStart}>
            START
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Start;
