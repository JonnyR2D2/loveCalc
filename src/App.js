import "./App.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { form } from "react-bootstrap";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import LoveResult from "./LoveResult";
import Form from "./Form";



function App() {

  const [firstName, setFirstName] = useState("");

  const [secondName, setSecondName] = useState("");
  
  return (
    <Routes>
        <Route element = {<Form firstName = {firstName} secondName = {secondName} setFirstName = {setFirstName} setSecondName = {setSecondName}/>} path = "/"></Route>
        <Route element = {<LoveResult firstName = {firstName} secondName = {secondName}/>} path = "/LoveResult"></Route>
      </Routes>
  );
}

export default App;
