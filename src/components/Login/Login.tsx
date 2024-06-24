import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="title">Log in</h2>
      <form onSubmit={handleLogin} className="form">
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

        <button type="button" className="form__btn">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
