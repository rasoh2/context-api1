// Importa los componenetes y rutas

import Card from "../components/Card";
import { useContext } from "react";
import Context from "../context/context";
import "./favoritos.css";

// Define el componente Funcional Favoritos
const Favoritos = () => {
  // Utiliza el hook useContext para obtener datos del contexto
  const { photos } = useContext(Context);

  // Retorna la estructura JSX del componente
  return (
    <>
      {/* Contenedor para las tarjetas de fotos favoritas */}
      <div className="container-favoritos">
        {/* Mapea a través de las fotos y muestra solo las que están marcadas como "liked" */}
        {photos.map((photo, index) => {
          // Verifica si la foto está marcada como favorita
          if (photo.liked)
            // Renderiza el componente Card para la foto favorita
            return <Card key={index} photo={photo} index={index} />;
        })}
      </div>
    </>
  );
};

export default Favoritos;
