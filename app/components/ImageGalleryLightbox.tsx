"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageGalleryLightboxProps = {
  images: GalleryImage[];
};

export default function ImageGalleryLightbox({ images }: ImageGalleryLightboxProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div className="lodging-gallery" aria-label="Galeri Omahku Hostel">
        {images.map((image) => (
          <button
            className="lodging-gallery-item"
            key={image.src}
            type="button"
            aria-label={`Perbesar foto: ${image.alt}`}
            onClick={() => setSelectedImage(image)}
          >
            <Image src={image.src} alt={image.alt} width={640} height={480} />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="destination-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto besar: ${selectedImage.alt}`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="destination-lightbox-close"
            type="button"
            aria-label="Tutup foto besar"
            onClick={() => setSelectedImage(null)}
          >
            Tutup
          </button>
          <div className="destination-lightbox-image" onClick={(event) => event.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="min(92vw, 1200px)"
            />
          </div>
        </div>
      )}
    </>
  );
}
