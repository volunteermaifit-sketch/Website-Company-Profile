import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail, Users, Award, Code, PenTool, Search, Zap, Globe, Database, Server, Terminal, Figma, Briefcase, GraduationCap, Heart } from 'lucide-react'

import { Navbar, Footer, SectionTitle, WhatsAppFloat, ScrollToTop } from '../components'
import { allTeam, leadershipTeam } from '../data/team'
import { companyInfo, valueIcons } from '../data/company'

const roleIcons = {
  'Chief Executive Officer': Award,
  'Chief Technology Officer': Code,
  'VP Engineering': Server,
  'Head of Design': PenTool,
  'Senior Full-stack Developer': Code,
  'Senior Mobile Developer': Globe,
  'DevOps Engineer': Terminal,
  'UI/UX Designer': Figma,
  'Backend Developer': Database,
  'QA Engineer': Search,
  'Project Manager': Briefcase,
  'Business Analyst': GraduationCap,
}

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Tim Kami | {companyInfo.name}</title>
        <meta name="description" content="Kenali tim profesional di balik PT Digital Nusantara: CEO, CTO, VP Engineering, Head of Design, Senior Developers, DevOps, Designer, QA, Project Manager, dan Business Analyst." />
        <meta property="og:title" content={`Tim Kami | ${companyInfo.name}`} />
        <meta property="og:description" content="Tim profesional Digital Nusantara - 50+ ahli teknologi bersertifikat." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${companyInfo.website}/team`} />
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
                Orang-orang di Balik Inovasi
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text mb-6 font-display">
                Tim Profesional{' '}
                <span className="text-accent">Digital Nusantara</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted leading-relaxed">
                Tim kami terdiri dari engineer, designer, dan strateg bersertifikat industri 
                dengan passion menciptakan solusi digital yang berdampak nyata bagi bisnis Anda.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white" aria-labelledby="leadership-title">
          <div className="container-custom">
            <SectionTitle
              title="Tim Kepemimpinan"
              subtitle="Para pemimpin yang mendorong visi, budaya, dan keunggulan teknis kami."
              align="center"
            />
            
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {leadershipTeam.map((member, index) => (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-base overflow-hidden"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex justify-center gap-2">
                      {[
                        { icon: Linkedin, href: member.linkedin, label: 'LinkedIn', show: !!member.linkedin },
                        { icon: Twitter, href: member.twitter, label: 'Twitter', show: !!member.twitter },
                        { icon: Github, href: member.github, label: 'GitHub', show: !!member.github },
                        { icon: Mail, href: `mailto:${member.email}`, label: 'Email', show: !!member.email },
                      ].filter(s => s.show).map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white hover:text-accent transition-all duration-300"
                        >
                          <social.icon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-text mb-1">{member.name}</h3>
                    <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted text-sm leading-relaxed mb-4">{member.shortBio}</p>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills?.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding pt-0" aria-labelledby="all-team-title">
          <div className="container-custom">
            <SectionTitle
              title="Seluruh Tim Kami"
              subtitle={`${allTeam.length} profesional terdedikasi yang siap membantu project Anda.`}
              align="center"
            />
            
            <div className="mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allTeam.filter(m => !m.featured).map((member, index) => (
                  <motion.article
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="card-base overflow-hidden"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex justify-center gap-1.5">
                        {[
                          { icon: Linkedin, href: member.linkedin, label: 'LinkedIn', show: !!member.linkedin },
                          { icon: Github, href: member.github, label: 'GitHub', show: !!member.github },
                          { icon: Mail, href: `mailto:${member.email}`, label: 'Email', show: !!member.email },
                        ].filter(s => s.show).map((social) => (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white hover:text-accent transition-all duration-300"
                          >
                            <social.icon className="w-4 h-4" aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-text mb-1">{member.name}</h3>
                      <p className="text-accent font-medium text-xs mb-2">{member.role}</p>
                      <div className="flex flex-wrap justify-center gap-1">
                        {member.skills?.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50" aria-labelledby="culture-title">
          <div className="container-custom">
            <SectionTitle
              title="Budaya & Nilai Kami"
              subtitle="Fondasi yang membentuk cara kami bekerja, berkolaborasi, dan berinovasi setiap hari."
              align="center"
            />
            
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {companyInfo.values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-base p-8"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <valueIcons[value.icon] className="w-7 h-7 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{value.title}</h3>
                  <p className="text-muted leading-relaxed">{value.description}</p>
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
          
          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 id="cta-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
                Ingin Bergabung dengan Tim Kami?
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Kami selalu mencari talenta terbaik yang berbagi passion untuk teknologi dan inovasi. 
                Lihat peluang karir yang tersedia.
              </p>
              <a href="/careers" className="btn-accent">
                Lihat Lowongan
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

export default Team