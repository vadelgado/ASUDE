import React from 'react';
import SimpleGallery from './SimpleGallery';

export default function Gallery({ gallery }) {
  console.log('Gallery prop:', gallery);

  // Verificar si la galería tiene imágenes y formatearlas correctamente
  const images = gallery.length > 0 ? gallery.map((image) => ({
    largeURL: `/storage/${image.largeUrl}`, // Añadir la ruta /storage/
    thumbnailURL: `/storage/${image.largeUrl}`, // Añadir la ruta /storage/
    width: image.width,
    height: image.height,
  })) : [];

  console.log('Formatted images for SimpleGallery:', images);

  return (
    <div>
      <SimpleGallery
        galleryID="my-test-gallery"
        images={images}
      />
    </div>
  );
}
