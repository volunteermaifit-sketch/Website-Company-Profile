import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialCard = ({ testimonial, index, isActive = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card-base p-8 relative h-full"
    >
      <div className="absolute top-6 right-6 text-accent/10">
        <Quote className="w-16 h-16" aria-hidden="true" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-1 mb-6" aria-label={`Rating ${testimonial.rating} dari 5 bintang`}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`}
              aria-hidden="true"
            />
          ))}
        </div>
        
        <blockquote className="text-text leading-relaxed mb-6">
          <p className="text-lg">"{testimonial.content}"</p>
        </blockquote>
        
        <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white"
          />
          <div>
            <p className="font-semibold text-text">{testimonial.name}</p>
            <p className="text-sm text-muted">{testimonial.role} • {testimonial.company}</p>
          </div>
        </div>
        
        {testimonial.project && (
          <p className="mt-4 text-sm text-accent font-medium">
            Project: {testimonial.project}
          </p>
        )}
      </div>
    </motion.article>
  )
}

export default TestimonialCard