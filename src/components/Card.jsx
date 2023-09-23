// Importa los componentes Heart, FilledHeart y el contexto llamado Context
import Heart from "./Heart";
import Context from "../context/context";
import { useContext, useState } from "react";
import HeartFilled from "./HeartFilled";
import "./card.css";

const Card = ({ photo, index }) => {
  // Obtiene datos y una función para actualizar datos del contexto
  const { photos, setPhotos } = useContext(Context);

  // Estado local para controlar si se ha hecho clic en el corazón
  const [modifiedLiked, setModifiedLiked] = useState(photo.liked);

  // Maneja el clic en el corazón (sin propagación al contenedor)
  const handleHeartClick = (e) => {
    e.stopPropagation(); // Evita que el clic se propague al contenedor
    const updatedPhotos = photos.map((photo, i) => {
      if (i === index) {
        return { ...photo, liked: !photo.liked }; // Cambia el estado de "liked"
      }
      return photo;
    });

    // Actualiza el estado de "liked" y la lista de fotos
    setModifiedLiked(!modifiedLiked);
    setPhotos(updatedPhotos);
  };

  // Maneja el clic en la tarjeta (para cambiar el estado de "liked")
  const handleCardClick = () => {
    const updatedPhotos = photos.map((photo, i) => {
      if (i === index) {
        return { ...photo, liked: !photo.liked }; // Cambia el estado de "liked"
      }
      return photo;
    });

    // Actualiza el estado de "liked" y la lista de fotos
    setModifiedLiked(!modifiedLiked);
    setPhotos(updatedPhotos);
  };

  // Renderiza la tarjeta con la foto y el corazón (con su evento onClick)
  return (
    <div onDoubleClick={handleCardClick} className="card">
      <div className="photo">
        <img src={photo.src.medium} alt={photo.alt} />
      </div>
      <div className="container-name-heart">
        <div className="icon-name">
          <i className="fa-solid fa-camera-retro"></i>
          <h3>{photo.photographer}</h3>
        </div>
        <div onClick={handleHeartClick}>
          {/* Renderiza el corazón lleno o vacío según el estado de "liked" */}
          {modifiedLiked ? <HeartFilled /> : <Heart />}
        </div>
      </div>
    </div>
  );
};

export default Card;
