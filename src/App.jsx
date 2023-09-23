import "./App.css";
import photosJson from "./assets/photos.json";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./context/context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // Define el estado inicial usando el hook useState para almacenar las fotos
  const [photos, setPhotos] = useState(photosJson.photos);
  // Retorna la estructura de la aplicación
  return (
    <div className="app">
      {/* Proporciona el contexto a toda la aplicación */}
      <Context.Provider value={{ photos, setPhotos }}>
        {/* Configura el enrutamiento usando BrowserRouter */}
        <BrowserRouter>
          {/* Renderiza el componente Navbar para la navegación */}
          <Navbar />
          {/* Configura las rutas y sus componentes correspondientes */}
          <Routes>
            {/* Renderiza el componente Home cuando se accede a la ruta "/" */}
            <Route path="/" element={<Home />} />
            {/* Renderiza el componente Favoritos cuando se accede a la ruta "/favoritos" */}
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
          {/* Renderiza el componente Footer al final de la aplicación */}
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
