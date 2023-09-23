import { Link } from "react-router-dom";
import "../components/navbar.css";
// Define el componente funcional Navbar
function Navbar() {
  return (
    // Estructura de la barra de navegación
    <nav className="navbar">
      {/* Sección para la opción "Home" */}
      <div className="nav-home">
        {/* Utiliza 'Link' para redirigir a la página principal ("/") */}
        <Link to="/">
          <h3>Home</h3> {/* Texto de la opción "Home" */}
        </Link>
      </div>
      {/* Sección para la opción "Favoritos" */}
      <div className="nav-favoritos">
        {/* Utiliza 'Link' para redirigir a la página de "Favoritos" ("/favoritos") */}
        <Link to="/favoritos">
          <h3>Favoritos</h3> {/* Texto de la opción "Favoritos" */}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
