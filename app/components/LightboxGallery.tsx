"use client"

import { useEffect, useRef, useState } from "react"
import { SanityImage } from "../../lib/SanityImage2"

export function LightboxGallery({
  images,
  title,
  columnsClassName = "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4",
}: {
  images: any[]
  title: string
  columnsClassName?: string
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const close = () => setSelectedIndex(null)

  const prev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
  }

  const next = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % images.length)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [selectedIndex])

  return (
    <>
      <div className={columnsClassName}>
        {images.map((img, i) => (
          <button
            key={img?._key || i}
            type="button"
            onClick={() => setSelectedIndex(i)}
            className="overflow-hidden rounded-2xl border border-black/10 text-left transition hover:scale-[1.01] hover:opacity-95 dark:border-white/10"
          >
            <SanityImage
              source={img}
              alt={`${title} photo ${i + 1}`}
              width={800}
              height={800}
              className="aspect-square w-full cursor-zoom-in object-cover"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur transition hover:bg-white/20"
            aria-label="Fermer"
          >
            ✕
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white backdrop-blur transition hover:bg-white/20 sm:left-4 sm:px-4 sm:py-3"
                aria-label="Image précédente"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white backdrop-blur transition hover:bg-white/20 sm:right-4 sm:px-4 sm:py-3"
                aria-label="Image suivante"
              >
                ›
              </button>
            </>
          ) : null}

          <div
            className="max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <SanityImage
              source={images[selectedIndex]}
              alt={`${title} photo ${selectedIndex + 1}`}
              width={1800}
              height={1800}
              className="max-h-[90vh] w-auto rounded-2xl object-contain"
            />
          </div>

          <div className="absolute bottom-4 rounded-full bg-black/40 px-4 py-2 text-sm text-white backdrop-blur">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      ) : null}
    </>
  )
}