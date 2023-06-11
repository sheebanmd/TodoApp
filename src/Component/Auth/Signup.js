import React, { useEffect, useRef } from "react";
import './Signup.css';
import { useUserContext } from "../../context/userContext";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  useEffect( ()=>{
    emailRef.current.focus();
  },[emailRef]);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <input className="input" placeholder="Email" type="email" ref={emailRef} />
        <input className="input" placeholder="Name" type="name" ref={nameRef} />
        <input className="input" placeholder="Password" type="password" ref={psdRef} />
        <button className="button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
