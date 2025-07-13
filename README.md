# Socio Space

Website modern untuk co-working space yang menghubungkan profesional, entrepreneur, dan kreator dalam lingkungan kerja yang produktif dan inspiratif.

🌐 **Live Demo**: [https://socio-space.vercel.app/](https://socio-space.vercel.app/)

## ✨ Fitur Utama

- **Landing Page** - Halaman utama yang menarik dan informatif
- **Workspace Showcase** - Galeri ruang kerja yang tersedia
- **Service Booking** - Sistem pemesanan tempat kerja
- **Pricing Plans** - Berbagai paket membership:
  - Private Office ($59/month)
  - Virtual Office
  - Flexible Membership
  - Hot Desk
- **Responsive Design** - Optimized untuk semua perangkat
- **Modern UI/UX** - Interface yang clean dan user-friendly
- **Image Optimization** - Gambar yang dioptimalkan untuk performa terbaik

## 🚀 Teknologi yang Digunakan

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS / CSS Modules
- **Font**: Geist Font Family
- **Language**: TypeScript
- **Image Optimization**: Next.js Image Component
- **Deployment**: Vercel Platform

## 📦 Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/Syaiful313/socio-space.git
   cd socio-space
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   # atau
   bun install
   ```

3. **Setup environment variables** (jika diperlukan)
   ```bash
   cp .env.example .env.local
   ```

4. **Jalankan development server**
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   # atau
   bun dev
   ```

5. **Buka aplikasi**
   Akses [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🏗️ Struktur Project

```
socio-space/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── services/          # Services/booking page
│   └── ...
├── components/            # Reusable components
├── lib/                   # Utility functions
├── public/                # Static assets & images
│   ├── gambar1.avif      # Hero image
│   ├── working1.avif     # Private office image
│   ├── working2.avif     # Virtual office image
│   ├── working3.avif     # Flexible membership image
│   └── working4.avif     # Hot desk image
├── types/                 # TypeScript type definitions
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Scripts yang Tersedia

- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm run start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint
- `npm run type-check` - Menjalankan TypeScript type checking

### Manual Deployment

1. Build aplikasi:
   ```bash
   npm run build
   ```

2. Start production server:
   ```bash
   npm start
   ```

## 📱 Preview

Website ini menampilkan:
- Hero section dengan CTA "Book a Seat"
- Showcase berbagai tipe workspace
- Pricing yang jelas dan transparan
- Design yang modern dan profesional

## 🎯 Target Audience

- **Freelancer** - Profesional yang membutuhkan ruang kerja fleksibel
- **Startup** - Tim kecil yang mencari office space yang affordable
- **Remote Worker** - Pekerja jarak jauh yang membutuhkan workspace
- **Entrepreneur** - Pebisnis yang ingin networking dalam komunitas

## 👤 Author

**Syaiful**
- GitHub: [@Syaiful313](https://github.com/Syaiful313)

---

⭐ Jangan lupa untuk memberikan star jika project ini bermanfaat untuk Anda!

## 🔗 Links

- [Live Demo](https://socio-space.vercel.app/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Platform](https://vercel.com)
