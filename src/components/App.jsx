import "./app.css";
import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, Invoices } from "react-router-dom";
import Main from "../main/Main";
import Card from "./Card.jsx";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/card" element={<Card />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
