import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import './Auth.css';

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="App">
    <div className="container">
      {!index ? <Login /> : <Signup />}
      <h2 onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </h2>
    </div>
    </div>
  );
};

export default Auth;
