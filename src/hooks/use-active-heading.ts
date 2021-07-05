import { useState, useEffect } from "react"

export default function useActiveHeading(urls: string[]): string {
  const [ActiveHeading, setActiveHeading] = useState("")

  useEffect(() => {
    const callback: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveHeading(entry.target.id)
        }
      })
    }

    const options = {
      rootMargin: "0% 0% -95% 0%",
      threshold: 0,
    }

    const observer = new IntersectionObserver(callback, options)
    urls.forEach(url => {
      observer.observe(document.querySelector(url))
    })

    return observer.disconnect
  }, [])

  return ActiveHeading
}
