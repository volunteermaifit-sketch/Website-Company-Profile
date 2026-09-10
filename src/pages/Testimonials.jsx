import { Helmet } from 'react-helmet-async'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

import { Navbar, Footer, SectionTitle, WhatsAppFloat, ScrollToTop } from '../components'
import { allTestimonials, featuredTestimonials } from '../data/testimonials'
import { companyInfo } from '../data/company'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })

  const itemsPerView = 1
  const maxIndex = allTestimonials.length - itemsPerView

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1)
  }, [maxIndex])

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1)
  }, [maxIndex])

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [autoPlay, goToNext])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goToPrev()
    if (e.key === 'ArrowRight') goToNext()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrev, goToNext])

  return (
    <>
      <Helmet>
        <title>Testimoni Klien | {companyInfo.name}</title>
        <meta name="description" content="Testimoni klien PT Digital Nusantara: CEO, CTO, Direktur dari berbagai industri berbagi pengalaman bekerja sama dengan kami. Rating 4.9/5 dari 200+ klien." />
        <meta property="og:title" content={`Testimoni Klien | ${companyInfo.name}`} />
        <meta property="og:description" content="Testimoni klien Digital Nusantara - Rating 4.9/5 dari 200+ klien." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${companyInfo.website}/testimonials`} />
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
                Kepercayaan Klien
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text mb-6 font-display">
                Apa Kata{' '}
                <span className="text-accent">Klien Kami</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted leading-relaxed">
                Kepercayaan dan kepuasan klien adalah bukti nyata komitmen kami pada kualitas 
                dan hasil bisnis yang terukur.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white" aria-labelledby="stats-title">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {[
                { value: '4.9/5', label: 'Rating Rata-rata' },
                { value: '200+', label: 'Klien Puas' },
                { value: '95%', label: 'Client Retention' },
                { value: '350+', label: 'Project Selesai' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-slate-50"
                >
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold text-text">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding pt-0" aria-labelledby="carousel-title">
          <div className="container-custom">
            <SectionTitle
              title="Testimoni Klien"
              subtitle="Suara autentik dari pemimpin bisnis yang telah bekerja sama dengan kami."
              align="center"
            />
            
            <div className="mt-12 relative max-w-5xl mx-auto">
              <div className="overflow-hidden" role="region" aria-label="Testimoni carousel">
                <motion.div
                  style={{ x: springX }}
                  className="flex transition-none"
                  role="list"
                >
                  {allTestimonials.map((testimonial, index) => (
                    <motion.article
                      key={testimonial.id}
                      style={{ width: '100%', flexShrink: 0 }}
                      className="px-4"
                      role="listitem"
                    >
                      <div className="card-base p-8 h-full relative">
                        <Quote className="absolute top-6 right-6 w-16 h-16 text-accent/10" aria-hidden="true" />
                        
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
                          
                          <blockquote className="text-text leading-relaxed mb-8">
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
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-10">
                <button
                  onClick={goToPrev}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-text hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 shadow-soft"
                  aria-label="Testimoni sebelumnya"
                >
                  <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                </button>
                
                <div className="flex items-center gap-2" role="tablist" aria-label="Navigasi testimoni">
                  {allTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index)
                        setAutoPlay(false)
                        setTimeout(() => setAutoPlay(true), 3000)
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-accent w-8'
                          : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                      role="tab"
                      aria-selected={index === currentIndex}
                      aria-label={`Testimoni ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={goToNext}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-text hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 shadow-soft"
                  aria-label="Testimoni selanjutnya"
                >
                  <ChevronRight className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50" aria-labelledby="featured-title">
          <div className="container-custom">
            <SectionTitle
              title="Testimoni Unggulan"
              subtitle="Beberapa testimoni representatif dari klien strategis kami."
              align="center"
            />
            
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredTestimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-base p-8"
                >
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
                </motion.article>
              ))}
            </div>
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
                Jadilah Klien Berikutnya Kami
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Bergabunglah dengan 200+ perusahaan yang telah mempercayakan transformasi digital mereka kepada kami.
              </p>
              <a href="/contact" className="btn-accent">
                Mulai Project Anda
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
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

export default Testimonials