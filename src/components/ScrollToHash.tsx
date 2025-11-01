import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ScrollToHash: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // If we are on a nested path but hash-only links were used, keep them as-is
    // Handle scroll on route + hash change
    const { hash, pathname } = location

    // If no hash, scroll to top on route change
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetId = hash.replace('#', '')

    const tryScroll = () => {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return true
      }
      return false
    }

    // Attempt immediately, then a few retries in case content isn't mounted yet
    if (!tryScroll()) {
      const raf = requestAnimationFrame(() => tryScroll())
      const t1 = setTimeout(() => tryScroll(), 150)
      const t2 = setTimeout(() => tryScroll(), 350)
      const t3 = setTimeout(() => tryScroll(), 700)
      return () => {
        cancelAnimationFrame(raf)
        clearTimeout(t1)
        clearTimeout(t2)
        clearTimeout(t3)
      }
    }
  }, [location, navigate])

  return null
}

export default ScrollToHash
