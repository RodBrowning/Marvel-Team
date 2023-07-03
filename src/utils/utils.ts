export const truncateString = (str: string, maxLength: number, truncationIndicator = '...') => {
  if (str.length <= maxLength) {
    return str
  }

  return str.slice(0, maxLength - truncationIndicator.length) + truncationIndicator
}

// ///////////////////////////////////////////////////
// ///////////////////////////////////////////////////
// ///////////////////////////////////////////////////

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null // Return null instead of void
}

// ///////////////////////////////////////////////////
// ///////////////////////////////////////////////////
// ///////////////////////////////////////////////////

export const getImgURL = (imgURL: string) => {
  const unavailableIMG = imgURL.match('image_not_available')

  if (unavailableIMG !== null) {
    imgURL = '/assets/images/unknown-char.jpg'
  }
  return imgURL
}

// ///////////////////////////////////////////////////
// ///////////////////////////////////////////////////
// ///////////////////////////////////////////////////

export const getReadableData = (dateString: string) => {
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  return formattedDate
}
