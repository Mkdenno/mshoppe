import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";
import { Link } from "react-router-dom";


const colorTxt = {
  color: "white",
  textDecoration: "none",
};
const NavBar = () => {
  return (
    <nav className=" container justify-around navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <h3>
          <span className="text-danger">MoS</span>hopper
        </h3>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="my-4 btn">
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
                <Link to="/register" style={colorTxt}>
                  Login
                </Link>
              </button>
            </div> 
            <div className="my-4 btn">
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
                <Link to="/register" style={colorTxt}>
                  Register
                </Link>
              </button>
            </div>    
      <span className="cartIcon">
        <AiOutlineShoppingCart />
      </span>
    </nav>
  );
};
export default NavBar;
