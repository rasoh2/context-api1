import Card from "../components/Card";
import { useContext } from "react";
import Context from "../context/context";
import "./favoritos.css";

const Favoritos = () => {
  const { photos } = useContext(Context);

  return (
    <>
      <div className="container-favoritos">
        {photos.map((photo, index) => {
          if (photo.liked)
            return <Card key={index} photo={photo} index={index} />;
        })}
      </div>
    </>
  );
};

export default Favoritos;
