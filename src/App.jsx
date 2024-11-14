import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home.Page";
import ResumePage from "./Pages/Resume.Page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
};

export default App;
