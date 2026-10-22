"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MapPin,
  Clock,
  Compass,
  Car,
  CheckCircle2,
  XCircle,
  AlertCircle,
  MessageCircle,
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Phone,
  Navigation,
  BedDouble,
  Sparkles,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { tourDestinationsData } from "../data/tourData";

const whatsappNumber = "6283867370668";
const phoneDisplay = "+62 838-6737-0668";
const phoneLink = `tel:+${whatsappNumber}`;
const hostelAddress =
  "Jl. Timuran MG.III No.68, Brontokusuman, Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55153";
const mapsLink = "https://maps.app.goo.gl/BovN17P3i251mGkX9";

type DestinationPageProps = {
  slug: string;
};

export default function DestinationPage({ slug }: DestinationPageProps) {
  const tour = tourDestinationsData[slug] || tourDestinationsData["lava-tour"];
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    tour.whatsappMessage,
  )}`;

  const activePhoto = tour.gallery[selectedPhoto] ?? tour.gallery[0];

  // Related tours (all other tours except current)
  const relatedTours = Object.values(tourDestinationsData).filter(
    (item) => item.slug !== tour.slug,
  );

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (event.key === "ArrowRight") {
        setSelectedPhoto((prev) => (prev + 1) % tour.gallery.length);
      } else if (event.key === "ArrowLeft") {
        setSelectedPhoto(
          (prev) => (prev - 1 + tour.gallery.length) % tour.gallery.length,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, tour.gallery.length]);

  return (
    <main className="destination-page">
      {/* Top Navigation */}
      <nav className="destination-nav" aria-label="Navigasi halaman tour">
        <Link className="brand destination-brand" href="/" aria-label="Omahku Hostel, beranda">
          <span className="brand-mark" aria-hidden="true">
            O
          </span>
          <span>
            Omahku
            <small>Hostel &amp; Tour</small>
          </span>
        </Link>

        <div className="destination-nav-links">
          <Link className="destination-nav-item" href="/">
            Beranda
          </Link>
          <Link className="destination-nav-item" href="/#penginapan">
            Penginapan
          </Link>
          <Link className="destination-nav-item" href="/#private-tour">
            Semua Tour
          </Link>
          <Link className="destination-nav-item" href="#kontak">
            Kontak
          </Link>
        </div>

        <a
          className="button button-primary destination-nav-cta"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={15} aria-hidden="true" />
          <span>Chat WhatsApp</span>
        </a>
      </nav>

      <div className="destination-shell">
        {/* Breadcrumb & Back Link */}
        <div className="destination-header-bar">
          <nav className="destination-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#private-tour">Private Tour</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{tour.title}</span>
          </nav>
          <Link className="destination-back-btn" href="/#private-tour">
            <ArrowLeft size={14} aria-hidden="true" />
            <span>Semua Pilihan Tour</span>
          </Link>
        </div>

        {/* Hero Title & Meta Header */}
        <header className="destination-hero-header">
          <div className="destination-title-wrap">
            <div className="destination-kicker-row">
              <span className="panel-kicker">{tour.badge}</span>
              <span className="destination-pill-sep" aria-hidden="true">
                •
              </span>
              <span className="destination-departure-pill">
                <Navigation size={12} aria-hidden="true" />
                Start Omahku Hostel Jogja
              </span>
            </div>
            <h1 id="destination-title" className="destination-main-title">
              {tour.title}
            </h1>
            <p className="destination-subtitle">{tour.summary}</p>
          </div>

          <div className="destination-quick-facts" aria-label="Informasi singkat tour">
            <div className="destination-fact-item">
              <MapPin size={17} className="destination-fact-icon" aria-hidden="true" />
              <div>
                <span className="destination-fact-label">Lokasi Destinasi</span>
                <strong>{tour.location}</strong>
              </div>
            </div>
            <div className="destination-fact-item">
              <Clock size={17} className="destination-fact-icon" aria-hidden="true" />
              <div>
                <span className="destination-fact-label">Durasi Perjalanan</span>
                <strong>{tour.duration}</strong>
              </div>
            </div>
            <div className="destination-fact-item">
              <Car size={17} className="destination-fact-icon" aria-hidden="true" />
              <div>
                <span className="destination-fact-label">Fasilitas Transport</span>
                <strong>{tour.vehicleType}</strong>
              </div>
            </div>
          </div>
        </header>

        {/* Media Showcase: Featured Photo + Gallery Thumbnails */}
        <section className="destination-showcase-section" aria-label="Galeri Foto Destinasi">
          <div className="destination-media-display">
            <div className="destination-featured-frame">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 68vw"
                className="destination-featured-img"
              />
              <div className="destination-featured-gradient" aria-hidden="true" />
              <div className="destination-featured-caption">
                <span className="destination-caption-text">{activePhoto.caption}</span>
                <span className="destination-photo-counter">
                  {selectedPhoto + 1} dari {tour.gallery.length} foto
                </span>
              </div>
              <button
                type="button"
                className="destination-zoom-trigger"
                onClick={() => setIsLightboxOpen(true)}
                aria-label={`Buka foto layar penuh: ${activePhoto.caption}`}
              >
                <ZoomIn size={16} aria-hidden="true" />
                <span>Perbesar Foto</span>
              </button>
            </div>

            {tour.gallery.length > 1 && (
              <div className="destination-gallery-strip" aria-label="Pilih foto destinasi">
                {tour.gallery.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    className={`destination-thumb-btn${selectedPhoto === index ? " is-active" : ""}`}
                    onClick={() => setSelectedPhoto(index)}
                    aria-label={`Pilih foto ${index + 1}: ${photo.caption}`}
                    aria-pressed={selectedPhoto === index}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 600px) 33vw, 200px"
                      className="destination-thumb-image"
                    />
                    <span className="destination-thumb-num" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Main Content Grid: Detailed Narrative, Highlights, Rundown, Inclusions vs Booking Sidebar */}
        <div className="destination-body-grid">
          {/* Left Column: Comprehensive Experience Details */}
          <div className="destination-main-col">
            {/* Story & Overview */}
            <section className="destination-card-panel" aria-labelledby="overview-heading">
              <span className="panel-kicker">Tentang Perjalanan</span>
              <h2 id="overview-heading" className="destination-panel-title">
                Sensasi petualangan privat tanpa terikat rombongan lain.
              </h2>
              <div className="destination-narrative">
                {tour.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Highlights Grid */}
            <section className="destination-card-panel" aria-labelledby="highlights-heading">
              <div className="destination-panel-header">
                <div>
                  <span className="panel-kicker">Daya Tarik Utama</span>
                  <h2 id="highlights-heading" className="destination-panel-title">
                    Spot &amp; momen istimewa yang akan Anda temui.
                  </h2>
                </div>
                <Sparkles size={20} className="destination-decor-icon" aria-hidden="true" />
              </div>
              <div className="destination-highlights-grid">
                {tour.highlights.map((highlight, index) => (
                  <div className="destination-highlight-item" key={index}>
                    <div className="destination-highlight-badge">
                      <Compass size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="destination-highlight-title">{highlight.title}</h3>
                      <p className="destination-highlight-desc">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary Timeline */}
            <section className="destination-card-panel" aria-labelledby="itinerary-heading">
              <div className="destination-panel-header">
                <div>
                  <span className="panel-kicker">Rundown Perjalanan</span>
                  <h2 id="itinerary-heading" className="destination-panel-title">
                    Rekomendasi jadwal &amp; alur waktu perjalanan.
                  </h2>
                </div>
                <Clock size={20} className="destination-decor-icon" aria-hidden="true" />
              </div>
              <p className="destination-itinerary-intro">
                Jadwal di bawah merupakan rekomendasi alur terbaik yang nyaman. Seluruh rute dan jam
                berangkat bersifat fleksibel dan dapat dibicarakan bersama rombongan Anda.
              </p>

              <div className="destination-timeline">
                {tour.itinerary.map((step, index) => (
                  <div className="destination-timeline-row" key={index}>
                    <div className="destination-timeline-marker">
                      <span className="destination-timeline-dot" aria-hidden="true" />
                      {index < tour.itinerary.length - 1 && (
                        <span className="destination-timeline-line" aria-hidden="true" />
                      )}
                    </div>
                    <div className="destination-timeline-content">
                      <span className="destination-timeline-time">{step.time}</span>
                      <h3 className="destination-timeline-title">{step.title}</h3>
                      <p className="destination-timeline-desc">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="destination-card-panel" aria-labelledby="facility-heading">
              <span className="panel-kicker">Fasilitas &amp; Layanan</span>
              <h2 id="facility-heading" className="destination-panel-title">
                Transparansi fasilitas yang Anda dapatkan.
              </h2>

              <div className="destination-inclusions-grid">
                <div className="destination-inclusion-box is-included">
                  <div className="destination-inc-header">
                    <CheckCircle2 size={18} className="destination-inc-icon is-yes" aria-hidden="true" />
                    <strong>Sudah Termasuk:</strong>
                  </div>
                  <ul className="destination-inc-list">
                    {tour.included.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} className="destination-list-icon" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="destination-inclusion-box is-excluded">
                  <div className="destination-inc-header">
                    <XCircle size={18} className="destination-inc-icon is-no" aria-hidden="true" />
                    <strong>Belum Termasuk:</strong>
                  </div>
                  <ul className="destination-inc-list">
                    {tour.excluded.map((item, idx) => (
                      <li key={idx}>
                        <XCircle size={15} className="destination-list-icon" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Tips & Preparation */}
            <section className="destination-card-panel" aria-labelledby="tips-heading">
              <div className="destination-panel-header">
                <div>
                  <span className="panel-kicker">Panduan Wisatawan</span>
                  <h2 id="tips-heading" className="destination-panel-title">
                    Tips &amp; perlengkapan yang disarankan.
                  </h2>
                </div>
                <AlertCircle size={20} className="destination-decor-icon" aria-hidden="true" />
              </div>

              <div className="destination-tips-list">
                {tour.tips.map((tip, idx) => (
                  <div className="destination-tip-item" key={idx}>
                    <span className="destination-tip-bullet" aria-hidden="true">
                      0{idx + 1}
                    </span>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hostel Synergy Banner */}
            <section className="destination-hostel-banner" aria-labelledby="hostel-synergy-title">
              <div className="destination-hostel-content">
                <div className="destination-hostel-tag">
                  <BedDouble size={16} aria-hidden="true" />
                  <span>Kombinasi Penginapan + Tour</span>
                </div>
                <h2 id="hostel-synergy-title" className="destination-hostel-title">
                  Singgah &amp; menginap nyaman di Omahku Hostel sebelum berangkat.
                </h2>
                <p className="destination-hostel-desc">
                  Nikmati kemudahan menginap di kamar dormitory AC bersih mulai Rp70.000/orang/malam.
                  Anda dapat menitipkan koper dan ransel secara aman saat tour berlangsung, mandi
                  segar sehabis perjalanan, dan menikmati kopi serta teh hangat gratis sepuasnya di hostel.
                </p>
                <div className="destination-hostel-actions">
                  <Link className="button button-light" href="/#penginapan">
                    Lihat Fasilitas Kamar Hostel
                  </Link>
                  <a
                    className="button button-outline-light"
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Booking Paket Menginap + Tour
                  </a>
                </div>
              </div>
            </section>

            {/* FAQ Accordion */}
            <section className="destination-card-panel" aria-labelledby="faq-heading">
              <div className="destination-panel-header">
                <div>
                  <span className="panel-kicker">Tanya Jawab</span>
                  <h2 id="faq-heading" className="destination-panel-title">
                    Pertanyaan yang sering diajukan.
                  </h2>
                </div>
                <HelpCircle size={20} className="destination-decor-icon" aria-hidden="true" />
              </div>

              <div className="destination-faq-list">
                {tour.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div className={`destination-faq-item${isOpen ? " is-open" : ""}`} key={index}>
                      <button
                        type="button"
                        className="destination-faq-btn"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        <span className="destination-faq-q">{faq.question}</span>
                        <ChevronDown
                          size={18}
                          className={`destination-faq-chevron${isOpen ? " is-rotated" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen && (
                        <div className="destination-faq-ans">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Booking & Pricing Card */}
          <aside className="destination-sidebar" aria-label="Pemesanan dan konsultasi tour">
            <div className="destination-booking-card">
              <span className="panel-kicker destination-booking-kicker">Estimasi Tarif Tour</span>
              <div className="destination-pricing-row">
                <span className="destination-price-value">{tour.price}</span>
                <span className="destination-price-unit">{tour.priceUnit}</span>
              </div>
              <p className="destination-pricing-note">{tour.priceNote}</p>

              <div className="destination-spec-list">
                <div className="destination-spec-item">
                  <Clock size={16} className="destination-spec-icon" aria-hidden="true" />
                  <div>
                    <span className="destination-spec-label">Durasi</span>
                    <strong>{tour.duration}</strong>
                  </div>
                </div>
                <div className="destination-spec-item">
                  <Navigation size={16} className="destination-spec-icon" aria-hidden="true" />
                  <div>
                    <span className="destination-spec-label">Titik Penjemputan</span>
                    <strong>{tour.departurePoint}</strong>
                  </div>
                </div>
                <div className="destination-spec-item">
                  <Car size={16} className="destination-spec-icon" aria-hidden="true" />
                  <div>
                    <span className="destination-spec-label">Layanan Armada</span>
                    <strong>{tour.vehicleType}</strong>
                  </div>
                </div>
                <div className="destination-spec-item">
                  <Compass size={16} className="destination-spec-icon" aria-hidden="true" />
                  <div>
                    <span className="destination-spec-label">Tipe Perjalanan</span>
                    <strong>100% Private (Rombongan Sendiri)</strong>
                  </div>
                </div>
              </div>

              <div className="destination-booking-cta-wrap">
                <a
                  className="button button-primary destination-main-cta"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>Chat WhatsApp Sekarang</span>
                </a>
                <a className="button button-outline destination-phone-cta" href={phoneLink}>
                  <Phone size={16} aria-hidden="true" />
                  <span>Telepon: {phoneDisplay}</span>
                </a>
              </div>

              <div className="destination-booking-perks">
                <div className="destination-perk-line">
                  <CheckCircle2 size={14} className="destination-perk-check" aria-hidden="true" />
                  <span>Bebas atur tanggal &amp; jam keberangkatan</span>
                </div>
                <div className="destination-perk-line">
                  <CheckCircle2 size={14} className="destination-perk-check" aria-hidden="true" />
                  <span>Respon ramah &amp; cepat setiap hari</span>
                </div>
                <div className="destination-perk-line">
                  <CheckCircle2 size={14} className="destination-perk-check" aria-hidden="true" />
                  <span>Konsultasi rute gratis tanpa biaya awal</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Tours Section: Explore Other Destinations */}
        <section className="destination-related-section" aria-labelledby="related-title">
          <div className="destination-related-header">
            <div>
              <span className="panel-kicker">Destinasi Lainnya</span>
              <h2 id="related-title" className="destination-related-title">
                Jelajahi pilihan private tour Omahku lainnya.
              </h2>
            </div>
            <Link className="destination-view-all" href="/#private-tour">
              <span>Lihat Semua Paket Tour</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="destination-related-grid">
            {relatedTours.map((item) => (
              <Link
                key={item.slug}
                className="destination-related-card"
                href={`/private-tour/${item.slug}`}
              >
                <div className="destination-related-media">
                  <Image
                    src={item.heroImage}
                    alt={item.heroImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="destination-related-img"
                  />
                  <span className="destination-related-badge">{item.badge}</span>
                </div>
                <div className="destination-related-info">
                  <div className="destination-related-meta">
                    <span className="destination-related-location">
                      <MapPin size={13} aria-hidden="true" />
                      {item.location.split(",")[0]}
                    </span>
                    <span className="destination-related-duration">
                      <Clock size={13} aria-hidden="true" />
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="destination-related-card-title">{item.title}</h3>
                  <p className="destination-related-summary">{item.summary}</p>
                  <div className="destination-related-footer">
                    <div className="destination-related-price">
                      <span className="destination-price-sub">Mulai dari</span>
                      <strong>{item.price}</strong>
                      <small>/ orang</small>
                    </div>
                    <span className="destination-related-btn">
                      <span>Detail Rute</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Floating Bottom Sticky Bar for Mobile Users */}
      <div className="destination-mobile-bottom-bar" aria-label="Pesan cepat via mobile">
        <div className="destination-mobile-bar-price">
          <span className="destination-mobile-bar-label">Mulai dari</span>
          <span className="destination-mobile-bar-num">
            {tour.price} <small>/ org</small>
          </span>
        </div>
        <a
          className="button button-primary destination-mobile-bar-btn"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={16} aria-hidden="true" />
          <span>Chat WhatsApp</span>
        </a>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="destination-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto besar: ${activePhoto.caption || activePhoto.alt}`}
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="destination-lightbox-bar">
            <span className="destination-lightbox-title">{activePhoto.caption}</span>
            <button
              className="destination-lightbox-close"
              type="button"
              aria-label="Tutup foto besar"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={18} aria-hidden="true" />
              <span>Tutup</span>
            </button>
          </div>

          <div
            className="destination-lightbox-stage"
            onClick={(event) => event.stopPropagation()}
          >
            {tour.gallery.length > 1 && (
              <button
                type="button"
                className="destination-lightbox-arrow is-prev"
                onClick={() =>
                  setSelectedPhoto(
                    (prev) => (prev - 1 + tour.gallery.length) % tour.gallery.length,
                  )
                }
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>
            )}

            <div className="destination-lightbox-image">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="min(92vw, 1200px)"
              />
            </div>

            {tour.gallery.length > 1 && (
              <button
                type="button"
                className="destination-lightbox-arrow is-next"
                onClick={() =>
                  setSelectedPhoto((prev) => (prev + 1) % tour.gallery.length)
                }
                aria-label="Foto selanjutnya"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="destination-lightbox-footer">
            <span>
              Foto {selectedPhoto + 1} dari {tour.gallery.length}
            </span>
          </div>
        </div>
      )}

      {/* Contact Section Consistent with Homepage */}
      <section className="contact-wrapper" id="kontak" aria-labelledby="contact-title">
        <div className="contact-card">
          <div className="contact-content-main">
            <div>
              <span className="panel-kicker contact-kicker">Diskusikan Rute Tour Anda</span>
              <h2 id="contact-title" className="contact-title">
                Siap menjelajah bersama Omahku Hostel?
              </h2>
              <p className="contact-intro">
                Punya pertanyaan seputar ketersediaan armada, rute khusus rombongan, atau ingin
                menggabungkan tour dengan menginap di Omahku Hostel? Hubungi kami langsung melalui WhatsApp.
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
                <strong>Titik Kumpul &amp; Hostel</strong>
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
                <p>WhatsApp &amp; Telepon: {phoneDisplay}</p>
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
                10 Menit ke Malioboro &amp; Keraton
              </span>
              <span className="contact-perk-pill">
                <Navigation size={13} aria-hidden="true" />
                Dekat Pusat Kuliner Jogja
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Consistent with Homepage */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand footer-brand-link" href="/" aria-label="Omahku Hostel, beranda">
              <span className="brand-mark" aria-hidden="true">
                O
              </span>
              <span>
                Omahku
                <small>Hostel &amp; Tour</small>
              </span>
            </Link>
            <p className="footer-tagline">
              Penginapan nyaman &amp; layanan private tour terpercaya dari Jogja ke destinasi pilihan.
            </p>
          </div>

          <div className="footer-nav">
            <div className="footer-nav-col">
              <span className="footer-nav-title">Layanan</span>
              <Link href="/#penginapan">Penginapan Hostel</Link>
              <Link href="/#private-tour">Private Tour Pilihan</Link>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                Rute Tour Kustom
              </a>
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
