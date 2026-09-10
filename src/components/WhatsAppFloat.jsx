import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { companyInfo } from '../data/company'

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < document.documentElement.scrollHeight - window.innerHeight - 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappMessage = encodeURIComponent(
    'Halo, saya tertarik dengan layanan perusahaan Anda. Saya ingin mendapatkan informasi lebih lanjut.'
  )
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${whatsappMessage}`

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50" role="region" aria-label="WhatsApp quick contact">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-elegant border border-slate-100 p-6"
            role="dialog"
            aria-label="WhatsApp contact options"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-text">Hubungi Kami via WhatsApp</p>
                  <p className="text-sm text-muted">Kami siap membantu Anda</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-muted hover:text-text hover:bg-slate-100 transition-colors"
                aria-label="Tutup opsi WhatsApp"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white py-3 px-4 rounded-xl font-semibold text-center hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Mulai Chat WhatsApp
            </a>
            
            <p className="text-xs text-muted text-center mt-3">
              Biasanya membalas dalam 1 jam
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
        className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center shadow-elegant hover:shadow-[0_0_0_4px_rgba(34,197,94,0.3)] transition-all duration-300"
        aria-label={isOpen ? 'Tutup WhatsApp' : 'Buka WhatsApp'}
        aria-expanded={isOpen}
      >
        <MessageCircle className="w-7 h-7" aria-hidden="true" />
      </motion.button>
    </div>
  )
}

export default WhatsAppFloat