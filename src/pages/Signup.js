import "./form.css";
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      username,
      password,
      password_confirmation: passwordConfirmation,
    };

    fetch("/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputData),
    }).then((response) => {
      //  if(r.ok){
      //   r.json()
      //   .then((user)=> setUser(user))
      //  }
      if (response.ok) {
        response.json().then((user) => console.log(user));
      } else {
        response.json().then((errorData) => setErrors(errorData.errors));
      }
    });
    setUsername("");
    setPassword("");
    setPasswordConfirmation("");
  };
  {
    errors.length > 0 && (
      <ul style={{ color: "red"}}>
        {errors.map((error) => (
          <li  key={error}>{error}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="form">
      <div className="form__container">
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
              <ul style={{ color: "red" }}>
                  <li>{errors[1]}</li>
                </ul>
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="fullname"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Full Name"
                />
                <ul style={{ color: "red" }}>
                  <li>{errors[0]}</li>
                </ul>
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <ul style={{ color: "red" }}>
                  <li>{errors[3]}</li>
                </ul>
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="Confirm Password"
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-900 text-white hover:bg-green-dark focus:outline-none my-1"
                  style={{
                    border: "none",
                    color: "white",
                    backgroundColor: "#00BFFF",
                    fontSize: "15px",
                    fontWeight: "900",
                  }}
                >
                  Create Account
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