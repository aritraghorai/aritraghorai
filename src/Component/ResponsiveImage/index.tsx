import React from "react";

interface ResponsiveImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  srcsetAvif: string;
  srcsetWebp: string;
  placeholder: string;
  width?: number;
  height?: number;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  srcsetAvif,
  srcsetWebp,
  placeholder,
  width,
  height,
  alt = "",
  className = "",
  onError,
  ...imgProps
}) => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    console.error("Image failed to load:", e);
    onError?.(e);
  };

  return (
    <picture className="">
      <source srcSet={srcsetAvif} type="image/avif" className="w-full h-auto" />
      <source srcSet={srcsetWebp} type="image/webp" className="w-full h-auto" />
      <img
        {...imgProps}
        src={placeholder}
        width={width}
        height={height}
        alt={alt}
        loading="lazy"
        onError={handleImageError}
        className={`${className}`.trim()}
      />
    </picture>
  );
};

export default ResponsiveImage;
