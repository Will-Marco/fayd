/* eslint-disable @next/next/no-img-element */
"use client";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

export default function GalleryImages() {
  const images = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((index) => (
          <a
            href={`/images/gallery/gallery-${index}.webp`}
            key={index}
          >
            <img
              src={`/images/gallery/gallery-${index}.webp`}
              alt={`Image ${index}`}
              className="w-full h-48 overflow-hidden rounded-2xl shadow-lg object-cover"
            />
          </a>
        ))}
      </div>
    </LightGallery>
  );
}
