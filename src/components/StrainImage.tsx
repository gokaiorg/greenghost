"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

interface StrainImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
}

export default function StrainImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  loading = "lazy",
}: StrainImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => {
    if (!hasError) {
      setHasError(true);
      setImgSrc("/images/logo-green-ghost-degen-weed-shop.png");
    }
  }, [hasError]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width || 400}
      height={height || 400}
      className={className}
      priority={priority}
      onError={handleError}
      quality={100}
      sizes={width ? `${width}px` : "100vw"}
      unoptimized={true}
      loading={priority ? "eager" : loading}
    />
  );
}
