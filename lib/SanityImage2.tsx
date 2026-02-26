import Image from "next/image"
import { urlFor } from "./sanityImage"

type Props = {
  source: any
  alt: string
  width: number
  height: number
  className?: string
}

export function SanityImage({ source, alt, width, height, className }: Props) {
  return (
    <Image
      unoptimized
      src={urlFor(source).width(width).height(height).url()}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}