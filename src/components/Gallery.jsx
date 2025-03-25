import React, { useState } from 'react';
import './GalleryModule.css';

export const Gallery = () => {
  // Estado para la imagen principal
  const [featuredImage, setFeaturedImage] = useState(
    'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg'
  );

  // Lista de imágenes de la galería
  const galleryImages = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
  ];

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
