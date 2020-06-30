import { useState, useEffect } from 'react';

type ViewportSize = {
  width: number,
  height: number
}

export default function useViewportSize(): ViewportSize {
  const [viewportSize, setViewportSize] = useState(getViewportSize)

  useEffect(() => {
    window.addEventListener('resize', () => setViewportSize(getViewportSize))
  })

  return viewportSize
}

const getViewportSize = () => (
  {
    width: window.innerWidth,
    height: window.innerHeight
  }
)
