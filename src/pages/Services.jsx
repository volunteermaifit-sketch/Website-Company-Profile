import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Footer, SectionTitle, ServiceCard, WhatsAppFloat, ScrollToTop } from '../components'
import { services, serviceCategories } from '../data/services'
import { companyInfo } from '../data/company'
import { getServiceIcon } from '../utils/icons'

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedService, setExpandedService] = useState(null)

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory)

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    setExpandedService(null)
  }

  const toggleExpand = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <>
      <Helmet>
        <title>Layanan | {companyInfo.name}</title>
        <meta name="description" content="Layanan digital end-to-end: Website Development, Mobile App, Custom Software, IT Consulting, Cloud Solutions, Digital Transformation. Solusi teknologi profesional untuk bisnis Anda." />
        <meta property="og:title" content={`Layanan | ${companyInfo.name}`} />
        <meta property="og:description" content="Layanan digital end-to-end untuk transformasi bisnis Anda." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${companyInfo.website}/services`} />
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
                Solusi Digital Kami
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text mb-6 font-display">
                Layanan untuk Mempercepat{' '}
                <span className="text-accent">Transformasi Digital</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted leading-relaxed">
                Dari ide hingga implementasi dan maintenance, kami menyediakan solusi teknologi 
                end-to-end yang disesuaikan dengan kebutuhan unik bisnis Anda.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white" aria-labelledby="categories-title">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Kategori layanan">
              {serviceCategories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  role="tab"
                  aria-selected={activeCategory === category}
                  aria-controls={`${category.toLowerCase()}-panel`}
                  className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-accent text-white shadow-soft'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding pb-0" aria-labelledby="services-list-title">
          <div className="container-custom">
            <div id="services-list" role="tabpanel" aria-label="Daftar layanan">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filteredServices.map((service, index) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    index={index}
                    variant="detailed"
                  />
                ))}
              </motion.div>

              {filteredServices.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted">Tidak ada layanan di kategori ini.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-padding pt-0" aria-labelledby="process-title">
          <div className="container-custom">
            <SectionTitle
              title="Proses Kami"
              subtitle="Metodologi terstruktur untuk memastikan keberhasilan setiap project."
              align="center"
            />
            
            <div className="mt-12 relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-secondary -translate-x-1/2" />
              
              <div className="space-y-8 lg:space-y-16">
                {[
                  { step: '01', title: 'Discovery & Research', desc: 'Memahami bisnis, user, dan kebutuhan teknis melalui wawancara, survey, dan analisis kompetitor.', icon: 'Search' },
                  { step: '02', title: 'Strategy & Planning', desc: 'Merancang roadmap teknis, arsitektur sistem, stack teknologi, timeline, dan estimasi biaya.', icon: 'Target' },
                  { step: '03', title: 'Design & Prototyping', desc: 'Membuat wireframe, UI design system, interactive prototype, dan usability testing.', icon: 'PenTool' },
                  { step: '04', title: 'Development & Testing', desc: 'Pengembangan agile dengan sprint 2 minggu, code review, CI/CD, dan testing komprehensif.', icon: 'Code' },
                  { step: '05', title: 'Deployment & Launch', desc: 'Deploy ke production, monitoring, performance optimization, dan knowledge transfer.', icon: 'Rocket' },
                  { step: '06', title: 'Support & Evolution', desc: 'Maintenance, update keamanan, feature enhancement, dan scaling seiring pertumbuhan bisnis.', icon: 'TrendingUp' },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative lg:w-1/2 ${index % 2 === 1 ? 'lg:ml-auto lg:pl-12' : 'lg:pr-12'} lg:relative`}
                  >
                    <div className="absolute hidden lg:block lg:top-2 lg:left-full lg:-left-6 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm z-10">
                      {item.step}
                    </div>
                    
                    <div className="card-base p-6 lg:p-8 relative">
                      <div className="absolute -top-3 lg:top-2 left-6 lg:left-auto lg:right-6 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm hidden lg:block">
                        {item.step}
                      </div>
                      
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <getServiceIcon(item.icon) className="w-6 h-6 text-accent" aria-hidden="true" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-text mb-2">{item.title}</h3>
                      <p className="text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                Siap Memulai Project Anda?
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Diskusikan kebutuhan Anda dengan tim ahli kami. Konsultasi awal gratis dan tanpa komitmen.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent-dark text-white px-8 py-4">
                  Mulai Konsultasi Gratis
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

export default Services