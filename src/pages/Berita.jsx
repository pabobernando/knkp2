import { useState } from 'react';
import Navbar from '../components/Navbar'

function Berita() {
    const [images, setImages] = useState([
        { id: 1, src: 'https://source.unsplash.com/random/300x300', alt: 'Image 1', caption: 'deskripsine' },
        { id: 2, src: 'https://source.unsplash.com/random/300x301', alt: 'Image 2', caption: 'deskripsine' },
        { id: 3, src: 'https://source.unsplash.com/random/300x302', alt: 'Image 3', caption: 'deskripsine' },
        { id: 4, src: 'https://source.unsplash.com/random/300x303', alt: 'Image 4', caption: 'deskripsine' },
      ]);
  return (
    <div>
        <Navbar />
        <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        {images.map((image) => (
          <div key={image.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <img src={image.src} alt={image.alt} className="w-full rounded-lg shadow-lg" />
            <p className="mt-2 text-sm text-gray-600">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Berita