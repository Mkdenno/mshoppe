import "./form.css";
import { useState } from "react";

function Login({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const loginInput = {
      username,
      password,
    };

    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginInput),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  };

  return (
    <div className="form">
      <div className="form__container">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-lg"
            style={{
              border: "none",
              color: "white",
              backgroundColor: "#00BFFF",
              fontSize: "15px",
              fontWeight: "900",
            }}
          >
            Login
          </button>
        </form>
      </div>
      <span>
        hava an account? please <a href="/signup">Register</a>
      </span>
    </div>
  );
}
export default Login;
