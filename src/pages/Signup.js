import "./form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      username,
      password,
      password_confirmation: passwordConfirmation,
    };

    fetch("https://mshoppe.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user: inputData,
      }),
    }).then((response) => {

      if (response.ok) {

        response.json().then((user) => {
          console.log(user)
        });
        navigate("/login");
      } else {
        response.json().then((errorData) => {
          console.log(errorData)

          setErrors(errorData.errors)
        });
      }
    });
    setUsername("");
    setPassword("");
    setPasswordConfirmation("");
  };
  // {
  //   errors.length > 0 && (
  //     <ul style={{ color: "red" }}>
  //       {errors.map((error) => (
  //         <li key={error}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  return (
    <>
      <div className="container signup-intro">
        <div className="row">
        <div className="registergif col-md-5" >
          <h3 className="headercolor">  Register with us!</h3>
          <img src="./images/registerg.gif" alt="GIF" />
        </div>
        <div className="form col-md-7">
          <div className="form__container">
            <form onSubmit={handleSubmit}>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Full Name"
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

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
            <span className="registerloginspan">
              hava an account? please <a href="/login">login</a>
            </span>
          </div>
        </div>
        </div>
        </div>
    </>
  );
}
export default Signup;
