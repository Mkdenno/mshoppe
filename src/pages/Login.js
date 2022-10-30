import "./form.css";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

function Login({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const loginInput = {
      username,
      password,
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user:loginInput
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          navigate('/');
        });
      }
    });
  };

  return (
    <>
    <div className="container login-intro">
      <div className="logingif">
        <h3 className="headercolor"> Please Login</h3>
        <img src="./images/loging.gif" alt="GIF"/>
      </div>

      <div className="form">
      <div className="form__container">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full text-center py-3 px-8 rounded bg-green-900 text-white hover:bg-green-dark focus:outline-none my-1"
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
        <span className="registerloginspan">
        hava an account? please <a href="/signup">Register</a>
      </span>
      </div>

    </div>
    </div>
    </>
   
  );
}
export default Login;