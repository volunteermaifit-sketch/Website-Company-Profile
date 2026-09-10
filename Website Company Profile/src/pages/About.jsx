import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Lightbulb, Heart, Leaf, Users, Award, Clock, MapPin, Building, TrendingUp, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Navbar, Footer, SectionTitle, WhatsAppFloat, ScrollToTop } from '../components'
import { companyInfo, valueIcons } from '../data/company'
import { leadershipTeam, allTeam } from '../data/team'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Tentang Kami | {companyInfo.name}</title>
        <meta name="description" content="PT Digital Nusantara - Perusahaan teknologi terkemuka di Indonesia. Kenali visi, misi, nilai, dan perjalanan kami dalam mengubah bisnis melalui inovasi digital." />
        <meta property="og:title" content={`Tentang Kami | ${companyInfo.name}`} />
        <meta property="og:description" content="PT Digital Nusantara - Perusahaan teknologi terkemuka di Indonesia." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${companyInfo.website}/about`} />
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
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                Tentang Kami
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text mb-6 font-display">
                Membangun Masa Depan Digital{' '}
                <span className="text-accent">Bersama</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted leading-relaxed">
                {companyInfo.description}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white" aria-labelledby="story-title">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle title="Cerita Kami" subtitleFirst align="left" />
                <div className="mt-8 space-y-6 text-muted leading-relaxed">
                  <p>
                    {companyInfo.name} didirikan pada tahun 2015 dengan visi sederhana namun ambisius: 
                    memberdayakan bisnis Indonesia melalui teknologi digital yang berkualitas, terjangkau, 
                    dan berkelanjutan.
                  </p>
                  <p>
                    Dimulai dari tim kecil di ruang kerja kecil di Jakarta, kami telah berkembang menjadi 
                    tim 50+ profesional yang telah melayani 200+ klien dari berbagai industri: e-commerce, 
                    fintech, manufaktur, kesehatan, logistik, pendidikan, dan banyak lagi.
                  </p>
                  <p>
                    Setiap project yang kami kerjakan didorong oleh komitmen pada tiga hal: kualitas teknis 
                    yang tak terkompromi, transparansi proses yang membangun kepercayaan, dan fokus pada 
                    hasil bisnis yang terukur bagi klien kami.
                  </p>
                </div>
                <Link to="/contact" className="mt-8 inline-flex">
                  <Button variant="primary">
                    Mulai Project Bersama Kami
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Tim Digital Nusantara dalam rapat strategi"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-elegant border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Award className="w-7 h-7 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-text">9+</p>
                      <p className="text-sm text-muted">Tahun Pengalaman</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-elegant border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Users className="w-7 h-7 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-text">50+</p>
                      <p className="text-sm text-muted">Tim Profesional</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="vision-mission-title">
          <div className="container-custom">
            <SectionTitle 
              title="Visi, Misi, & Nilai Kami" 
              subtitle="Fondasi yang memandu setiap keputusan dan tindakan kami sehari-hari."
              align="center"
            />
            
            <div className="mt-12 grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card-base p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-text mb-4">Visi</h3>
                <p className="text-muted leading-relaxed">{companyInfo.vision}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card-base p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-text mb-4">Misi</h3>
                <ol className="space-y-3 text-muted">
                  {companyInfo.mission.map((mission, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <span>{mission}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card-base p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                  <Leaf className="w-7 h-7 text-green-500" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-text mb-4">Nilai Inti</h3>
                <div className="space-y-3">
                  {companyInfo.values.map((value) => (
                    <div key={value.title} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <valueIcons[value.icon] className="w-5 h-5 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-text text-sm">{value.title}</p>
                        <p className="text-muted text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white" aria-labelledby="journey-title">
          <div className="container-custom">
            <SectionTitle 
              title="Perjalanan Kami" 
              subtitle="Setiap langkah kami dibangun pada dedikasi, pembelajaran, dan keberhasilan bersama klien."
              align="center"
            />
            
            <div className="mt-12 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-secondary -translate-x-1/2 hidden lg:block" />
              
              <div className="space-y-8">
                {companyInfo.history.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative lg:w-1/2 ${index % 2 === 1 ? 'lg:ml-auto' : ''} lg:pr-12 lg:pl-0 ${index % 2 === 0 ? 'lg:pl-12 lg:pr-0' : ''}`}
                  >
                    <div className="absolute lg:left-full lg:-left-6 lg:top-2 w-12 h-12 rounded-full bg-accent border-4 border-white flex items-center justify-center z-10 hidden lg:flex">
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </div>
                    
                    <div className="card-base p-6 lg:p-8 relative">
                      <div className="absolute -top-3 left-6 lg:left-auto lg:right-6 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{item.year}</span>
                      </div>
                      
                      <span className="badge mb-4">{item.milestone}</span>
                      <h3 className="text-xl font-bold text-text mb-2">{item.title}</h3>
                      <p className="text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="team-title">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <SectionTitle
                title="Tim Kepemimpinan"
                subtitle="Para pemimpin yang mendorong visi dan budaya kami setiap hari."
                align="left"
              />
              <Link to="/team" className="btn-secondary whitespace-nowrap mt-4 lg:mt-0">
                Lihat Seluruh Tim
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-base overflow-hidden text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-text mb-1">{member.name}</h3>
                    <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted text-sm leading-relaxed mb-4">{member.shortBio}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors flex items-center justify-center gap-1"
                    >
                      LinkedIn
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary relative overflow-hidden" aria-labelledby="cta-title">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-base bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 lg:p-12 text-center"
            >
              <h2 id="cta-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                Bergabunglah dengan Perjalanan Kami
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Kami selalu mencari talenta terbaik yang berbagi passion untuk teknologi dan inovasi. 
                Lihat peluang karir atau hubungi kami untuk kolaborasi.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/careers">
                  <Button size="lg" className="bg-accent hover:bg-accent-dark text-white px-8 py-4">
                    Lihat Lowongan
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-slate-600 text-slate-200 hover:bg-slate-700 px-8 py-4">
                    Hubungi Kami
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

export default About