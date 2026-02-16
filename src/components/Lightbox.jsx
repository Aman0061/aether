import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, onPrev, onNext])

  const img = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-white/80 hover:text-white p-2 transition-colors"
        aria-label="Close"
      >
        <X className="w-8 h-8" />
      </button>

      {currentIndex > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      )}

      <div
        className="max-w-[90vw] max-h-[90vh] flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img}
          alt=""
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>

      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {currentIndex + 1} / {images.length}
      </span>
    </div>
  )
}

export default Lightbox
