import { useMemo } from 'react'
import './Rain.css'

interface RainProps {
  image: string
  count?: number
}

export default function Rain({ image, count = 24 }: RainProps) {
  const drops = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        size: 18 + Math.random() * 26,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 8,
        opacity: 0.25 + Math.random() * 0.45,
        rotation: Math.random() * 360,
      })),
    [count],
  )

  return (
    <div className="rain" aria-hidden="true">
      {drops.map((d) => (
        <img
          key={`${d.left}-${d.delay}`}
          className="rain-drop"
          src={image}
          alt=""
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            opacity: d.opacity,
            transform: `rotate(${d.rotation}deg)`,
          }}
        />
      ))}
    </div>
  )
}