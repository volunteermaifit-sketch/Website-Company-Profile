# PT Digital Nusantara - Company Profile Website

Website company profile modern, profesional, responsif, dan premium dibangun dengan React JS + Vite + Tailwind CSS.

## 🚀 Tech Stack

- **React 18** - Library UI modern
- **Vite** - Build tool super cepat
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Routing SPA
- **Framer Motion** - Animasi smooth dan profesional
- **Lucide React** - Icon set yang indah
- **React Helmet Async** - SEO meta tags management

## 📁 Struktur Project

```
src/
├── assets/                 # Static assets (images, fonts)
├── components/             # Reusable components
│   ├── Button.jsx         # Button component dengan variants
│   ├── SectionTitle.jsx   # Section title dengan animasi
│   ├── Navbar.jsx         # Navigation bar sticky + mobile menu
│   ├── Footer.jsx         # Footer lengkap
│   ├── ServiceCard.jsx    # Card layanan
│   ├── PortfolioCard.jsx  # Card portfolio
│   ├── TeamCard.jsx       # Card tim
│   ├── TestimonialCard.jsx # Card testimoni
│   ├── WhatsAppFloat.jsx  # WhatsApp floating button
│   ├── ScrollToTop.jsx    # Scroll to top button
│   ├── FormInput.jsx      # Form input dengan validasi
│   └── index.js           # Barrel exports
├── pages/                  # Page components
│   ├── Home.jsx           # Halaman beranda
│   ├── About.jsx          # Tentang kami
│   ├── Services.jsx       # Layanan
│   ├── Portfolio.jsx      # Portfolio dengan filter
│   ├── PortfolioDetail.jsx # Detail portfolio
│   ├── Team.jsx           # Tim kami
│   ├── Testimonials.jsx   # Testimoni carousel
│   └── Contact.jsx        # Kontak + form validasi
├── data/                   # Data terpisah untuk easy maintenance
│   ├── company.js         # Info perusahaan, nav, footer links
│   ├── services.js        # Data layanan
│   ├── portfolio.js       # Data portfolio
│   ├── team.js            # Data tim
│   └── testimonials.js    # Data testimoni
├── utils/
│   └── icons.js           # Icon mapping utilities
├── App.jsx                # Root component + routing
├── main.jsx               # Entry point
└── index.css              # Global styles + Tailwind
```

## 🎨 Design System

### Warna
```css
Primary:    #0F172A (Slate 900)
Secondary:  #1E3A8A (Blue 900)
Accent:     #F97316 (Orange 500)
Background: #F8FAFC (Slate 50)
Text:       #0F172A (Slate 900)
Muted:      #64748B (Slate 500)
```

### Typography
- **Display**: Plus Jakarta Sans (Headings)
- **Body**: Inter (Body text)

### Border Radius
- `rounded-xl` (0.75rem) - Default
- `rounded-2xl` (1rem) - Cards, buttons

### Shadows
- `shadow-subtle` - Default
- `shadow-soft` - Hover cards
- `shadow-elegant` - Elevated elements

## ⚡ Animasi (Framer Motion)

- Fade in / Slide up / Slide left/right
- Stagger animation pada grid cards
- Hover effects (scale, translate, shadow)
- Page transitions
- Navbar scroll transition
- Loading states

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1280px

Mobile-first approach digunakan di seluruh project.

## 🔧 Instalasi & Menjalankan

### Prasyarat
- Node.js 18+ 
- npm 9+ (atau yarn/pnpm)

### Langkah Instalasi

```bash
# 1. Clone/extract project
cd pt-digital-nusantara

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka browser di http://localhost:3000
```

### Build Production

```bash
# Build untuk production
npm run build

# Preview build production
npm run preview
```

## 🎯 Cara Customization

### 1. Ganti Logo
Edit file `src/components/Navbar.jsx` dan `src/components/Footer.jsx`:
```jsx
// Ganti SVG logo atau gunakan image
<img src="/logo.svg" alt="Logo" className="w-8 h-8" />
```

### 2. Ganti Warna Theme
Edit `tailwind.config.js` di bagian `theme.extend.colors`:
```js
colors: {
  primary: { DEFAULT: '#YOUR_PRIMARY', light: '#YOUR_PRIMARY_LIGHT' },
  secondary: { DEFAULT: '#YOUR_SECONDARY', light: '#YOUR_SECONDARY_LIGHT' },
  accent: { DEFAULT: '#YOUR_ACCENT', light: '#YOUR_ACCENT_LIGHT', dark: '#YOUR_ACCENT_DARK' },
  // ...
}
```

### 3. Ganti Konten Perusahaan
Edit file di `src/data/`:
- `company.js` - Info umum, visi, misi, nilai, history, stats, advantages
- `services.js` - Daftar layanan dengan detail
- `portfolio.js` - Project portfolio dengan detail lengkap
- `team.js` - Data anggota tim
- `testimonials.js` - Testimoni klien

### 4. Ganti Gambar
- **Hero/Background**: Edit URL di `Home.jsx` (Unsplash placeholder)
- **Portfolio**: Edit `images` array di `portfolio.js`
- **Team**: Edit `image` property di `team.js`
- **Testimonials**: Edit `image` property di `testimonials.js`

Gunakan URL gambar atau tempatkan file di `public/images/` dan referensikan dengan `/images/nama-file.jpg`.

### 5. Ganti Nomor WhatsApp
Edit `src/data/company.js`:
```js
whatsapp: '6281234567890', // Format: 62 + nomor tanpa 0
```

### 6. Ganti Google Maps
Edit `src/data/company.js`:
```js
mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=...', // Embed URL dari Google Maps
```

### 7. SEO Meta Tags
Setiap halaman menggunakan `<Helmet>` dari `react-helmet-async`. Edit di masing-masing page component:
```jsx
<Helmet>
  <title>Custom Title | Company Name</title>
  <meta name="description" content="Custom description" />
  <meta property="og:title" content="Custom OG Title" />
  // ...
</Helmet>
```

## 🚀 Deploy ke Hosting

### Vercel (Recommended)
```bash
# 1. Push ke GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main

# 2. Import di Vercel
# - Connect GitHub repo
# - Framework: Vite
# - Build Command: npm run build
# - Output Directory: dist
# - Deploy!
```

### Netlify
```bash
# 1. Build lokal
npm run build

# 2. Drag folder `dist` ke Netlify Drop
# Atau connect GitHub seperti Vercel
```

### Static Hosting (Nginx/Apache)
```bash
# 1. Build
npm run build

# 2. Upload folder `dist` ke server
# 3. Konfigurasi web server untuk SPA (redirect ke index.html)
```

#### Nginx Config untuk SPA
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Environment Variables (Optional)
Buat file `.env` untuk production:
```env
VITE_API_URL=https://api.yourdomain.com
VITE_WHATSAPP_NUMBER=6281234567890
VITE_GA_ID=G-XXXXXXXXXX
```

## 📋 Checklist Pre-Launch

- [ ] Semua konten di `src/data/` sudah diganti dengan data asli
- [ ] Logo dan favicon sudah diganti
- [ ] Warna brand sudah disesuaikan di `tailwind.config.js`
- [ ] Google Maps embed URL sudah benar
- [ ] Nomor WhatsApp sudah benar
- [ ] Social media links sudah benar
- [ ] Meta SEO (title, description, OG tags) sudah benar di setiap page
- [ ] Form kontak terhubung ke backend/email service
- [ ] Test di mobile, tablet, desktop
- [ ] Test all links dan navigation
- [ ] Performance audit (Lighthouse > 90)
- [ ] Accessibility check (WCAG 2.1 AA)
- [ ] Sitemap.xml dan robots.txt sudah benar
- [   ] SSL certificate aktif
- [   ] Custom domain terkonfigurasi

## 📄 License

MIT License - Feel free to use for your own company profile.

## 🤝 Support

Untuk pertanyaan atau bantuan customization, hubungi:
- Email: hello@digitalnusantara.id
- WhatsApp: +62 812-3456-7890

---

**Dibangun dengan ❤️ menggunakan React + Vite + Tailwind CSS**