import { useState } from "react";
import Navbar from "../components/Navbar";
import { products } from "../store/galeryData";
import NavbarAndroid from "../components/NavbarAndroid";

const productPage = 8;

export default function Galery() {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * productPage;
  const endIndex = startIndex + productPage;
  const currentProducts = products.slice(startIndex, endIndex);
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
            <a
              key={product.id}
              href={product.imageSrc}
              download={product.name}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-300">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-500">
                {product.event}
              </p>
            </a>
          ))}
        </div>

        {/* Tombol navigasi halaman */}
        <div className="mt-6">
          <nav className="flex justify-center" aria-label="Pagination">
            {Array.from({
              length: Math.ceil(products.length / productPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "text-indigo-600"
                    : "text-gray-400 hover:text-gray-200"
                } px-3 py-2 text-sm font-medium`}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <NavbarAndroid />
    </div>
  );
}
