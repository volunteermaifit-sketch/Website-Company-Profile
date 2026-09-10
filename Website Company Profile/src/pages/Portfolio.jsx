import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Filter, Tag, Calendar, ExternalLink, Search } from 'lucide-react'
import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Footer, SectionTitle, PortfolioCard, WhatsAppFloat, ScrollToTop } from '../components'
import { portfolio, portfolioCategories } from '../data/portfolio'
import { companyInfo } from '../data/company'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [viewMode, setViewMode] = useState('grid')

  const filteredPortfolio = useMemo(() => 
    activeCategory === 'All' 
      ? portfolio 
      : portfolio.filter(p => p.category === activeCategory),
    [activeCategory]
  )

  const featuredProjects = portfolio.filter(p => p.featured)
  const otherProjects = portfolio.filter(p => !p.featured)

  return (
    <>
      <Helmet>
        <title>Portfolio | {companyInfo.name}</title>
        <meta name="description" content="Portfolio project PT Digital Nusantara: E-commerce, Fintech, Enterprise, Healthcare, Logistics, Education. Lihat karya-karya kami yang telah membantu 200+ klien sukses." />
        <meta property="og:title" content={`Portfolio | ${companyInfo.name}`} />
        <meta property="og:description" content="Portfolio project Digital Nusantara - 350+ project berhasil diselesaikan." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${companyInfo.website}/portfolio`} />
      </Helmet>

      <Navbar />
      
      <main id="main-content">
        <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                Karya-Karya Kami
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text mb-6 font-display">
                Portfolio &{' '}
                <span className="text-accent">Case Studies</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted leading-relaxed">
                Memperlihatkan solusi digital yang kami bangun untuk klien dari berbagai industri. 
                Setiap project adalah bukti komitmen kami pada kualitas dan hasil bisnis nyata.
              </p>
            </motion.div>
          </div>
        </section>

        {featuredProjects.length > 0 && (
          <section className="section-padding pb-0 bg-white" aria-labelledby="featured-title">
            <div className="container-custom">
              <SectionTitle
                title="Project Unggulan"
                subtitle="Project-project flagship yang menunjukkan kedalaman keahlian kami."
                align="center"
              />
              
              <div className="mt-12 grid lg:grid-cols-2 gap-8">
                {featuredProjects.slice(0, 2).map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-base overflow-hidden group"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.images?.[0] || project.image}
                        alt={`${project.title} - ${project.client}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-secondary">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted mb-4">{project.shortDesc}</p>
                      <p className="text-sm text-muted mb-6">Client: <span className="font-medium text-text">{project.client}</span></p>
                      
                      <Link
                        to={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
                      >
                        Lihat Detail Project
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-padding pt-0" aria-labelledby="all-projects-title">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
              <SectionTitle
                title="Semua Project"
                subtitle={`${filteredPortfolio.length} project ditemukan${activeCategory !== 'All' ? ` di kategori ${activeCategory}` : ''}`}
                align="left"
                animate={false}
              />
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-1" role="group" aria-label="Filter kategori">
                  {portfolioCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeCategory === category
                          ? 'bg-accent text-white shadow-soft'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                      aria-pressed={activeCategory === category}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-1" role="group" aria-label="Mode tampilan">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-accent text-white' : 'text-slate-600 hover:text-slate-900'}`}
                    aria-pressed={viewMode === 'grid'}
                    aria-label="Tampilan grid"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-accent text-white' : 'text-slate-600 hover:text-slate-900'}`}
                    aria-pressed={viewMode === 'list'}
                    aria-label="Tampilan list"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  </button>
                </div>
              </div>
            </div>

            <div 
              id="all-projects" 
              role="list" 
              aria-label="Daftar project"
              className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8' : 'space-y-6'}
            >
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredPortfolio.map((project, index) => (
                  viewMode === 'grid' ? (
                    <PortfolioCard key={project.id} project={project} index={index} />
                  ) : (
                    <motion.article
                      key={project.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="card-base p-6 flex flex-col md:flex-row gap-6 group"
                    >
                      <div className="relative w-full md:w-64 h-40 md:h-auto min-h-[200px] flex-shrink-0 rounded-xl overflow-hidden">
                        <img
                          src={project.images?.[0] || project.image}
                          alt={`${project.title} - ${project.client}`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                              {project.category}
                            </span>
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-secondary">
                              {project.year}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted mb-3 line-clamp-2">{project.shortDesc}</p>
                          <p className="text-sm text-muted">Client: <span className="font-medium text-text">{project.client}</span></p>
                        </div>
                        <Link
                          to={`/portfolio/${project.slug}`}
                          className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors self-start"
                        >
                          Lihat Detail
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                      </div>
                    </motion.article>
                  )
                ))}
              </motion.div>
            </div>

            {filteredPortfolio.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" aria-hidden="true" />
                <p className="text-muted">Tidak ada project di kategori ini.</p>
              </motion.div>
            )}
          </div>
        </section>

        <section className="section-padding bg-primary relative overflow-hidden" aria-labelledby="cta-title">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 id="cta-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                Memiliki Ide Project Serupa?
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Mari diskusikan bagaimana kami bisa membantu mewujudkan visi digital Anda.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent-dark text-white px-8 py-4">
                  Diskusikan Project Anda
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  )
}

export default Portfolio