"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type DestinationPageProps = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  gallery?: { src: string; alt: string }[];
};

const whatsappNumber = "6283867370668";

export default function DestinationPage({
  title,
  eyebrow,
  description,
  image,
  imageAlt,
  gallery = [{ src: image, alt: imageAlt }],
}: DestinationPageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Halo, saya ingin membicarakan private tour ${title} dari Omahku Hostel.`,
  )}`;
  const activePhoto = gallery[selectedPhoto] ?? gallery[0];

  return (
    <main className="destination-page">
      <nav className="destination-nav" aria-label="Navigasi halaman destinasi">
        <Link className="brand destination-brand" href="/" aria-label="Omahku Hostel, beranda">
          <span className="brand-mark" aria-hidden="true">
            O
          </span>
          <span>
            Omahku
            <small>Hostel</small>
          </span>
        </Link>
        <Link className="text-link" href="/#private-tour">
          Kembali ke private tour
        </Link>
      </nav>

      <div className="destination-shell">
        <nav className="destination-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Beranda</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#private-tour">Private tour</Link>
          <span aria-hidden="true">/</span>
          <span>{title}</span>
        </nav>

        <section className="destination-detail" aria-labelledby="destination-title">
          <div className={`destination-gallery${gallery.length === 1 ? " destination-gallery--single" : ""}`}>
            <div className="destination-main-image">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>
            {gallery.length > 1 && (
              <div className="destination-thumbnails" aria-label={`Foto ${title}`}>
                {gallery.map((photo, index) => (
                  <button
                    className={`destination-thumbnail${selectedPhoto === index ? " is-selected" : ""}`}
                    key={photo.src}
                    type="button"
                    aria-label={`Tampilkan foto ${index + 1} dari ${title}`}
                    aria-pressed={selectedPhoto === index}
                    onClick={() => setSelectedPhoto(index)}
                  >
                    <Image src={photo.src} alt="" width={180} height={120} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="destination-summary">
            <p className="panel-kicker">{eyebrow}</p>
            <h1 id="destination-title">{title}</h1>
            <p className="destination-departure">Waktu perjalanan dibicarakan bersama</p>
            <div className="destination-rule" aria-hidden="true" />
            <p className="destination-description">{description}</p>
            <p className="destination-description">
              Sampaikan waktu, jumlah peserta, dan tempat yang ingin Anda kunjungi.
              Kami akan membantu membahas rute private tour dari Omahku Hostel.
            </p>
            <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Bicarakan {title}
            </a>
          </div>
        </section>

        <Link className="destination-back-link" href="/#private-tour">
          Lihat semua destinasi private tour
        </Link>
      </div>
    </main>
  );
}
