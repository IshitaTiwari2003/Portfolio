'use client'

import Image from 'next/image'
import { useState } from 'react'

interface AvatarProps {
  src?: string
  alt: string
  initials?: string
  className?: string
}

export function Avatar({ src, alt, initials = 'IT', className = '' }: AvatarProps) {
  const [imgError, setImgError] = useState(false)
  const showImage = src && !imgError

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          quality={100}
          unoptimized
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30">
          <span className="text-4xl font-mono font-bold text-emerald-600 dark:text-emerald-400">
            {initials}
          </span>
        </div>
      )}
    </div>
  )
}
