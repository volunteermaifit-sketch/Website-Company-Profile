import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Button from './Button'
import { navigationLinks } from '../data/company'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const handleScrollTo = (href) => {
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Layanan', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Tim', href: '/team' },
    { label: 'Testimoni', href: '/testimonials' },
    { label: 'Kontak', href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-100'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navigasi utama"
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 text-primary font-display font-bold text-xl lg:text-2xl"
            aria-label="PT Digital Nusantara - Beranda"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center"
              aria-hidden="true"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </motion.div>
            <span className="hidden sm:block">Digital Nusantara</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href))
                    ? 'text-accent'
                    : 'text-slate-600 hover:text-primary'
                }`}
              >
                {item.label}
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Hubungi Kami
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm" className="whitespace-nowrap">
                Mulai Project
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
            >
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`block py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'bg-accent/10 text-accent'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <Link to="/contact">
                    <Button variant="secondary" fullWidth>
                      Hubungi Kami
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button fullWidth>
                      Mulai Project
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Navbar