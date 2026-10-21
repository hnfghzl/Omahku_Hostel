import Image from "next/image";
import Link from "next/link";

type DestinationPageProps = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
};

const whatsappNumber = "6283867370668";

export default function DestinationPage({
  title,
  eyebrow,
  description,
  image,
  imageAlt,
}: DestinationPageProps) {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Halo, saya ingin membicarakan private tour ${title} dari Omahku Hostel.`,
  )}`;

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

      <section className="destination-hero" aria-labelledby="destination-title">
        <div className="destination-hero-image">
          <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 640px) 100vw, 52vw" />
        </div>
        <div className="destination-hero-scrim" aria-hidden="true" />
        <div className="destination-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="destination-title">{title}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className="destination-content" aria-labelledby="conversation-title">
        <div>
          <p className="eyebrow">Bicarakan rute</p>
          <h2 id="conversation-title">Mulai dari rencana perjalanan Anda.</h2>
        </div>
        <div className="destination-details">
          <p>
            Sampaikan waktu, jumlah peserta, dan tempat yang ingin Anda kunjungi.
            Omahku akan membantu membicarakan arah perjalanan yang sesuai dengan
            rencana Anda.
          </p>
          <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
            Bicarakan {title}
          </a>
        </div>
      </section>
    </main>
  );
}
