import { useState, useEffect } from 'react'

function getWindowSize() {
  const { innerWidth, innerHeight } = window

  return { innerWidth, innerHeight }
}

export default function useWindowSize() {

  const [sizes, setSizes] = useState(getWindowSize())

  useEffect(() => {
    function handleWindowResize() {
      setSizes(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
    
  }, [])

  return { width: sizes.innerWidth, height: sizes.innerHeight }
}
