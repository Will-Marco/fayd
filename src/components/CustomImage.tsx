import Image from "next/image";
import React from "react";

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: "fixed" | "fill" | "intrinsic" | "responsive";
  className?: string;
  priority?: boolean;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  layout = "responsive",
  className,
  priority = false,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      className={className}
      loading={priority ? "eager" : "lazy"}
      priority={priority}
    />
  );
};

export default CustomImage;
