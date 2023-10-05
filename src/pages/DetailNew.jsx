import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { beritaData } from '../store/beritaData';

const DetailNew = () => {
  const { id } = useParams();
  const news = beritaData.find((item) => item.id === parseInt(id));

  if (!news) {
    return <div>News not found</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto py-10">
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <img
            src={news.imgSrc}
            alt={news.title}
            className="w-full h-auto"
          />
          <div className="px-6 py-4">
            <h1 className="text-3xl font-bold mb-2 text-white">{news.title}</h1>
            <p className="text-gray-200 text-sm">{news.content}</p>
          </div>
          <div className="px-6 py-4">
            <Link
              to="/Berita"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Kembali ke Berita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailNew;
