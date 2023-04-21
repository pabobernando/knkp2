import React, { useState } from 'react';

const images = [
  'https://source.unsplash.com/random/400x200',
  'https://source.unsplash.com/random/400x201',
  'https://source.unsplash.com/random/400x202',
];

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="relative w-full">
      <img
        src={images[currentImage]}
        alt="carousel image"
        className="object-cover w-full h-64 sm:h-80 md:h-96"
      />
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          className="p-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
          onClick={previousImage}
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          className="p-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
          onClick={nextImage}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
