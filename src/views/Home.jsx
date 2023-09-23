import Card from "../components/Card";
import { useContext } from "react";
import Context from "../context/context";
import "./home.css";

// Define el componente funcional Home
const Home = () => {
  // Utiliza el hook useContext para obtener datos del contexto
  const { photos } = useContext(Context);

  return (
    <>
      {/* Contenedor para la galería de fotos */}
      <div className="container-galeria">
        {photos.map((photo, index) => {
          // Renderiza el componente Card para cada foto en el contexto
          return <Card key={index} photo={photo} index={index} />;
        })}
      </div>
    </>
  );
};

export default Home;
