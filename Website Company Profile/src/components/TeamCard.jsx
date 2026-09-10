import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

const TeamCard = ({ member, index }) => {
  const socialLinks = [
    { icon: Linkedin, href: member.linkedin, label: 'LinkedIn', show: !!member.linkedin },
    { icon: Twitter, href: member.twitter, label: 'Twitter', show: !!member.twitter },
    { icon: Github, href: member.github, label: 'GitHub', show: !!member.github },
    { icon: Mail, href: `mailto:${member.email}`, label: 'Email', show: !!member.email },
  ].filter(s => s.show)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="card-base overflow-hidden text-center"
    >
      <div className="relative">
        <img
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          loading="lazy"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex justify-center gap-2">
          {socialLinks.map((social) => (
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

      <div className="p-6">
        <h3 className="text-xl font-bold text-text mb-1">{member.name}</h3>
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
  )
}

export default TeamCard