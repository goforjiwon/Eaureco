import React from "react";
import productFallback from "@/assets/brand/eaureco-product-family.webp";
import productAvif from "@/assets/brand/eaureco-product-family-1200.avif";
import clinicalFallback from "@/assets/brand/eaureco-clinical-use.webp";
import clinical768 from "@/assets/brand/eaureco-clinical-use-768.avif";
import clinical1280 from "@/assets/brand/eaureco-clinical-use-1280.avif";
import sargassumFallback from "@/assets/brand/sargassum-underwater.webp";
import sargassum768 from "@/assets/brand/sargassum-underwater-768.avif";
import sargassum1280 from "@/assets/brand/sargassum-underwater-1280.avif";

const imageSets = {
  product: {
    avif: productAvif,
    fallback: productFallback,
    width: 1200,
    height: 800,
  },
  clinical: {
    avif: `${clinical768} 768w, ${clinical1280} 1280w`,
    fallback: clinicalFallback,
    width: 1280,
    height: 1280,
  },
  sargassum: {
    avif: `${sargassum768} 768w, ${sargassum1280} 1280w`,
    fallback: sargassumFallback,
    width: 1280,
    height: 853,
  },
};

export default function BrandImage({
  kind,
  alt,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}) {
  const image = imageSets[kind];

  return (
    <picture>
      <source type="image/avif" srcSet={image.avif} sizes={sizes} />
      <img
        src={image.fallback}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
        className={className}
      />
    </picture>
  );
}
