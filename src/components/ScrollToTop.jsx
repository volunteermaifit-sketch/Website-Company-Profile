import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Component visibility is handled by CSS opacity
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40"
      aria-label="Scroll ke atas"
      style={{
        opacity: window.scrollY > 300 ? 1 : 0,
        visibility: window.scrollY > 300 ? 'visible' : 'hidden',
        transform: window.scrollY > 300 ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <ChevronUp className="w-6 h-6" aria-hidden="true" />
    </motion.button>
  )
}

export default ScrollToTop