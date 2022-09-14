import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import End from "./pages/End";
import Start from "./pages/Start";
import Admin from "./pages/Admin";
import NavBar from "./components/navbar";
import { UsersContext } from "./context/context";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [userName, setuserName] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [points, setpoints] = useState(0);
  const [highScore, setHighScore] = useState("");

  return (
    <UsersContext.Provider
      value={{
        userName,
        setuserName,
        difficultyLevel,
        setDifficultyLevel,
        points,
        setpoints,
      }}
    >
      <ChakraProvider>
        <div className="app-wrapper">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/main" element={<Main />} />
              <Route path="/end" element={<End />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ChakraProvider>
    </UsersContext.Provider>
  );
}

export default App;
