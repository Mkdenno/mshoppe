import "./form.css";
import { useState } from "react";

function Signup() {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(data=>console.log(data));
   }

  return (
    <div className="form">
      <div className="form__container">
        <h3>Register</h3>
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
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
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
            Register
        </button>
        </form>
      </div>
      <span>
        hava an account? please <a href="/login">login</a>
      </span>
    </div>
  );
}
export default Signup;