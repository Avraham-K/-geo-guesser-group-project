import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Start from "./pages/Start"; 
import Admin from "./pages/Admin";
import NavBar from "./components/navbar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  return (
    <ChakraProvider>
      <div className="app-wrapper">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/main" element={<Main />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
