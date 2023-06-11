import React, { useEffect, useRef } from "react";
// import { useUserContext } from "../context/userContext";
import './Login.css';
import { useUserContext } from "../../context/userContext";

const Login = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser } = useUserContext();

  useEffect( ()=>{
    emailRef.current.focus();
  },[emailRef]);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  return (
    <div className="form">
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input className="input" placeholder="Email" type="email" ref={emailRef} />
        <input className="input" placeholder="Password" type="password" ref={psdRef} />
        <button className="button" type="submit">Login In</button>
      </form>
    </div>
  );
};

export default Login;
