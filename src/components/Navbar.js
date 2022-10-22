import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";
const NavBar = () => {
  return (
    <nav className=" container justify-around navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
          <h3><span className="text-danger">MoS</span>hopper</h3>

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
      <span className="cartIcon">
            <AiOutlineShoppingCart />
          </span>
    </nav>
  );
};
export default NavBar;