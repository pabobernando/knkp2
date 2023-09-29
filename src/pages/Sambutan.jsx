import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Sambutan() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-white">Sambutan Ketua Umum</h1>
            <p className="text-lg leading-loose text-gray-400">
            Kita Harus Lebih Baik…..!!! Songsong Prestasi Masa Depan Bersama Web KONI Kulon Progo Assalamualaikum Warohmatuloh Wabarokatuh Salam sejahtera untuk kita Salam olahraga Sudah menjadi komitmen jajaran pengurus KONI Kabupaten Kulon Progo. Kami terus berupaya memajukan dan meningkatkan prestasi seluruh cabang olahraga. Upaya tersebut kami gerakkan secara bersama-sama diseluruh lini pengkab cabor melalui bidang masing-masing untuk menciptakan harmonisasi demi memperkuat cabang olahraga. Program kerja dan struktur organisasi kami perkuat dengan seminar, pelatihan cabor, workshop peningkatan kapasitas pelatih, training of trainer motivation pelatih serta pemberian motivasi penguatan cabang olahraga dengan turun ke bawah ke cabor-cabor dan kapanewon. Saya melihat adanya kemajuan yang diukur dengan hasil PORDA. Perolehan medali dari tahun ke tahun mengalami kemajuan yang cukup signifikan. Tahun 2013 KONI Kabupaten Kulon Progo memperoleh medali emas 19, tahun 2015 memperoleh 23 emas, tahun 2017 memperoleh 33 medali emas dan tahun 2019 memperoleh 40 medali emas. Bupati Kulon Progo selalu mensuport dengan menaikkan bonus tali asih kepada atlet peraih medali di event PORDA tahun 2019. Semoga PORDA ke-XVI tahun 2022 dan PORDA-PORDA berikutnya KONI Kulon Progo dapat meraih medali emas yang lebih baik. Aamiin….. Saya menghimbau kepada seluruh jajaran pengurus KONI Kulon Progo dan seluruh pengurus pengkab anggota KONI Kulon Progo untuk dapat memanfaatkan fasilitas Web KONI Kulon Progo ini sebagai sarana komunikasi dan input data pelaku olahraga. Demikian sambutan saya dan salam olahraga Ketua Umum KONI Kabupaten Kulon Progo
            </p>
            <p className='mt-5 font-extrabold text-white'>KUSDIRA, BA</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Sambutan;
