import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Sambutan() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gray-900" />
        <div className="absolute inset-y-0 " />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="text-center text-gray-100 text-4xl font-bold">
            Sambutan Ketua Umum
          </h1>
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-400 sm:text-sm sm:leading-9">
              <p>
                Kita Harus Lebih Baik…..!!! Songsong Prestasi Masa Depan Bersama
                Web KONI Kulon Progo Assalamualaikum Warohmatuloh Wabarokatuh
                Salam sejahtera untuk kita Salam olahraga Sudah menjadi komitmen
                jajaran pengurus KONI Kabupaten Kulon Progo. Kami terus berupaya
                memajukan dan meningkatkan prestasi seluruh cabang olahraga.
                Upaya tersebut kami gerakkan secara bersama-sama diseluruh lini
                pengkab cabor melalui bidang masing-masing untuk menciptakan
                harmonisasi demi memperkuat cabang olahraga. Program kerja dan
                struktur organisasi kami perkuat dengan seminar, pelatihan
                cabor, workshop peningkatan kapasitas pelatih, training of
                trainer motivation pelatih serta pemberian motivasi penguatan
                cabang olahraga dengan turun ke bawah ke cabor-cabor dan
                kapanewon. Saya melihat adanya kemajuan yang diukur dengan hasil
                PORDA. Perolehan medali dari tahun ke tahun mengalami kemajuan
                yang cukup signifikan. Tahun 2013 KONI Kabupaten Kulon Progo
                memperoleh medali emas 19, tahun 2015 memperoleh 23 emas, tahun
                2017 memperoleh 33 medali emas dan tahun 2019 memperoleh 40
                medali emas. Bupati Kulon Progo selalu mensuport dengan
                menaikkan bonus tali asih kepada atlet peraih medali di event
                PORDA tahun 2019. Semoga PORDA ke-XVI tahun 2022 dan PORDA-PORDA
                berikutnya KONI Kulon Progo dapat meraih medali emas yang lebih
                baik. Aamiin….. Saya menghimbau kepada seluruh jajaran pengurus
                KONI Kulon Progo dan seluruh pengurus pengkab anggota KONI Kulon
                Progo untuk dapat memanfaatkan fasilitas Web KONI Kulon Progo
                ini sebagai sarana komunikasi dan input data pelaku olahraga.
                Demikian sambutan saya dan salam olahraga Ketua Umum KONI
                Kabupaten Kulon Progo
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-50 w-50 rounded-full"
                alt=""
                src="https://pub-c95c5c19a766467e98a17366a50fbabc.r2.dev/16.jpeg"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Kusdira Ba</div>
                <svg
                  viewBox="0 0 1 1"
                  width={1}
                  height={1}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Ketua Umum</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Sambutan;
