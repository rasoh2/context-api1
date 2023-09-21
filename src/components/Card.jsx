import Heart from "./Heart";
import Context from "../context/context";
import { useContext, useState } from "react";
import FilledHeart from "./FilledHeart";
import "./card.css";

const Card = ({ photo, index }) => {
  const { photos, setPhotos } = useContext(Context);
  const [modifiedLiked, setModifiedLiked] = useState(photo.liked);

  const handleClick = (e) => {
    e.preventDefault();
    const modifiedPhotos = photos;

    modifiedPhotos[index].liked = !modifiedPhotos[index].liked;

    setModifiedLiked(photo.liked);
    setPhotos(modifiedPhotos);
  };

  return (
    <>
      <div className="card">
        <div className="photo">
          <img src={photo.src.medium} alt={photo.alt} />
        </div>
        <div className="container-name-heart">
          <div className="icon-name">
            <i className="fa-solid fa-camera-retro"></i>
            <h3>{photo.photographer}</h3>
          </div>
          {modifiedLiked ? (
            <div onClick={handleClick}>
              <FilledHeart />
            </div>
          ) : (
            <div onClick={handleClick}>
              <Heart />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Card;
