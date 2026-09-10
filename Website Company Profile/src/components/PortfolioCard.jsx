import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Search, Tag } from 'lucide-react'

const PortfolioCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="card-base overflow-hidden group"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.images?.[0] || project.image}
          alt={`${project.title} - ${project.client}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex justify-between">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-primary backdrop-blur-sm">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-primary backdrop-blur-sm">
            {project.year}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
          <Link
            to={`/portfolio/${project.slug}`}
            className="w-full bg-white/90 backdrop-blur-sm text-primary font-semibold py-3 px-6 rounded-xl text-center hover:bg-white transition-colors block"
          >
            Lihat Detail
            <ExternalLink className="w-4 h-4 inline ml-2" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted mb-3">
          <Tag className="w-4 h-4" aria-hidden="true" />
          <span>{project.category}</span>
          <span className="text-slate-300">•</span>
          <span>{project.year}</span>
        </div>
        
        <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted text-sm mb-4 line-clamp-2">
          {project.shortDesc}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <p className="text-sm text-muted">{project.client}</p>
          <Link
            to={`/portfolio/${project.slug}`}
            className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors flex items-center gap-1"
          >
            Detail
            <Search className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default PortfolioCard