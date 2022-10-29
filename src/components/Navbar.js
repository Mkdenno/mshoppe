import "./navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const colorTxt = {
  color: "white",
  textDecoration: "none",
};
const NavBar = ({
  setUser,
  user,
  searchTerm,
  setSearchTerm,
  handleOnSubmit,
}) => {
  const navigate = useNavigate();

  const handleLogoutButton = () => {
    setUser(null);
    navigate("/");
    // fetch("/logout", { method: "DELETE" }).then((r) => {
    //   if (r.ok) {
    //     setUser(null);
    //   }
    // });
    // console.log("hi")
  };
  return (
    <nav className="navmargin navbar navbar-expand-lg ">
      <div className=" container-fluid shopper">
        <div>
          <h3>
            <span className="  text-danger">MoS</span>hopper
          </h3>
        </div>

        <div
          className=" listlinks collapse navbar-collapse "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                <Link to="/">Home</Link>
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#search">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleOnSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      {user ? (
        <div className="my-4 btn">
          <button
            type="button"
            className="btn btn-lg"
            style={{
              border: "none",
              color: "white",
              backgroundColor: "red",
              fontSize: "15px",
              fontWeight: "900",
            }}
            onClick={handleLogoutButton}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className=" btnlogin my-4 btnb">
          <button
            type="button"
            className="btnlog btn btn-lg "
            style={{
              border: "none",
              color: "white",
              backgroundColor: "#00BFFF",
              fontSize: "15px",
              fontWeight: "900",
            }}
          >
            <Link to="/login" style={colorTxt}>
              Login
            </Link>
          </button>

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
            <Link to="/signup" style={colorTxt}>
              Register
            </Link>
          </button>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
