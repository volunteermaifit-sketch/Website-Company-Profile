import { motion } from 'framer-motion'

const SectionTitle = ({
  title,
  subtitle,
  subtitleFirst = false,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  align = 'center',
  badge,
  animate = true,
}) => {
  const textAlign = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  }[align]

  const maxWidth = align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-2xl'

  return (
    <div className={`${textAlign} ${maxWidth} ${className}`}>
      {animate ? (
        <>
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-4"
            >
              {badge}
            </motion.span>
          )}
          {subtitleFirst && subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-lg sm:text-xl text-muted mb-4 ${subtitleClassName}`}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: subtitleFirst ? 0.2 : 0.1 }}
            className={`section-title font-display ${titleClassName}`}
          >
            {title}
          </motion.h2>
          {!subtitleFirst && subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`section-subtitle mt-4 ${subtitleClassName}`}
            >
              {subtitle}
            </motion.p>
          )}
        </>
      ) : (
        <>
          {badge && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-4">
              {badge}
            </span>
          )}
          {subtitleFirst && subtitle && (
            <p className={`text-lg sm:text-xl text-muted mb-4 ${subtitleClassName}`}>
              {subtitle}
            </p>
          )}
          <h2 className={`section-title font-display ${titleClassName}`}>
            {title}
          </h2>
          {!subtitleFirst && subtitle && (
            <p className={`section-subtitle mt-4 ${subtitleClassName}`}>
              {subtitle}
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default SectionTitle