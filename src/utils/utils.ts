export const truncateString = (str: string, maxLength: number, truncationIndicator = '...') => {
  if (str.length <= maxLength) {
    return str
  }

  return str.slice(0, maxLength - truncationIndicator.length) + truncationIndicator
}

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null // Return null instead of void
}
