import { useState } from 'react'

export default function Avatar({ src, alt, initials, color, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center font-semibold text-white ${className}`}
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  )
}
