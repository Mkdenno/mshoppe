import "./form.css";
import { useState } from "react";

function Login() {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="form">
      <div className="form__container">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
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
