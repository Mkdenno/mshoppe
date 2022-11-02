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
  setIsHideContent,
}) => {
  const navigate = useNavigate();

  const onNavClick = () => {
    setIsHideContent(true);
  };

  const handleLogoutButton = () => {
    setUser(null);
    navigate("/");
 
  };
  return (
    <nav className="navmargin navbar navbar-expand-lg  ">
      <div className=" container container-fluid shopper">
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
              <a className="nav-link" href="#home" onClick={onNavClick}>
                Home
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
          <form
            className="d-flex inputfom"
            role="search"
            onSubmit={handleOnSubmit}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by product name..."
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
        <div>
          <Link to="/signup" style={colorTxt} >

            <button className="btnnavbar">
            Get Started
            </button>
            
          </Link>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
