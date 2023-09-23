import "./footer.css";

// Define el componente funcional Footer
const Footer = () => {
  return (
    <footer>
      {/* Contenedor para el contenido del pie de página */}
      <div className="container-footer">
        {/* Muestra el año actual y el texto "Photography" */}
        <p>&copy; {new Date().getFullYear()} Photography </p>
      </div>
    </footer>
  );
};

export default Footer; // Exporta el componente Footer para su uso en otras partes de la aplicación
