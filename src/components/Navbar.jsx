import { Link } from "react-router-dom";
import "../components/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-home">
        <Link to="/">
          {" "}
          <h3>Home</h3>
        </Link>
      </div>
      <div className="nav-favoritos">
        <Link to="/favoritos">
          {" "}
          <h3>Favoritos</h3>{" "}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
