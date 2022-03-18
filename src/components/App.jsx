import "./app.css";
import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../main/Main";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
