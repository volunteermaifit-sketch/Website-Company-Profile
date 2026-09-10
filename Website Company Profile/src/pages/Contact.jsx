import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react'

import { Navbar, Footer, SectionTitle, FormInput, WhatsAppFloat, ScrollToTop, Button } from '../components'
import { companyInfo } from '../data/company'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    subject: '',
    message: '',
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [touched, setTouched] = useState({})

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Nama wajib diisi'
        if (value.trim().length < 2) return 'Nama minimal 2 karakter'
        return ''
      case 'email':
        if (!value.trim()) return 'Email wajib diisi'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Format email tidak valid'
        return ''
      case 'whatsapp':
        if (!value.trim()) return 'Nomor WhatsApp wajib diisi'
        if (!/^(\+62|62|0)8[1-9][0-9]{7,9}$/.test(value.replace(/\s+/g, ''))) {
          return 'Format nomor WhatsApp Indonesia tidak valid (contoh: 08123456789)'
        }
        return ''
      case 'subject':
        if (!value.trim()) return 'Subjek wajib diisi'
        if (value.trim().length < 5) return 'Subjek minimal 5 karakter'
        return ''
      case 'message':
        if (!value.trim()) return 'Pesan wajib diisi'
        if (value.trim().length < 20) return 'Pesan minimal 20 karakter'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = {}
    let hasErrors = false
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) {
        newErrors[key] = error
        hasErrors = true
      }
    })
    
    setErrors(newErrors)
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}))
    
    if (hasErrors) return
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', whatsapp: '', subject: '', message: '' })
    setTouched({})
    
    // Reset success status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000)
  }

  const whatsappMessage = encodeURIComponent(
    `Halo, saya ${formData.name || 'tertarik'} dengan layanan perusahaan Anda. ${formData.message || 'Saya ingin mendapatkan informasi lebih lanjut.'}`
  )
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${whatsappMessage}`

  const contactItems = [
    {
      icon: MapPin,
      label: 'Alamat Kantor',
      content: companyInfo.address,
      href: null,
    },
    {
      icon: Phone,
      label: 'Telepon',
      content: companyInfo.phone,
      href: `tel:${companyInfo.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      content: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      content: 'Chat Langsung',
      href: whatsappUrl,
    },
    {
      icon: Clock,
      label: 'Jam Operasional',
      content: companyInfo.workingHours,
      href: null,
    },
  ]

  const subjects = [
    'Konsultasi Project Baru',
    'Website Development',
    'Mobile App Development',
    'Custom Software',
    'IT Consulting',
    'Cloud Solutions',
    'Digital Transformation',
    'Lainnya',
  ]

  return (
    <>
      <Helmet>
        <title>Kontak Kami | {companyInfo.name}</title>
        <meta name="description" content="Hubungi PT Digital Nusantara untuk konsultasi project digital Anda. Alamat, telepon, email, WhatsApp, dan form kontak tersedia. Tim kami siap membantu Anda." />
        <meta property="og:title" content={`Kontak Kami | ${companyInfo.name}`} />
        <meta property="og:description" content="Hubungi Digital Nusantara untuk konsultasi project digital Anda." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${companyInfo.website}/contact`} />
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
                Hubungi Kami
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text mb-6 font-display">
                Mari Mulai{' '}
                <span className="text-accent">K percakapan</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted leading-relaxed">
                Siap mengubah bisnis Anda? Tim kami siap mendengarkan kebutuhan Anda dan 
                memberikan solusi terbaik. Konsultasi awal gratis dan tanpa komitmen.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white" aria-labelledby="contact-info-title">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle title="Informasi Kontak" subtitleFirst align="left" />
                <div className="mt-8 space-y-6">
                  {contactItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-muted mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text font-medium hover:text-accent transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-text font-medium">{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden border border-slate-200">
                  <iframe
                    src={companyInfo.mapsEmbedUrl}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi PT Digital Nusantara di Google Maps"
                    aria-label="Peta lokasi kantor PT Digital Nusantara"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding pt-0" aria-labelledby="form-title">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle
                  title="Kirim Pesan ke Kami"
                  subtitle="Isi form di bawah ini dan tim kami akan menghubungi Anda dalam 1x24 jam."
                  align="center"
                />
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="mb-8 p-6 rounded-2xl bg-green-50 border border-green-200"
                    role="alert"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-800">Pesan Berhasil Dikirim!</p>
                        <p className="text-sm text-green-700">Terima kasih telah menghubungi kami. Tim kami akan merespons dalam 1x24 jam.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="card-base p-6 lg:p-8 space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label="Nama Lengkap"
                      name="name"
                      type="text"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.name ? errors.name : undefined}
                      required
                    />
                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="email@perusahaan.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email ? errors.email : undefined}
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label="Nomor WhatsApp"
                      name="whatsapp"
                      type="tel"
                      placeholder="08123456789"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.whatsapp ? errors.whatsapp : undefined}
                      required
                    />
                    <FormInput
                      label="Subjek"
                      name="subject"
                      type="text"
                      placeholder="Pilih subjek"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.subject ? errors.subject : undefined}
                      required
                    >
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="input-base appearance-none bg-white cursor-pointer"
                        aria-invalid={touched.subject && errors.subject ? 'true' : 'false'}
                      >
                        <option value="">Pilih subjek</option>
                        {subjects.map((subj) => (
                          <option key={subj} value={subj}>{subj}</option>
                        ))}
                      </select>
                    </FormInput>
                  </div>
                  
                  <FormInput
                    label="Pesan"
                    name="message"
                    type="textarea"
                    placeholder="Jelaskan kebutuhan project Anda, timeline yang diinginkan, budget range, atau pertanyaan lain..."
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.message ? errors.message : undefined}
                    required
                    rows={5}
                  />
                  
                  <Button
                    type="submit"
                    fullWidth
                    loading={isSubmitting}
                    size="lg"
                    className="bg-accent hover:bg-accent-dark"
                  >
                    <Send className="w-5 h-5" aria-hidden="true" />
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </Button>
                  
                  <p className="text-center text-sm text-muted">
                    Dengan mengirim form ini, Anda menyetujui 
                    <a href="/privacy-policy" className="text-accent hover:underline">Kebijakan Privasi</a> 
                    dan <a href="/terms-conditions" className="text-accent hover:underline">Syarat & Ketentuan</a> kami.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50" aria-labelledby="faq-title">
          <div className="container-custom">
            <SectionTitle
              title="Pertanyaan Umum"
              subtitle="Jawaban cepat untuk pertanyaan yang sering diajukan klien kami."
              align="center"
            />
            
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: 'Berapa lama waktu respon setelah saya mengirim form kontak?',
                  a: 'Tim kami biasanya merespons dalam 1-2 jam kerja. Untuk jam di luar operasional, kami akan merespons pada hari kerja berikutnya paling lambat pukul 10:00 WIB.'
                },
                {
                  q: 'Apakah konsultasi awal benar-benar gratis?',
                  a: 'Ya, konsultasi awal (discovery call) selama 30-60 menit sepenuhnya gratis dan tanpa komitmen. Kami akan memahami kebutuhan Anda dan memberikan rekomendasi awal.'
                },
                {
                  q: 'Bagaimana cara estimasi biaya project?',
                  a: 'Setelah discovery call, kami akan melakukan analisis kebutuhan detail dan mengirimkan proposal dengan breakdown biaya, timeline, dan deliverables yang transparan.'
                },
                {
                  q: 'Apakah kami bisa meeting tatap muka di kantor Anda?',
                  a: 'Tentu! Kami menyambut kunjungan ke kantor kami di Jakarta. Silakan hubungi kami terlebih dahulu untuk menjadwalkan pertemuan.'
                },
                {
                  q: 'Bagaimana komunikasi selama project berlangsung?',
                  a: 'Kami menggunakan Slack/Teams untuk komunikasi harian, weekly sync meeting, sprint review setiap 2 minggu, dan dashboard project real-time yang bisa diakses kapan saja.'
                },
              ].map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 'auto' }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group card-base"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-semibold text-text pr-8">{faq.q}</h3>
                    <ChevronDown className="w-5 h-5 text-muted transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-6 pb-6 text-muted leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                </motion.details>
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
              <h2 id="cta-title" className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
                Lebih Nyaman Chat Langsung?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Klik tombol di bawah untuk langsung chat dengan tim kami via WhatsApp. Biasanya merespons dalam 1 jam.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-6 h-6" aria-hidden="true" />
                Chat via WhatsApp
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

export default Contact