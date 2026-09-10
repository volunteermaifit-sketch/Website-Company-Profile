import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Award, Globe, TrendingUp, RefreshCw, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Navbar, Footer, SectionTitle, ServiceCard, PortfolioCard, TestimonialCard, WhatsAppFloat, ScrollToTop } from '../components'
import { services, serviceCategories } from '../data/services'
import { portfolio } from '../data/portfolio'
import { featuredTestimonials } from '../data/testimonials'
import { companyInfo, stats: companyStats, advantages, advantageIcons } from '../data/company'

const Home = () => {
  const heroVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  }

  const statItems = [
    { icon: Award, label: 'Tahun Pengalaman', value: '9+', suffix: '' },
    { icon: Users, label: 'Klien Puas', value: '200+', suffix: '' },
    { icon: Globe, label: 'Project Selesai', value: '350+', suffix: '' },
    { icon: TrendingUp, label: 'Partner Teknologi', value: '25+', suffix: '' },
  ]

  const introItems = [
    {
      icon: CheckCircle,
      title: 'Tim Ahli Bersertifikat',
      desc: 'Engineer, designer, dan consultant bersertifikat industri dengan pengalaman project enterprise nyata.',
    },
    {
      icon: RefreshCw,
      title: 'Proses Transparan & Agile',
      desc: 'Metodologi Agile/Scrum dengan sprint review berkala, demo mingguan, dan reporting transparan.',
    },
    {
      icon: Shield,
      title: 'Keamanan & Compliance',
      desc: 'Security by design, compliance OJK/Kemenkes/ISO 27001, penetration testing berkala.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>{companyInfo.name} | {companyInfo.tagline}</title>
        <meta name="description" content={companyInfo.description} />
        <meta property="og:title" content={`${companyInfo.name} | ${companyInfo.tagline}`} />
        <meta property="og:description" content={companyInfo.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${companyInfo.name} | ${companyInfo.tagline}`} />
        <meta name="twitter:description" content={companyInfo.description} />
        <link rel="canonical" href={companyInfo.website} />
      </Helmet>

      <Navbar />
      
      <main id="main-content">
        <section 
          className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden"
          aria-labelledby="hero-title"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" aria-hidden="true" />
          
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container-custom relative z-10 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                {...heroVariants}
                className="text-center lg:text-left"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  Baru: Layanan AI & Machine Learning
                </motion.span>
                
                <h1
                  id="hero-title"
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-text mb-6 font-display"
                >
                  Transforming Business Through{' '}
                  <span className="text-accent">Digital Innovation</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                  {companyInfo.description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary group"
                    >
                      Mulai Project
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </motion.button>
                  </Link>
                  <Link to="/services">
                    <Button variant="secondary" size="lg">
                      Lihat Layanan
                    </Button>
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm">
                  <div className="flex items-center gap-2 text-muted">
                    <CheckCircle className="w-5 h-5 text-accent" aria-hidden="true" />
                    <span>50+ Tim Profesional</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <CheckCircle className="w-5 h-5 text-accent" aria-hidden="true" />
                    <span>99% Client Retention</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <CheckCircle className="w-5 h-5 text-accent" aria-hidden="true" />
                    <span>24/7 Support Tersedia</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=800&fit=crop"
                    alt="Tim Digital Nusantara bekerja sama mengembangkan solusi digital"
                    className="relative w-full h-full object-cover rounded-3xl shadow-elegant"
                    loading="eager"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-elegant border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-text">350+</p>
                        <p className="text-sm text-muted">Project Berhasil</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-elegant border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-secondary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-text">4.9/5</p>
                        <p className="text-sm text-muted">Rating Klien</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            aria-hidden="true"
          >
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>

        <section 
          className="section-padding bg-white"
          aria-labelledby="stats-title"
        >
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {statItems.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center lg:text-left p-6 lg:p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <stat.icon className="w-7 h-7 text-accent" aria-hidden="true" />
                  </div>
                  <div className="flex items-baseline justify-center lg:justify-start gap-1">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text">{stat.value}</span>
                    <span className="text-text font-bold">{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section 
          className="section-padding"
          aria-labelledby="intro-title"
        >
          <div className="container-custom">
            <SectionTitle
              title="Mengapa Memilih Digital Nusantara?"
              subtitle="Kami tidak hanya membangun software, kami membangun partnership jangka panjang untuk keberhasilan bisnis Anda."
              align="center"
            />
            
            <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
              {introItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-base p-8 text-center hover:shadow-elegant transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section 
          className="section-padding bg-white"
          aria-labelledby="services-title"
        >
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <SectionTitle
                title="Layanan Unggulan Kami"
                subtitle="Solusi digital end-to-end untuk mempercepat transformasi bisnis Anda."
                align="left"
              />
              <Link
                to="/services"
                className="btn-secondary whitespace-nowrap mt-4 lg:mt-0"
              >
                Lihat Semua Layanan
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.slice(0, 6).map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section 
          className="section-padding"
          aria-labelledby="advantages-title"
        >
          <div className="container-custom">
            <SectionTitle
              title="Keunggulan Bekerja Sama dengan Kami"
              subtitle="Komitmen kami pada kualitas, transparansi, dan keberhasilan klien membedakan kami dari yang lain."
              align="center"
            />
            
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {advantages.map((adv, index) => (
                <motion.div
                  key={adv.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-base p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <advantageIcons[adv.icon] className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">{adv.title}</h3>
                  <p className="text-muted leading-relaxed">{adv.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section 
          className="section-padding bg-white"
          aria-labelledby="portfolio-title"
        >
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <SectionTitle
                title="Project Terbaru"
                subtitle="Beberapa karya kami yang telah membantu klien mencapai tujuan bisnis mereka."
                align="left"
              />
              <Link
                to="/portfolio"
                className="btn-secondary whitespace-nowrap mt-4 lg:mt-0"
              >
                Lihat Semua Portfolio
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {portfolio.slice(0, 3).map((project, index) => (
                <PortfolioCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section 
          className="section-padding"
          aria-labelledby="testimonials-title"
        >
          <div className="container-custom">
            <SectionTitle
              title="Apa Kata Klien Kami"
              subtitle="Kepercayaan klien adalah bukti nyata komitmen kami pada kualitas dan hasil."
              align="center"
            />
            
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredTestimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/testimonials" className="btn-secondary">
                Baca Semua Testimoni
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section 
          className="section-padding bg-primary relative overflow-hidden"
          aria-labelledby="cta-title"
        >
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
                Siap Memulai Transformasi Digital Anda?
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Diskusikan kebutuhan project Anda dengan tim ahli kami. Konsultasi gratis, tanpa komitmen.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent-dark text-white px-8 py-4">
                    Mulai Konsultasi Gratis
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg" className="border-slate-600 text-slate-200 hover:bg-slate-800 px-8 py-4">
                    Lihat Portfolio
                  </Button>
                </Link>
              </div>
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

export default Home