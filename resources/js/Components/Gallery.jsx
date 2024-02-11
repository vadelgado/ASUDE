import React, { Component } from 'react';
import SimpleGallery from './SimpleGallery';



export default function Gallery() {

    return (
        <div>
        <SimpleGallery
          galleryID="my-test-gallery"
          images={[
            {
              largeURL:
                './1.webp',
              thumbnailURL:
                './1tmb.webp',
              width: 1098,
              height: 1980,
            },
            {
              largeURL:
                './2.webp',
              thumbnailURL:
                './2tmb.webp',
              width: 1098,
              height: 1980,
            },
            {
              largeURL:
                './3.webp',
              thumbnailURL:
                './3tmb.webp',
              width: 1098,
              height: 1980,
            },
            {
              largeURL:
                './4.webp',
              thumbnailURL:
                './4tmb.webp',
              width: 1098,
              height: 1980,
            },
            {
              largeURL:
                './5.webp',
              thumbnailURL:
                './5tmb.webp',
              width: 1098,
              height: 1980,
            },
            {
              largeURL:
                './6.webp',
              thumbnailURL:
                './6tmb.webp',
              width: 1098,
              height: 1980,
            },
            {
              largeURL:
                './7.webp',
              thumbnailURL:
                './7tmb.webp',
              width: 1377,
              height: 1600,
            },
            {
              largeURL:
                './8.webp',
              thumbnailURL:
                './8tmb.webp',
              width: 1377,
              height: 1600,
            },
          ]}
        />
      </div>
    );
}
