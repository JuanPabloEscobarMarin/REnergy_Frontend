import React, { useState } from "react";
import "./GalleryModule.css";
import Ev1 from "./evidencias/ev1.jpg";
import Ev2 from "./evidencias/ev2.jpg";
import Ev3 from "./evidencias/ev3.jpg";
import Ev4 from "./evidencias/ev4.jpg";
import Ev5 from "./evidencias/ev5.jpg";

export const Gallery = () => {
  // Estado para la imagen principal
  const [featuredImage, setFeaturedImage] = useState(Ev2);

  // Lista de imágenes de la galería
  const galleryImages = [Ev1, Ev2, Ev3, Ev4, Ev5];

  return (
    <div className="gallery-container">
      {/* Imagen principal */}
      <div>
        <img
          className="gallery-image featured-image"
          src={featuredImage}
          alt="Featured"
        />
      </div>
      {/* Imágenes de la galería */}
      <div className="grid grid-cols-5 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index}>
            <img
              className="gallery-image gallery-thumbnail cursor-pointer"
              src={image}
              alt={`Gallery ${index + 1}`}
              onClick={() => setFeaturedImage(image)} // Cambia la imagen principal al hacer clic
            />
          </div>
        ))}
      </div>
    </div>
  );
};
