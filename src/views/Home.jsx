import Card from "../components/Card";
import { useContext } from "react";
import Context from "../context/context";
import "./home.css";

const Home = () => {
  const { photos } = useContext(Context);

  return (
    <>
      <div className="container-galeria">
        {photos.map((photo, index) => {
          return <Card key={index} photo={photo} index={index} />;
        })}
      </div>
    </>
  );
};

export default Home;
