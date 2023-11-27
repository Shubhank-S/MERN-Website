import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="container">
      <div>
        <div className="logo">
          <NavLink to="/" className="navlink">
            Shubhank-MERN
          </NavLink>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="navlink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navlink">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className="navlink">
              Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="navlink">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="navlink">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
