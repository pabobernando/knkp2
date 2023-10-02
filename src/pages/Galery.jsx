import { useState } from "react";
import Navbar from "../components/Navbar"
import Porkab1 from '../assets/porkab1.jpeg'
import Porkab2 from '../assets/porkab2.jpeg'
import Porkab3 from '../assets/porkab3.jpeg'
import Porkab4 from '../assets/porkab4.jpeg'
import Porkab5 from '../assets/porkab5.jpeg'


const productPage = 8
const products = [
    {
      id: 1,
      name: 'Penutupan Porkab',
      event: '$48',
      imageSrc: Porkab1,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Penutupan Porkab',
      event: '$35',
      imageSrc: Porkab2,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      event: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      event: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        event: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 6,
        name: 'Machined Mechanical Pencil',
        event: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 7,
        name: 'Machined Mechanical Pencil',
        event: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 8,
        name: 'Machined Mechanical Pencil',
        event: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 9,
        name: 'Machined Mechanical Pencil',
        event: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 10,
        name: 'Machined Mechanical Pencil',
        event: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 11,
        name: 'Machined Mechanical Pencil',
        event: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 12,
        name: 'Machined Mechanical Pencil',
        event: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 13,
        name: 'Machined Mechanical Pencil',
        event: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 14,
        name: 'Machined Mechanical Pencil',
        event: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 15,
        name: 'Machined Mechanical Pencil',
        event: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 16,
        name: 'Machined Mechanical Pencil',
        event: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    
  ]
  
  export default function Galery() {

    const [currentPage, setCurrentPage] = useState(1);

  // Menghitung indeks awal dan akhir untuk produk pada halaman saat ini
  const startIndex = (currentPage - 1) * productPage;
  const endIndex = startIndex + productPage;

  // Mendapatkan produk yang akan ditampilkan pada halaman saat ini
  const currentProducts = products.slice(startIndex, endIndex);

  // Fungsi untuk mengganti halaman
  const goToPage = (page) => {
    setCurrentPage(page);
  };

    return (
        
        <div className="bg-gray-900">
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((product) => (
            <a key={product.id} href={product.imageSrc} download={product.name} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.event}</p>
            </a>
          ))}
        </div>

        {/* Tombol navigasi halaman */}
        <div className="mt-6">
          <nav className="flex justify-center" aria-label="Pagination">
            {Array.from({ length: Math.ceil(products.length / productPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`${
                  currentPage === index + 1 ? "text-indigo-600" : "text-gray-400 hover:text-gray-200"
                } px-3 py-2 text-sm font-medium`}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
    )
  }
  