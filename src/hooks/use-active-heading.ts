import { useState, useEffect } from "react"


export default function useActiveHeading (headingIds: string[]): string {
    const [ActiveHeading, setActiveHeading] = useState('')
  
    useEffect(() => {
      const callback = (
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveHeading(entry.target.id)
            }
          })
      })

      const options = {
        rootMargin: '0% 0% -95% 0%',
        threshold: 0
      }

      const observer = new IntersectionObserver(callback, options);
      headingIds.forEach(id => {
        observer.observe(document.getElementById(id))
      })
    })

    return ActiveHeading
}
