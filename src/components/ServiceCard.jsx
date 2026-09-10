import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { serviceIcons } from '../utils/icons'

const ServiceCard = ({ service, index, variant = 'default' }) => {
  const Icon = serviceIcons[service.icon] || serviceIcons.Code

  const variants = {
    default: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.1 },
      whileHover: { y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
    },
    minimal: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, delay: index * 0.05 },
      whileHover: { y: -4 },
    },
  }

  const currentVariant = variants[variant]

  return (
    <motion.article
      {...currentVariant}
      className={`card-base group ${variant === 'minimal' ? 'p-6' : 'p-8'} relative overflow-hidden`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
          <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" aria-hidden="true" />
        </div>
        
        <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-muted leading-relaxed mb-6">
          {service.shortDesc}
        </p>
        
        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
          aria-label={`Selengkapnya tentang ${service.title}`}
        >
          Selengkapnya
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </motion.button>
      </div>
    </motion.article>
  )
}

export default ServiceCard