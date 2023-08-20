'use client'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function Giscus() {
  const { theme } = useTheme()
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'Latemarch/blog-nextjs')
    script.setAttribute('data-repo-id', 'R_kgDOJoO2LA')
    script.setAttribute('data-category', 'Comments')
    script.setAttribute('data-category-id', 'DIC_kwDOJoO2LM4CYukb')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'bottom')
    script.setAttribute('data-theme', theme!!)
    script.setAttribute('data-lang', 'ko')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [theme])
  return <div className="giscus "></div>
}
