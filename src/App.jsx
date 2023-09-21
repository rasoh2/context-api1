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
  const [photos, setPhotos] = useState(photosJson.photos);
  return (
    <div className="app">
      <Context.Provider value={{ photos, setPhotos }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
