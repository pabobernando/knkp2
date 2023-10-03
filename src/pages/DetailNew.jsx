import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const newsData = [
  {
    id: 1,
    title: 'Wates Juara Umum Panahan',
    content: 'Kontingen Kapanewon Wates menjadi Juara umum cabang olahraga (cabor) panahan Pekan Olahraga Kabupaten (Porkab) Kulonprogo VI-2023 dengan meraih 3 medali emas, 1 perak dan 3 perunggu. Pada lomba yang berlangsung di Lapangan Tayuban Panjatan, Minggu (24/9), Wates memperoleh 3 emas yang diraih Dhani Anwar bertanding di divisi nasional putra, Irsyad Fawas (barebow putra) dan Teguh Supriyana (Perpani bow putra). Galur di peringkat dua meraih 2 emas, 3 perak, 2 perunggu. Dua emas Galur diraih Hiban Adnan (recurve putra) dan Nirmala Ginawati (barebow putri). Peringkat tiga ditempati Nanggulan dengan 1 emas, 1 perak, 4 perunggu. Emas Nanggulan diraih Heny Pratiwi (compound putri). Temon mendapat 1 emas yang diraih Arsyah Amni (nasional putri), Lendah memperoleh 1 emas diraih Yasinta Riena (recurve putri), Pengasih 1 emas diraih Sukarsih (Perpani bow putri) dan Sentolo 1 emas diraih R Zidan (compound putra). Sementara pada cabor sepakbola putra di Alun-alun Wates, tim Wates melaju ke final setelah pada laga semifinal menang atas Nanggulan dengan lima gol tanpa balas yang dicetak Yandro Javierdo pada menit 3, Ibran Febriano menit 21, Dheni Dwi Nugroho menit 30, 63 dan Rama Hendra menit 50.',
  },
  {
    id: 2,
    title: 'Berita 2',
    content: 'Ini adalah konten dari berita 2.',
  },
  {
    id: 3,
    title: 'Berita 3',
    content: 'Ini adalah konten dari berita 3.',
  },
];

const DetailNew = () => {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === parseInt(id));

  if (!news) {
    return <div>News not found</div>;
  }

  return (
    <div className="container mx-auto mt-5">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://placeimg.com/800/400/nature"
          alt={news.title}
          className="w-full h-auto"
        />
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
          <p className="text-gray-700 text-sm">{news.content}</p>
        </div>
        <div className="px-6 py-4">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Kembali ke Berita
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailNew;
