import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bath,
  BedDouble,
  Car,
  Clock,
  Coffee,
  Compass,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Sparkles,
  Star,
  Utensils,
  Wifi,
} from "lucide-react";
import HeroSlideshow from "./components/HeroSlideshow";
import ImageGalleryLightbox from "./components/ImageGalleryLightbox";

const whatsappLink =
  "https://wa.me/6283867370668?text=Halo%2C%20saya%20ingin%20menyusun%20private%20tour%20dari%20Omahku%20Hostel.";
const lodgingWhatsappLink =
  "https://wa.me/6283867370668?text=Halo%2C%20saya%20ingin%20memesan%20kamar%20di%20Omahku%20Hostel.";
const phoneLink = "tel:+6283867370668";
const phoneDisplay = "+62 838-6737-0668";
const hostelAddress =
  "Timuran No.171, Brontokusuman, Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55153";
const mapsLink =
  "https://www.google.com/maps/place/Omahku+Hostel/@-7.818298,110.369136,754m/data=!3m1!1e3!4m9!3m8!1s0x2e7a579fda776057:0x786e1767dec1dcb3!5m2!4m1!1i2!8m2!3d-7.8182471!4d110.3690848!16s%2Fg%2F11rmrx985z?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D";

const lodgingGallery = [
  {
    src: "/omahku-kamar.png",
    alt: "Kamar tidur ber-AC dengan tempat tidur susun di Omahku Hostel",
    caption: "Kamar Dormitory AC",
  },
  {
    src: "/omahku-balkon.png",
    alt: "Balkon santai dengan meja dan bangku kayu",
    caption: "Balkon Santai",
  },
  {
    src: "/omahku-area-bersama.png",
    alt: "Area bersama dengan meja dan televisi untuk bercengkrama",
    caption: "Ruang Bersama",
  },
  {
    src: "/omahku-dapur.png",
    alt: "Dapur bersama lengkap dengan kompor dan wastafel",
    caption: "Dapur Bersama",
  },
  {
    src: "/omahku-ruang-ibadah.png",
    alt: "Ruang ibadah bersih dan tenang di Omahku Hostel",
    caption: "Ruang Ibadah / Mushola",
  },
  {
    src: "/omahku-kamar-mandi.png",
    alt: "Area wastafel dan 5 kamar mandi bersih",
    caption: "5 Kamar Mandi Bersih",
  },
];

const tourDestinations = [
  {
    slug: "lava-tour",
    src: "/tour-lava-merapi.png",
    alt: "Rombongan Lava Tour dengan jeep di depan Merapi",
    title: "Lava Tour Merapi",
    location: "Merapi, Sleman",
    duration: "1 Hari",
    price: "Rp300.000",
    description:
      "Petualangan jeep offroad menyusuri jejak erupsi Gunung Merapi, Bunker Kaliadem, Museum Sisa Hartaku, dan panorama lereng gunung.",
    features: ["Jeep 4x4 Terawat", "Bunker Kaliadem", "Penjemputan Hostel"],
  },
  {
    slug: "bromo",
    src: "/tour-bromo-sunrise.png",
    alt: "Wisatawan menikmati pemandangan matahari terbit di Bromo",
    title: "Sunrise Gunung Bromo",
    location: "Tengger, Jawa Timur",
    duration: "1-2 Hari",
    price: "Rp300.000",
    description:
      "Menyaksikan magisnya golden sunrise dari Penanjakan, kawah vulkanik aktif Bromo, serta hamparan luas Lautan Pasir Berbisik.",
    features: ["Sunrise Penanjakan", "Kawah Bromo Aktif", "Rute Fleksibel"],
  },
  {
    slug: "tumpak-sewu",
    src: "/tour-air-terjun.png",
    alt: "Wisatawan mengunjungi air terjun Tumpak Sewu",
    title: "Air Terjun Tumpak Sewu",
    location: "Lumajang, Jawa Timur",
    duration: "1-2 Hari",
    price: "Rp300.000",
    description:
      "Menikmati tirai air raksasa 'Niagara Indonesia', trekking menuruni tebing alami, dan segarnya panorama Goa Tetes.",
    features: ["Panorama Tirai Air", "Trekking Tebing", "Goa Tetes Eksotis"],
  },
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
            <small>Hostel &amp; Tour</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#penginapan">Penginapan</a>
          <a href="#private-tour">Private Tour</a>
          <a href="#kontak">Kontak</a>
        </div>
        <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          <MessageCircle size={15} aria-hidden="true" />
          Susun Perjalanan
        </a>
      </nav>

      <section className="hero" id="beranda" aria-labelledby="hero-title">
        <HeroSlideshow />
        <div className="hero-container">
          <div className="hero-copy">
            <div className="hero-badge-tag">
              <Sparkles size={13} className="hero-badge-icon" aria-hidden="true" />
              <span>Penginapan &amp; Private Tour Jogja</span>
            </div>
            <h1 id="hero-title">
              Tempat singgah untuk perjalanan yang lebih luas.
            </h1>
            <p className="hero-intro">
              Omahku Hostel menyediakan penginapan nyaman di pusat Jogja sekaligus private tour fleksibel menuju Merapi, Bromo, Tumpak Sewu, dan destinasi impian Anda tanpa terikat rombongan lain.
            </p>
            <div className="hero-actions">
              <a className="button button-primary hero-btn-main" href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle size={17} aria-hidden="true" />
                <span>Chat WhatsApp</span>
              </a>
              <a className="button button-outline" href="#penginapan">
                <span>Lihat Kamar</span>
              </a>
            </div>

            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <div className="hero-rating-stars">
                  <Star size={14} fill="#f1c0a8" color="#f1c0a8" aria-hidden="true" />
                  <Star size={14} fill="#f1c0a8" color="#f1c0a8" aria-hidden="true" />
                  <Star size={14} fill="#f1c0a8" color="#f1c0a8" aria-hidden="true" />
                  <Star size={14} fill="#f1c0a8" color="#f1c0a8" aria-hidden="true" />
                  <Star size={14} fill="#f1c0a8" color="#f1c0a8" aria-hidden="true" />
                  <span className="hero-rating-val">4.9 / 5.0</span>
                </div>
                <span className="hero-trust-label">Kepuasan Tamu (Google)</span>
              </div>
              <div className="hero-trust-divider" aria-hidden="true" />
              <div className="hero-trust-item">
                <span className="hero-trust-highlight">
                  Mulai Rp70.000 <small className="hero-trust-unit">/ orang</small>
                </span>
                <span className="hero-trust-label">Tarif Kamar Lengkap</span>
              </div>
              <div className="hero-trust-divider hero-trust-divider-extra" aria-hidden="true" />
              <div className="hero-trust-item hero-trust-item-extra">
                <span className="hero-trust-highlight">Pusat Kota Jogja</span>
                <span className="hero-trust-label">Kawasan Strategis Timuran</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lodging-section" id="penginapan" aria-labelledby="lodging-title">
        <div className="lodging-container">
          <div className="lodging-header">
            <div className="lodging-header-copy">
              <span className="panel-kicker">Penginapan Omahku</span>
              <h2 id="lodging-title">Tempat singgah nyaman di Jogja.</h2>
            </div>
            <div className="lodging-header-side">
              <p className="lodging-header-desc">
                Omahku Hostel menyediakan akomodasi yang bersih, tenang, dan terjangkau di kawasan Timuran, Mergangsan. Tempat beristirahat yang nyaman untuk backpacker, solo traveler, maupun rombongan keluarga dan teman.
              </p>
              <div className="lodging-perks-row" aria-label="Keunggulan Omahku Hostel">
                <span className="lodging-perk">
                  <MapPin size={15} className="lodging-perk-icon" aria-hidden="true" />
                  Kawasan Timuran, Mergangsan
                </span>
                <span className="lodging-perk">
                  <Wifi size={15} className="lodging-perk-icon" aria-hidden="true" />
                  Free Wi-Fi & Amenities Lengkap
                </span>
                <span className="lodging-perk">
                  <Coffee size={15} className="lodging-perk-icon" aria-hidden="true" />
                  Free Kopi & Teh Sepuasnya
                </span>
              </div>
            </div>
          </div>

          <div className="lodging-showcase">
            <div className="lodging-showcase-media">
              <Image
                src="/omahku-kamar.png"
                alt="Kamar tidur ber-AC dengan tempat tidur susun nyaman di Omahku Hostel"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="lodging-showcase-img"
              />
              <div className="lodging-media-badge">
                <span className="lodging-badge-tag">Kamar Dormitory AC</span>
                <span className="lodging-badge-sub">18 Kasur Nyaman & Terawat</span>
              </div>
            </div>

            <div className="lodging-showcase-info">
              <div className="lodging-price-card">
                <span className="lodging-price-kicker">Tarif Menginap</span>
                <div className="lodging-price-main">
                  <span className="lodging-price-currency">Rp</span>
                  <span className="lodging-price-num">70.000</span>
                  <span className="lodging-price-unit">/ orang / malam</span>
                </div>
                <p className="lodging-price-note">
                  Sudah termasuk akses seluruh fasilitas bersama, AC dingin, dan amenities
                </p>
              </div>

              <div className="lodging-facilities-wrap">
                <h3 className="lodging-facilities-title">Fasilitas yang Anda Dapatkan:</h3>
                <div className="lodging-amenities-grid">
                  <div className="lodging-amenity-item">
                    <BedDouble size={18} className="lodging-amenity-icon" aria-hidden="true" />
                    <div>
                      <strong>18 Kasur Nyaman</strong>
                      <small>Kamar dormitory ber-AC dingin</small>
                    </div>
                  </div>
                  <div className="lodging-amenity-item">
                    <Bath size={18} className="lodging-amenity-icon" aria-hidden="true" />
                    <div>
                      <strong>5 Kamar Mandi</strong>
                      <small>Dilengkapi water heater & wastafel</small>
                    </div>
                  </div>
                  <div className="lodging-amenity-item">
                    <Wifi size={18} className="lodging-amenity-icon" aria-hidden="true" />
                    <div>
                      <strong>Wi-Fi & Amenities</strong>
                      <small>Koneksi stabil, sabun & sampo</small>
                    </div>
                  </div>
                  <div className="lodging-amenity-item">
                    <Coffee size={18} className="lodging-amenity-icon" aria-hidden="true" />
                    <div>
                      <strong>Free Kopi & Teh</strong>
                      <small>Bebas seduh kapan saja</small>
                    </div>
                  </div>
                  <div className="lodging-amenity-item">
                    <Utensils size={18} className="lodging-amenity-icon" aria-hidden="true" />
                    <div>
                      <strong>Dapur Bersama</strong>
                      <small>Kompor, dispenser, alat makan</small>
                    </div>
                  </div>
                  <div className="lodging-amenity-item">
                    <Car size={18} className="lodging-amenity-icon" aria-hidden="true" />
                    <div>
                      <strong>Sewa Motor / Mobil</strong>
                      <small>Layanan sewa langsung di hostel</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lodging-booking-action">
                <a
                  className="button button-primary lodging-book-btn"
                  href={lodgingWhatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Pesan Kamar via WhatsApp
                </a>
                <span className="lodging-booking-note">
                  Check-in fleksibel • Konfirmasi cepat langsung dengan pemilik
                </span>
              </div>
            </div>
          </div>

          <div className="lodging-gallery-section">
            <div className="lodging-gallery-intro">
              <div>
                <span className="panel-kicker">Suasana & Fasilitas Hostel</span>
                <h3 className="lodging-gallery-title">Jelajahi setiap sudut Omahku Hostel.</h3>
              </div>
              <p className="lodging-gallery-hint">
                Klik foto untuk melihat tampilan lebih besar
              </p>
            </div>
            <ImageGalleryLightbox images={lodgingGallery} />
          </div>
        </div>
      </section>

      <section className="tour-section" id="private-tour" aria-labelledby="tour-title">
        <div className="tour-container">
          <div className="tour-header">
            <div className="tour-header-copy">
              <span className="panel-kicker">Private Tour Omahku</span>
              <h2 id="tour-title">Lanjutkan perjalanan ke destinasi pilihan.</h2>
            </div>
            <div className="tour-header-side">
              <p className="tour-header-desc">
                Private tour dibuat terpisah dan fleksibel dari layanan penginapan. Titik berangkat langsung dari Omahku Hostel, dengan rute dan jadwal yang disesuaikan bersama rombongan Anda tanpa terikat wisatawan lain.
              </p>
              <div className="tour-perks-row" aria-label="Keunggulan private tour">
                <span className="tour-perk">
                  <MapPin size={15} className="tour-perk-icon" aria-hidden="true" />
                  Start Omahku Hostel
                </span>
                <span className="tour-perk">
                  <Clock size={15} className="tour-perk-icon" aria-hidden="true" />
                  Waktu & Rute Fleksibel
                </span>
                <span className="tour-perk">
                  <Compass size={15} className="tour-perk-icon" aria-hidden="true" />
                  Armada & Driver Privat
                </span>
              </div>
            </div>
          </div>

          <div className="tour-grid" aria-label="Destinasi private tour pilihan">
            {tourDestinations.map((destination) => (
              <Link
                className="tour-card"
                href={`/private-tour/${destination.slug}`}
                key={destination.slug}
              >
                <div className="tour-card-media">
                  <Image
                    src={destination.src}
                    alt={destination.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="tour-card-img"
                  />
                  <div className="tour-card-badges">
                    <span className="tour-card-badge tour-card-badge--location">
                      <MapPin size={12} aria-hidden="true" />
                      {destination.location}
                    </span>
                    <span className="tour-card-badge tour-card-badge--duration">
                      <Clock size={12} aria-hidden="true" />
                      {destination.duration}
                    </span>
                  </div>
                </div>

                <div className="tour-card-body">
                  <h3 className="tour-card-title">{destination.title}</h3>
                  <p className="tour-card-description">{destination.description}</p>

                  <div className="tour-card-features">
                    {destination.features.map((feat) => (
                      <span key={feat} className="tour-feature-tag">
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="tour-card-footer">
                    <div className="tour-card-pricing">
                      <span className="tour-price-label">Mulai dari</span>
                      <span className="tour-price-value">
                        {destination.price}
                        <small>/ orang</small>
                      </span>
                    </div>
                    <span className="tour-card-cta">
                      Detail Rute
                      <ArrowUpRight size={15} className="tour-cta-icon" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="tour-custom-card">
            <div className="tour-custom-text">
              <span className="panel-kicker">Destinasi Lain & Rute Khusus</span>
              <h3>Punya rencana perjalanan atau tempat wisata impian sendiri?</h3>
              <p>
                Selain paket pilihan di atas, kami juga melayani perjalanan privat ke Dieng Plateau, Pantai Gunungkidul, Solo, Malang, maupun rute multi-hari lainnya. Sampaikan jumlah rombongan dan tempat yang ingin Anda kunjungi, rute akan dibahas dan disesuaikan bersama.
              </p>
            </div>
            <div className="tour-custom-action">
              <a
                className="button button-primary tour-custom-btn"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Diskusikan Rute Perjalanan
              </a>
              <span className="tour-custom-note">Konsultasi langsung via WhatsApp • Respon cepat</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-wrapper" id="kontak" aria-labelledby="contact-title">
        <div className="contact-card">
          <div className="contact-content-main">
            <div>
              <span className="panel-kicker contact-kicker">Siap Membicarakan Rencana?</span>
              <h2 id="contact-title" className="contact-title">
                Rencanakan perjalanan atau menginap bersama kami.
              </h2>
              <p className="contact-intro">
                Punya pertanyaan seputar ketersediaan kamar di Omahku Hostel, paket private tour ke Merapi, Bromo, Tumpak Sewu, atau ingin merancang rute liburan sendiri di Jogja? Hubungi kami langsung melalui WhatsApp.
              </p>
            </div>

            <div className="contact-cta-group">
              <a
                className="button button-light contact-main-btn"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Chat WhatsApp Sekarang
              </a>
              <span className="contact-cta-sub">
                Nomor: {phoneDisplay} • Respon ramah setiap hari
              </span>
            </div>
          </div>

          <div className="contact-panel-info">
            <div className="contact-info-block">
              <div className="contact-info-icon">
                <MapPin size={20} aria-hidden="true" />
              </div>
              <div className="contact-info-details">
                <strong>Alamat & Lokasi</strong>
                <p>
                  Omahku Hostel
                  <br />
                  {hostelAddress}
                </p>
                <a
                  className="contact-maps-link"
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buka di Google Maps
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-icon">
                <Phone size={20} aria-hidden="true" />
              </div>
              <div className="contact-info-details">
                <strong>Kontak Langsung</strong>
                <p>WhatsApp & Telepon: {phoneDisplay}</p>
                <span className="contact-info-badge">Fast Response via Chat</span>
              </div>
            </div>

            <div className="contact-strategic-perks">
              <span className="contact-perk-pill">
                <Navigation size={13} aria-hidden="true" />
                5 Menit ke Prawirotaman
              </span>
              <span className="contact-perk-pill">
                <Navigation size={13} aria-hidden="true" />
                10 Menit ke Malioboro & Keraton
              </span>
              <span className="contact-perk-pill">
                <Navigation size={13} aria-hidden="true" />
                Dekat Pusat Kuliner Jogja
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand footer-brand-link" href="#beranda" aria-label="Omahku Hostel, beranda">
              <span className="brand-mark" aria-hidden="true">
                O
              </span>
              <span>
                Omahku
                <small>Hostel</small>
              </span>
            </a>
            <p className="footer-tagline">
              Penginapan nyaman & layanan private tour terpercaya dari Jogja ke destinasi pilihan.
            </p>
          </div>

          <div className="footer-nav">
            <div className="footer-nav-col">
              <span className="footer-nav-title">Layanan</span>
              <a href="#penginapan">Penginapan Hostel</a>
              <a href="#private-tour">Private Tour Pilihan</a>
              <a href="#private-tour">Rute Tour Kustom</a>
            </div>
            <div className="footer-nav-col">
              <span className="footer-nav-title">Destinasi Populer</span>
              <Link href="/private-tour/lava-tour">Lava Tour Merapi</Link>
              <Link href="/private-tour/bromo">Sunrise Bromo</Link>
              <Link href="/private-tour/tumpak-sewu">Air Terjun Tumpak Sewu</Link>
            </div>
            <div className="footer-nav-col">
              <span className="footer-nav-title">Hubungi Kami</span>
              <a href={phoneLink}>WhatsApp: {phoneDisplay}</a>
              <a href={mapsLink} target="_blank" rel="noreferrer">
                Lokasi Google Maps
              </a>
              <span className="footer-address-note">Timuran, Mergangsan, Kota Yogyakarta</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 Omahku Hostel. Hak cipta dilindungi.</span>
          <span>Yogyakarta, Indonesia</span>
        </div>
      </footer>
    </main>
  );
}
