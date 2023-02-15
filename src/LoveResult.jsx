import React, { Component } from "react";
import "./LoveResult.css";
import sexyThanosImg from "./Imgs/yg70lgwk64d91.jpg";
import unsexyThanosImg from "./Imgs/DZ-JQccWAAApmCX.jpg";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LoveResult({ firstName, secondName }) {
  const lovePercentage = Math.floor(Math.random()*100);
  const img = lovePercentage <= 49 ? unsexyThanosImg : sexyThanosImg;
  const navigate = useNavigate();

  const onEnter = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className = "header2">
        <h1 className = "loveResultHeader">YOUR LOVE MATCH RESULT!</h1>
      </div>
      <div className = "ObvsDiv">
        <p className = "Obvs1">{`obviously you didn't care about ${secondName} and your secret desire has always been for the great and powerful Thanos!`}</p>
      </div>
      <div className = "resultsDiv">
        <h2 className = "ThanosChance">
          Your Chances with the sexual dynamo, and savior of the galaxy, Thanos
          is..{" "}
        </h2>
        <p className = "loveChance2">
          {firstName +
            " has a " +
            lovePercentage +
            "%" +
            " chance with Thanos"}
        </p>
        <div >
          <img className="sweetSweetThanos" id = "sweetSweetThanos" src = {img}/>
          <input type="Submit" value="try Again" onClick={onEnter} />
        </div>
      </div>
    </>
  );
}

export default LoveResult;
