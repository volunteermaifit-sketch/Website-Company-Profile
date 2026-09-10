import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube, Github,
  Mail, Phone, MapPin, Clock
} from 'lucide-react'
import { companyInfo, footerLinks } from '../data/company'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: companyInfo.socialMedia.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: companyInfo.socialMedia.twitter, label: 'Twitter' },
    { icon: Instagram, href: companyInfo.socialMedia.instagram, label: 'Instagram' },
    { icon: Youtube, href: companyInfo.socialMedia.youtube, label: 'YouTube' },
    { icon: Github, href: companyInfo.socialMedia.github, label: 'GitHub' },
  ]

  const contactItems = [
    { icon: MapPin, label: 'Alamat', content: companyInfo.address },
    { icon: Phone, label: 'Telepon', content: companyInfo.phone, href: `tel:${companyInfo.phone.replace(/\s+/g, '')}` },
    { icon: Mail, label: 'Email', content: companyInfo.email, href: `mailto:${companyInfo.email}` },
    { icon: Clock, label: 'Jam Operasional', content: companyInfo.workingHours },
  ]

  const renderLinkList = (links, delay = 0) => (
    <ul className="space-y-3" role="list">
      {links.map((link, index) => (
        <motion.li
          key={link.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: delay + index * 0.05 }}
        >
          <Link
            to={link.href}
            className="text-slate-600 hover:text-accent transition-colors duration-200 text-sm"
          >
            {link.label}
          </Link>
        </motion.li>
      ))}
    </ul>
  )

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-2 mb-6" aria-label="PT Digital Nusantara - Beranda">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white">Digital Nusantara</span>
            </Link>
            <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-xs">
              {companyInfo.description}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-accent/20 hover:text-accent transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-5">Perusahaan</h3>
            {renderLinkList(footerLinks.company)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="font-semibold text-lg mb-5">Layanan</h3>
            {renderLinkList(footerLinks.services)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-5">Sumber Daya</h3>
            {renderLinkList(footerLinks.resources)}
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3 className="font-semibold text-lg mb-5">Kontak Kami</h3>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-300 hover:text-accent transition-colors text-sm"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 lg:mt-16 pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} PT Digital Nusantara. Hak cipta dilindungi.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-slate-400 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer