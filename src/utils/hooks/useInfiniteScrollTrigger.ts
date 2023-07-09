import { useEffect, useRef } from 'react'

export const useInfiniteScrollTrigger = (data: any, fetchNextPage: any) => {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const sentinel = entries[0]
        if (sentinel.isIntersecting) {
          fetchNextPage()
        }
      },
      { threshold: 1 }
    )
  )

  useEffect(() => {
    const currentObserver = observer.current
    if (sentinelRef.current) {
      currentObserver.observe(sentinelRef.current)
    }
    return () => currentObserver.disconnect()
  }, [data])

  return sentinelRef
}
