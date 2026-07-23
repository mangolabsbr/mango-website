"use client";

import Image from "next/image";
import { type ComponentProps, useState } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<typeof Image>;

/**
 * next/image that cross-fades in over its blurred preview. The blurDataURL
 * is rendered as a persistent underlay (next/image's own placeholder is
 * removed abruptly the moment the image loads, so it can't be faded over)
 * and the real image fades from transparent to opaque once loaded.
 *
 * `className` is applied to the wrapper — size the component through it.
 */
const BlurImage = ({ className, blurDataURL, onLoad, ...props }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {blurDataURL && (
        <div
          aria-hidden
          className="absolute inset-0 scale-110 bg-cover bg-center blur-lg"
          style={{ backgroundImage: `url(${blurDataURL})` }}
        />
      )}
      <Image
        {...props}
        placeholder="empty"
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        className={cn(
          "relative h-full w-full object-cover transition-opacity duration-300 ease-in-out",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
};

export default BlurImage;
