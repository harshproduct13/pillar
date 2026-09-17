import { useEffect } from 'react'

const SITE = 'https://www.pillarapp.site'

// Sets the per-route <title>, meta description, robots and canonical.
// Interim measure until the site is server-rendered; search engines that
// execute JavaScript pick these up after render.
export default function Seo({ title, description, path = '/', noindex = false }) {
  useEffect(() => {
    document.title = title

    const setMeta = (name, content) => {
      let el = document.head.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    setMeta('description', description)
    setMeta('robots', noindex ? 'noindex, follow' : 'index, follow')

    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', SITE + path)
  }, [title, description, path, noindex])

  return null
}
