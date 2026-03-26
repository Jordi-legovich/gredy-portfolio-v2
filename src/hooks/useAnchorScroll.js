import { useEffect } from 'react'

export function useAnchorScroll() {
  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return

      const id = anchor.getAttribute('href').slice(1)
      const target = document.getElementById(id)
      if (!target) return

      e.preventDefault()

      const navbar = document.querySelector('nav')
      const offset = navbar ? navbar.getBoundingClientRect().height : 0
      const top = target.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({ top, behavior: 'smooth' })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}
