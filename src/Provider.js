import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Context from "./Context";

function Provider({ children }) {
  let [val, setVal] = useState("");
  let [res, setRes] = useState([]);
  let [data, setData] = useState({});

  const handleChange = e => {
    setVal(e.target.value);
  };

  const handleClick = da => {
    setData(da);
  };

  const handleSubmit = e => {
    let value = val.trim();
    e.preventDefault();
    setVal("");
    getMeal(value);
  };

  const getMeal = async recipe => {
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
    )
      .then(res => res.json())
      .then(res => {
        setRes(res);
      });
  };

  return (
    <Context.Provider
      value={{ handleChange, val, handleSubmit, res, handleClick, data }}
    >
      <Router>{children}</Router>
    </Context.Provider>
  );
}

export default Provider;
