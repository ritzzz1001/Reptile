import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../api";

export const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await LoginApi(username, password);
      
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      
      navigate("/search");
    } catch (error) {
      console.error("Login Failed!!", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center text-success mb-4">Login Page</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="form-control"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
