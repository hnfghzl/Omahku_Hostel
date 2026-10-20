import Image from "next/image";

const slides = [
  {
    src: "/hero-omahku-landscape.jpg",
    alt: "Pemandangan pegunungan dan awan dari kawasan Bromo",
  },
  {
    src: "/omahku-kamar.png",
    alt: "Kamar dengan tempat tidur susun di Omahku Hostel",
  },
  {
    src: "/tour-lava-merapi.png",
    alt: "Rombongan Lava Tour dengan jeep di depan Merapi",
  },
  {
    src: "/tour-bromo-sunrise.png",
    alt: "Wisatawan menikmati pemandangan matahari terbit di Bromo",
  },
];

export default function HeroSlideshow() {
  return (
    <div className="hero-slideshow" aria-label="Pilihan suasana Omahku">
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            className="hero-slide"
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            style={{ animationDelay: `${index * -5}s` }}
          />
        ))}
        <div className="hero-slide-scrim" aria-hidden="true" />
      </div>
    </div>
  );
}
