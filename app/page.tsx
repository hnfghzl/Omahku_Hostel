import Image from "next/image";
import HeroSlideshow from "./components/HeroSlideshow";

const whatsappLink =
  "https://wa.me/6282252288526?text=Halo%2C%20saya%20ingin%20menyusun%20private%20tour%20dari%20Omahku%20Hostel.";

const lodgingGallery = [
  { src: "/omahku-kamar.png", alt: "Kamar dengan tempat tidur susun di Omahku Hostel" },
  { src: "/omahku-ruang-ibadah.png", alt: "Ruang ibadah di Omahku Hostel" },
  { src: "/omahku-balkon.png", alt: "Balkon dengan meja dan bangku kayu" },
  { src: "/omahku-dapur.png", alt: "Dapur bersama dengan kompor dan wastafel" },
  { src: "/omahku-area-bersama.png", alt: "Area bersama dengan meja dan televisi" },
  { src: "/omahku-kamar-mandi.png", alt: "Area wastafel dan kamar mandi" },
];

const tourGallery = [
  { src: "/tour-lava-merapi.png", alt: "Rombongan Lava Tour dengan jeep di depan Merapi" },
  { src: "/tour-bromo-sunrise.png", alt: "Wisatawan menikmati pemandangan matahari terbit di Bromo" },
  { src: "/tour-bromo-kelompok.png", alt: "Rombongan wisatawan di kawasan pegunungan Bromo" },
  { src: "/tour-air-terjun.png", alt: "Wisatawan mengunjungi air terjun" },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Navigasi utama">
        <a className="brand" href="#beranda" aria-label="Omahku Hostel, beranda">
          <span className="brand-mark" aria-hidden="true">
            O
          </span>
          <span>
            Omahku
            <small>Hostel</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#penginapan">Penginapan</a>
          <a href="#private-tour">Private tour</a>
          <a href="#cara-kerja">Cara kerja</a>
        </div>
        <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          Susun perjalanan
        </a>
      </nav>

      <section className="hero" id="beranda" aria-labelledby="hero-title">
        <HeroSlideshow />
        <div className="hero-copy">
          <p className="eyebrow">Menginap dan menjelajah dari Omahku</p>
          <h1 id="hero-title">
            Tempat singgah untuk perjalanan yang lebih luas.
          </h1>
          <p className="hero-intro">
            Omahku Hostel menyediakan penginapan sekaligus private tour untuk
            membantu Anda menjelajahi Jogja, Merapi, Bromo, Lumajang, dan
            destinasi lain sesuai rencana perjalanan Anda.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Chat WhatsApp
            </a>
            <a className="text-link" href="#cara-kerja">
              Lihat cara kerja
            </a>
          </div>
        </div>
        <div className="hero-note" aria-label="Catatan layanan">
          <span className="contour-line" aria-hidden="true" />
          <p className="note-label">Tempat singgah</p>
          <p className="note-title">Omahku Hostel</p>
          <p className="note-copy">
            Menginap di Jogja, lalu bicarakan rute yang ingin Anda jelajahi.
          </p>
        </div>
      </section>

      <section className="offering-section lodging-section" id="penginapan" aria-labelledby="lodging-title">
        <div className="section-heading">
          <p className="eyebrow">Penginapan Omahku</p>
          <h2 id="lodging-title">Tempat singgah di Jogja.</h2>
        </div>
        <div className="service-content">
          <p>
            Omahku Hostel menyediakan tempat menginap untuk Anda yang sedang
            berada di Jogja, dengan fasilitas yang dapat digunakan selama
            perjalanan.
          </p>
          <div className="lodging-panel">
            <div className="lodging-image">
              <Image
                src="/omahku-kamar.png"
                alt="Kamar dengan tempat tidur susun di Omahku Hostel"
                width={640}
                height={480}
              />
            </div>
            <div className="lodging-details">
              <span className="panel-kicker">Penginapan</span>
              <h3>Tempat singgah di Omahku Hostel.</h3>
              <p className="lodging-price">
                Rp70.000 <span>per orang</span>
              </p>
              <ul className="facility-list">
                <li>18 kasur, kamar AC</li>
                <li>5 kamar mandi</li>
                <li>Water heater</li>
                <li>Wi-Fi dan amenities</li>
                <li>Free kopi atau teh</li>
                <li>Sewa motor atau mobil</li>
              </ul>
            </div>
          </div>
          <div className="lodging-gallery" aria-label="Galeri Omahku Hostel">
            {lodgingGallery.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={640}
                height={480}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="offering-section tour-section" id="private-tour" aria-labelledby="tour-title">
        <div className="section-heading">
          <p className="eyebrow">Private tour Omahku</p>
          <h2 id="tour-title">Lanjutkan perjalanan ke destinasi pilihan.</h2>
        </div>
        <div className="service-content">
          <p>
            Private tour dibuat terpisah dari layanan penginapan. Bicarakan
            waktu, jumlah peserta, dan tujuan yang ingin Anda kunjungi.
          </p>
          <div className="tour-intro">
            <span className="panel-kicker">Private tour</span>
            <h3>Mulai dari Lava Tour, Bromo, dan Lumajang.</h3>
            <p>
              Kami juga melayani pembicaraan untuk destinasi wisata lainnya.
              Sampaikan waktu, jumlah peserta, dan tempat yang ingin Anda
              kunjungi agar rute dapat dibahas bersama.
            </p>
            <a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer">
              Tanyakan rute perjalanan
            </a>
          </div>
          <div className="tour-gallery" aria-label="Galeri private tour">
            {tourGallery.map((image) => (
              <figure key={image.src}>
                <Image src={image.src} alt={image.alt} width={720} height={480} />
                <figcaption>{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" id="cara-kerja" aria-labelledby="process-title">
        <div className="section-heading">
          <p className="eyebrow">Cara kerja</p>
          <h2 id="process-title">Mulai dari percakapan yang sederhana.</h2>
        </div>
        <ol className="process-list">
          <li>
            <span className="process-number">01</span>
            <div>
              <h3>Ceritakan rencana Anda</h3>
              <p>Bagikan waktu yang tersedia, minat, dan hal yang ingin dihindari.</p>
            </div>
          </li>
          <li>
            <span className="process-number">02</span>
            <div>
              <h3>Susun arah perjalanan</h3>
              <p>Kami membahas rute yang masuk akal untuk ritme perjalanan Anda.</p>
            </div>
          </li>
          <li>
            <span className="process-number">03</span>
            <div>
              <h3>Berangkat dari Omahku</h3>
              <p>Detail perjalanan disepakati sebelum Anda memulai perjalanan.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="contact-section" id="kontak" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Siap membicarakan rencana?</p>
          <h2 id="contact-title">Rencanakan perjalanan setelah menginap.</h2>
        </div>
        <a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer">
          Hubungi lewat WhatsApp
        </a>
      </section>

      <footer className="site-footer">
        <span>Omahku Hostel</span>
        <span>Penginapan dan private tour dari Jogja</span>
      </footer>
    </main>
  );
}
