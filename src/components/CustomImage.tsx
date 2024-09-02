"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="fill"
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "blur-2xl scale-110" : "blur-0 scale-100", className
        )}
        onLoad={() => setIsLoading(false)}
        priority={priority}
      />
  );
};

export default CustomImage;
