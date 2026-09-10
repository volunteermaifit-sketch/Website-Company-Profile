import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, Tag, Users, Clock, Check, ExternalLink, ChevronRight } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Navbar, Footer, WhatsAppFloat, ScrollToTop, Button } from '../components'
import { portfolio } from '../data/portfolio'
import { companyInfo } from '../data/company'

const PortfolioDetail = () => {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const found = portfolio.find(p => p.slug === slug)
    if (found) {
      setProject(found)
    }
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-muted">Project tidak ditemukan</p>
          <Link to="/portfolio" className="mt-4 inline-block btn-primary">
            Kembali ke Portfolio
            <ArrowLeft className="w-4 h-4 ml-2" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    )
  }

  const images = project.images?.length ? project.images : [project.image]

  return (
    <>
      <Helmet>
        <title>{project.title} | Portfolio | {companyInfo.name}</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} | ${companyInfo.name}`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={images[0]} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | ${companyInfo.name}`} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={images[0]} />
        <link rel="canonical" href={`${companyInfo.website}/portfolio/${slug}`} />
      </Helmet>

      <Navbar />
      
      <main id="main-content">
        <section className="pt-24 pb-12 bg-slate-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-accent transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Kembali ke Portfolio
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent">
                  {project.category}
                </span>
                <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary">
                  {project.year}
                </span>
                {project.featured && (
                  <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-amber-100 text-amber-700">
                    Unggulan
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4 font-display">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted mb-8">{project.shortDesc}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-8 border-b border-slate-200">
                <div>
                  <p className="text-sm text-muted mb-1">Client</p>
                  <p className="font-semibold text-text">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Kategori</p>
                  <p className="font-semibold text-text">{project.category}</p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Tahun</p>
                  <p className="font-semibold text-text">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Durasi</p>
                  <p className="font-semibold text-text">{project.duration}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-white" aria-labelledby="gallery-title">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={images[currentImageIndex]}
                  alt={`${project.title} - Gambar ${currentImageIndex + 1} dari ${images.length}`}
                  className="w-full h-full object-cover"
                  loading={currentImageIndex === 0 ? 'eager' : 'lazy'}
                />
                
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-text hover:bg-white shadow-soft transition-all"
                      aria-label="Gambar sebelumnya"
                    >
                      <ArrowLeft className="w-6 h-6" aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex(prev => (prev + 1) % images.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-text hover:bg-white shadow-soft transition-all"
                      aria-label="Gambar selanjutnya"
                    >
                      <ArrowRight className="w-6 h-6" aria-hidden="true" />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'bg-accent w-8'
                              : 'bg-white/60 hover:bg-white'
                          }`}
                          aria-label={`Gambar ${index + 1}`}
                          aria-current={index === currentImageIndex ? 'true' : 'false'}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-slate-50" aria-labelledby="details-title">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 space-y-10"
              >
                <div>
                  <h2 id="details-title" className="text-2xl font-bold text-text mb-6">Tentang Project</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-muted leading-relaxed mb-6">{project.description}</p>
                    
                    {project.challenge && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-text mb-3 flex items-center gap-2">
                          <Tag className="w-5 h-5 text-accent" aria-hidden="true" />
                          Tantangan
                        </h3>
                        <p className="text-muted leading-relaxed">{project.challenge}</p>
                      </div>
                    )}
                    
                    {project.solution && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-text mb-3 flex items-center gap-2">
                          <ArrowRight className="w-5 h-5 text-accent" aria-hidden="true" />
                          Solusi
                        </h3>
                        <p className="text-muted leading-relaxed">{project.solution}</p>
                      </div>
                    )}
                    
                    {project.result && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-text mb-3 flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" aria-hidden="true" />
                          Hasil
                        </h3>
                        <p className="text-muted leading-relaxed">{project.result}</p>
                      </div>
                    )}
                  </div>
                </div>

                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-accent" aria-hidden="true" />
                      Teknologi yang Digunakan
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white border border-slate-200 text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="card-base p-6 sticky top-24">
                  <h3 className="text-lg font-bold text-text mb-6">Informasi Project</h3>
                  
                  <dl className="space-y-5">
                    <div>
                      <dt className="text-sm text-muted mb-1">Client</dt>
                      <dd className="font-semibold text-text">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted mb-1">Kategori</dt>
                      <dd className="font-semibold text-text">{project.category}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted mb-1">Tahun</dt>
                      <dd className="font-semibold text-text">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted mb-1">Durasi</dt>
                      <dd className="font-semibold text-text">{project.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted mb-1">Ukuran Tim</dt>
                      <dd className="font-semibold text-text">{project.teamSize} orang</dd>
                    </div>
                  </dl>

                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <h4 className="font-semibold text-text mb-4">Hasil Kunci</h4>
                    <ul className="space-y-3 text-sm text-muted">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                        99.9% uptime production
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                        < 200ms response time
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                        Zero security incidents
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Button variant="secondary" fullWidth className="mb-3">
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      Kembali ke Portfolio
                    </Button>
                    <Link to="/contact">
                      <Button fullWidth className="bg-accent hover:bg-accent-dark">
                        Diskusikan Project Serupa
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" aria-labelledby="related-title">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle
                title="Project Lainnya"
                subtitle="Jelajahi project-project serupa dari portfolio kami."
                align="center"
              />
              
              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {portfolio
                  .filter(p => p.id !== project.id && p.category === project.category)
                  .slice(0, 3)
                  .map((relatedProject, index) => (
                    <PortfolioCard key={relatedProject.id} project={relatedProject} index={index} />
                  ))}
              </div>
            </motion.div>
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
                Siap Memulai Project Anda?
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Tim kami siap membantu mewujudkan visi digital Anda. Mari bicara tentang project Anda.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent-dark text-white px-8 py-4">
                  Mulai Konsultasi
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

export default PortfolioDetail