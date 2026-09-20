import Image from "next/image";

import { PlatePlaceholder } from "@/components/sections/approach/plate-placeholder";

type ApproachPlateImageProps = {
  stepIndex: number;
  imageSrc?: string;
  alt: string;
};

export function ApproachPlateImage({
  stepIndex,
  imageSrc,
  alt,
}: ApproachPlateImageProps) {
  if (imageSrc) {
    return (
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 64rem) 100vw, 40vw"
      />
    );
  }

  return (
    <div className="bg-muted flex h-full w-full items-center justify-center">
      <PlatePlaceholder stepIndex={stepIndex} />
    </div>
  );
}
