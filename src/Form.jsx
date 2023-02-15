import "./App.css";
import "./Form.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { form } from "react-bootstrap";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import LoveResult from "./LoveResult";
import loveHeart from "./Imgs/red-heart_2764-fe0f.png"
import loveDoc from "./Imgs/lovedoc.png"

const Form = ({ firstName, secondName, setFirstName, setSecondName }) => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate("/LoveResult");
  };

  function validateName(name) {
    if ((name = null)) {
      return false;
    } else {
      if ((name = "")) return true;
    }
  }

  return (
    <>
    <div className = "wrapper">
      <div className="header">
        <img className = "heart" src = {loveHeart}/>
        <h1 className = "lurveD">Welcome to the Luuurve Doctor</h1>
        <img className = "heart" src = {loveHeart}/>
      </div>
      <div className="description">
        <p className = "paragraph">
          welcome User, to the oracle of your love matching, settle down and
          witness, as we determine your worth, will you find the one, or will
          you be left behind as the world looks upon you as the grossly inadequete
          slime puddle you must be..
        </p>
      </div>
      <form>
        <div className = "paraDiv">
          <label className = "paragraph">
            Please, enter your
            name into this BOX OF TRUTH{" "}
          </label>
          <br></br>
          <input
            type="text"
            name="first_name"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
        </div>
        <div className = "paraDiv">
          <label className = "paragraph">
            and enter the name of the person who's window your currently
            skulking behind{" "}
          </label>
          <br></br>
          <input
            type="text"
            name="second_name"
            onChange={(event) => setSecondName(event.target.value)}
            value={secondName}
          />
        </div>
        <div className = "submitButton">
          <input type="Submit" value="Submit" onClick={onSubmit} />
        </div>
        <div className = "loveDocDiv">
          <img className = "loveDoc" src = {loveDoc}/>
        </div>
      </form>
      </div>
    </>
  );
};

export default Form;
