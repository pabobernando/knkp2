import { useState } from 'react';
import Navbar from '../components/Navbar'
import Gulat from '../assets/gulat.jpeg'
import Panahan from '../assets/panahan.jpeg'
import SepakBola from '../assets/sepakbola.jpeg'
import Lari from '../assets/lari.jpeg'
import Gateball from '../assets/gateball.jpeg'

function Berita() {

  return (
    <div className='bg-gray-900'>
      <Navbar />
      <div className='px-4 py-4 md:grid md:grid-cols-3 md:gap-4'>
        <div className='mb-8 md:mb-0'>
          <img src={Panahan} className="w-full mx-auto" />
          <h1 className='text-center text-3xl font-bold py-4 px-6 text-white'>Wates Juara Umum Panahan</h1>
          <p className='text-justify px-4 text-gray-400'>Kontingen Kapanewon Wates menjadi Juara umum cabang olahraga (cabor) panahan Pekan Olahraga Kabupaten (Porkab) Kulonprogo VI-2023 dengan meraih 3 medali emas, 1 perak dan 3 perunggu.
Pada lomba yang berlangsung di Lapangan Tayuban Panjatan, Minggu (24/9), Wates memperoleh 3 emas yang diraih Dhani Anwar bertanding di divisi nasional putra, Irsyad Fawas (barebow putra) dan Teguh Supriyana (Perpani bow putra). Galur di peringkat dua meraih 2 emas, 3 perak, 2 perunggu. Dua emas Galur diraih Hiban Adnan (recurve putra) dan Nirmala Ginawati (barebow putri).
Peringkat tiga ditempati Nanggulan dengan 1 emas, 1 perak, 4 perunggu. Emas Nanggulan diraih Heny Pratiwi (compound putri). Temon mendapat 1 emas yang diraih Arsyah Amni (nasional putri), Lendah memperoleh 1 emas diraih Yasinta Riena (recurve putri), Pengasih 1 emas diraih Sukarsih (Perpani bow putri) dan Sentolo 1 emas diraih R Zidan (compound putra).
Sementara pada cabor sepakbola putra di Alun-alun Wates, tim Wates melaju ke final setelah pada laga semifinal menang atas Nanggulan dengan lima gol tanpa balas yang dicetak Yandro Javierdo pada menit 3, Ibran Febriano menit 21, Dheni Dwi Nugroho menit 30, 63 dan Rama Hendra menit 50.</p>
        </div>
        <div className='mb-8 md:mb-0'>
          <img src={Gateball} className="w-full mx-auto" />
          <h1 className='text-center font-bold text-4xl py-4 text-white'>Galur Raih 2 Emas Gateball</h1>
          <p className='text-justify text-gray-400'>
          Kapanewon Galur berhasil meraih 2 medali emas, 1 perak pada cabang olahraga (cabor) gateball Pekan Olahraga Kabupaten (Porkab) Kulonprogo VI-2023 yang digelar Pengurus Kabupaten (Pengkab) Persatuan Gateball Seluruh Indonesia (Pergatsi) Kulonprogo pada Selasa-Rabu (26-27/9) di Lapangan Margosari Pengasih.
Dari tiga nomor pertandingan yang dilombakan, Galur merebut 2 emas. Medali emas pertama Galur diraih Agus Triwasono, Bardan Isnandar, Gadang Wahyu Trijoko, Irfan Dzaky Erdiastara dan Suci yang bertanding di nomor triple.
Emas kedua diraih Andi Nugroho, Ganjar Nugroho, Zudhi Pramono, Muhammad Najib Mubarok, Eko Dariyanto, Zakariya Ahmad, Devicha Naveeza dan Atthaya Naumi Gisellista (beregu). Sedangkan Lendah menyabet emas yang diraih Afif Fathurrohman Nur Sobri dan Fajar Mulia (ganda).
Sementara pada cabor biliar yang digelar di Dyo biliar Wates, medali emas nomor bola 10 direbut Rinto (Pengasih), perak diraih Sofyan (Pengasih) dan perunggu Achir (Pengasih). Di nomor bola 9 emas disabet Eko Widodo (Temon), perak Brian (Panjatan), perunggu Sumedi (Sentolo). Emas bola 8 diraih Rinto (Pengasih), perak Eko Widodo (Temon), perunggu Achir (Pengasih).
Sementara di cabor catur, Topik (Wates) sukses merebut medali emas cabang olahraga (cabor) catur nomor catur kilat putra setelah mengumpulkan poin tertinggi, 5. Perak diraih Seno Subekti (Temon) dengan poin 4 dan perak diraih Nursait (Panjatan).
Medali emas catur kilat putri disabet Devina Maharani (Sentolo), perak Runa Yulistira (Pengasih), perunggu Ana Kurnianti (Girimulyo). Emas catur cepat putra diraih Topik (Wates), Rizki Bayu R (Samigaluh), perunggu Nursait (Panjatan). Medali emas catur beregu diraih Pengasih, perak Samigaluh, perunggu Lendah.
          </p>
        </div>
        <div>
          <img src={SepakBola} className="w-full mx-auto" />
          <h1 className='text-center font-bold text-3xl py-4 px-6 text-white'>Pengasih Raih Emas Sepakbola</h1>
          <p className='text-justify px-4 text-gray-400'> Kapanewon Pengasih sukses meraih medali emas cabang olahraga (cabor) sepakbola putra Pekan Olahraga Kabupaten (Porkab) Kulonprogo VI-2023 setelah di laga final menang atas Wates dengan skor tipis 1-0.
Pada pertandingan final yang digelar di Alun-alun Wates, Jumat (29/9) sore, kedua tim bermain ketat sejak menit awal. Wates memberi ancaman ke gawang Pengasih pada menit 35. Bola hasil tendangan keras Ibran Febriano mampu diantisipasi kiper Pengasih, Nur Sultan Latif.
Pengasih mendapat peluang matang lewat sontekan Pininto Aldi pada menit 56. Namun bola hasil sepakannya berhasil ditepis kiper Wates, Wisang Herlambang. Pengasih berhasil unggul 1-0 lewat tendangan penalti Andika Wenang Sukmana pada menit 69.
Wasit Mufangat menunjuk titik putih setelah pemain belakang Wates melanggar pemain depan Pengasih di kotak terlarang. Skor tersebut bertahan hingga pertandingan usai. Pada perebutan medali perunggu yang berlangsung sehari sebelumnya, Nanggulan menang atas Lendah lewat adu penalti dengan skor 4-3. Adu tendangan penalti harus dilakukan setelah kedua tim di waktu normal bermain imbang 0-0</p>
        </div>
      </div>
      <div className='grid grid-cols-1'>
        {/* Konten tambahan */}
      </div>
      <div className='px-4 py-4 md:grid md:grid-cols-3 md:gap-4'>
        <div className='mb-8 md:mb-0'>
          <div className='py-4 px-4'>
            <h1 className='text-center py-4 border-t-4 font-semibold text-1xl text-white'>Ramaski Sabet Emas Panjat Tebing <br /> PORKAB KULONPROGO</h1>
            <p className='text-justify text-gray-400'>Ramaski Aswin Kristanto dari Kapanewon Lendah menyabet medali emas cabang olahraga (cabor) panjat tebing nomor lead putra Pekan Olahraga Kabupaten (Porkab) Kulonprogo 2023 yang berlangsung di SMKN 2 Pengasih, Sabtu (30/9).
Perak diraih Aji Tyas Pristono (Lendah) dan perunggu diraih Fatih Nashir Ma’amar (Girimulyo). Emas lead putri diraih Panca Setyani (Pengasih), perak Marsya Aulia Alany (Panjatan), perunggu Amelia Latihahanum (Pengasih). Emas lead beregu putra diraih Muhammad Makruf/Ramaski Aswin kristanto (Lendah). Perak Khoirul Hibah/Marji (Sentolo), perunggu Gajendra Naban Pamungkas/Luthfie Dzaky Zaidan (Pengasih).
Emas lead beregu putri Panca Setyani/Amelia Latihahanum (Pengasih), perak Marsya Aulia Alany/Evania Callysta Putri (Panjatan), perunggu Lia Santika Nugraheni/Melinda Raditya Puspitasari (Lendah). Emas lead mix Fatih Nashir Ma’amar/Eva Sulistyani (Girimulyo), perak Widiatama Adisucipto/Eiliyah Assyifa Amira Ryanta (Wates), perunggu Wartini/Marji (Sentolo).
Sementara pada cabor bolavoli yang berlangsung di GOR Cangkring Wates, tim putra Kokap meraih emas setelah di laga final menang atas Pengasih dengan skor 3-1 (19-25, 25-20, 27-24, 25-18). Perunggu diraih Girimulyo usai menang atas Kalibawang 3-1 (25-17, 23-25, 25-23, 25-22). Medali emas putri direbut Girimulyo setelah di final menang atas Kalibawang 3-0 (25-17, 25-17, 25-19). Perunggu diraih Pengasih usai menang atas Wates 3-1 (25-19, 22-25, 25-17, 25-22).</p>
          </div>
        </div>
        <div className='mb-8 md:mb-0'>
          <div className='py-4 px-4'>
            <div className='border-t-4'>
            <h1 className='text-1xl font-semibold text-white text-center'>ATLETIK PORKAB KULONPROGO</h1>
            <div className='mt-4'>
                <img src={Lari} />
              </div>
              <div className='mt-4'>
                <p className='text-gray-400 text-justify'>Kontingen Kapanewon Kokap menjadi Juara umum cabang olahraga (cabor) atletik Pekan Olahraga Kabupaten (Porkab) Kulonprogo VI-2023 dengan menyabet 5 medali emas, 2 perak dan 2 perunggu.
Pada lomba yang berlangsung di lintasan atletik Stadion Cangkring Wates, Minggu (24/9), Kokap merebut 5 emas yang diraih Galih Priambodo bertanding di nomor lari 100 m dan 200 m putra, Candra Rofingun (400 m putra), Syahrul Prayogo (tolak peluru putra) dan Shafa Aulia (1.500 m putra).
Kapanewon Panjatan di peringkat dua dengan 4 emas, 3 perak, 6 perunggu. Empat emas Panjatan diraih Riski Ahmad Fauzi (lompat jauh putra), Fabio Rino Wahyudi (lempar lembing putra), Diana Silviana (100 m putri dan lompat jauh putri).
Galur merebut 2 emas, 4 perak, 2 perunggu. Dua emas Galur diraih Guntur Pradana (1.500 m putra) dan Gilang Kunanti (tolak peluru putri). Wates mendapat 2 emas, 4 perak. Dua emas Wates diraih Darin Kuzaima Aulia (200 m putri) Afiqoh (400 m putri). Girimulyo merebut 1 emas yang diraih Fika Puspita (lempar lembing putri).
Sementara di cabor futsal putra yang berlangsung di Dyo futsal Wates, Pengasih meraih medali emas. Perak diraih Sentolo dan perunggu diraih Nanggulan. Sedangkan di cabor tenis meja beregu putra, emas direbut Pengasih, perak diraih Sentolo dan perunggu diraih Lendah. Emas beregu putri disabet Temon, perak diraih Pengasih, perunggu diraih Panjatan</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='py-4 px-4'>
            <h1 className='text-center py-4 border-t-4 font-semibold text-1xl text-white'>Yanuar Raih Emas Gulat <br /> PORKAB 2023</h1>
            <p className='text-justify text-gray-400'>Yanuar Agil Saputra asal Kapanewon Pengasih berhasil merebut medali emas cabang olahraga (cabor) gulat kelas 54 kg gaya bebas putra Pekan Olahraga Kabupaten (Porkab) Kulonprogo 2023 yang berlangsung di Aula MAN 2 Kulonprogo, Minggu (24/9).
Yanuar di laga final mengalahkan Rafly Fadhilah Thoriq (Wates) yang harus puas memperoleh perak. Medali perunggu diraih Robi Alfaris Samsudin. Emas kelas 57 kg bebas putra disabet Aldi Dani (Pengasih). Perak diraih Bima Sholehansyah (Lendah) dan perunggu diraih Raihan Al Shabir (Wates).
Kelas 65 kg bebas putra emas direbut Prakasa Insanu Rizqi (Nanggulan), perak Tisa Prasetyo (Sentolo), perunggu Syukur Setyoaji (Wates). Kelas 70 kg bebas putra emas diraih Iqbal Hadi Jaya (Temon), perak Waladi (Pengasih), perunggu Suko Dwi Prasetya (Wates). Kelas 125 kg bebas putra emas diraih Arif Saputra (Pengasih), perak Yogi Adi Saputra (Pengasih), perunggu Anggit Kurniawan (Galur).
Kelas 55 kg grego romawi putra, emas direbut Yanuar Agil Saputra (Pengasih), perak Bima Sholehansyah (Lendah), perunggu Raihan Al Shabir (Wates). Kelas 60 kg grego romawi putra, emas diraih Aldi Dani (Pengasih), perak  Rafly Fadhilah Thoriq (Wates), perunggu Robi Alfaris Samsudin (Pengasih). Kelas 63 kg grego romawi putra emas diraih Syukur Setyoaji (Wates), perak Ricky Aji Prasetya (Panjatan), perunggu Nafis Ahmad (Lendah).
Kelas 67 kg grego romawi putra emas diraih Prakasa Insanu Rizki (Nanggulan), perak Tisa Prasetyo (Nanggulan), perunggu Azka Aqlus Sadid (Nanggulan). Kelas 77 kg grego romawi putra emas diraih Iqbal Hadi Jaya (Temon), perak Waladi (Pengasih), perunggu Suko Dwi Prasetya (Wates).
Kelas 130 kg grego romawi putra emas disabet Yogi Adi Saputra (Pengasih), perak Anggit Kurniawan (Galur), perunggu Arif Saputra (Pengasih). Kelas 53 kg bebas putri emas Asti Surani (Wates), perak Indriana (Lendah), perunggu Salwa Aidinda (Pengasih). Kelas 62 kg bebas putri emas Widiyanti (Sentolo), perak Zendy Satya (Samigaluh), perunggu Devi Diana (Nanggulan)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Berita;
