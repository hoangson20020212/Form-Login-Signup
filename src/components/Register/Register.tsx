import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="title">Sign up</h2>
      <form onSubmit={handleSignup} className="form">
        <div className="input-text">
          <input
            type="text"
            name="username"
            id="username"
            value={user}
            placeholder=" "
            onChange={(e) => setUser(e.target.value)}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-text">
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            placeholder=" "
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="input-text">
          <input
            type="text"
            name="password"
            id="password"
            value={confirmPassword}
            placeholder=" "
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="password"> Confirm Password</label>
        </div>

        <button type="button" className="form__btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
