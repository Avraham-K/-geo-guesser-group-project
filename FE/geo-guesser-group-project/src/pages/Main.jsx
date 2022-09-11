import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../context/context";

function Main() {
  const { userName, difficultyLevel, points, setpoints } =
    useContext(UsersContext);
  const { question, setquestion } = useState({});
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
      const res = await axios.get("http://localhost:8080/users"); //change route
      console.log("get Question:", res.data);
      setquestion(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);

  // const handleStart = async (e) => {
  //     e.preventDefault();
  //     const userInfo = {
  //       nameUser: userName,
  //       level: difficultyLevel,
  //       // points: points,
  //     };
  //     try {
  //       const res = await axios.post("http://localhost:8080/users/newpoints", {
  //         userInfo,
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <div className="main-page-container">
      <h1 className="display-3">Let's Play</h1>
      <div className="main-page-header">
        <p>timer</p>
        <p>Score: {points}</p>
      </div>
      <div className="question-container">
        <img
          src={data.imageUrl}
          height="500em"
          width="500em"
          alt="Location Image"
        />
        <p>What is the Location?</p>
        {data.map((location) => (
          <ul>
            <li className="text-center">{location.location}</li>
            <li className="text-center">{location.location1}</li>
            <li className="text-center">{location.location2}</li>
            <li className="text-center">{location.location3}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Main;
