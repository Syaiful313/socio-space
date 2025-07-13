# Socio-Space

Sebuah platform media sosial modern yang dibangun dengan Next.js, dirancang untuk menghubungkan orang-orang dalam ruang digital yang interaktif dan engaging.

## ✨ Fitur Utama

- **User Authentication** - Sistem login dan registrasi yang aman
- **Social Posts** - Berbagi pemikiran, foto, dan konten dengan pengguna lain
- **Real-time Interactions** - Like, comment, dan share secara real-time
- **User Profiles** - Profil pengguna yang dapat dikustomisasi
- **Feed Timeline** - Timeline yang menampilkan post dari pengguna yang diikuti
- **Responsive Design** - Optimized untuk desktop dan mobile
- **Dark/Light Mode** - Mode tema yang dapat disesuaikan

## 🚀 Teknologi yang Digunakan

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS / CSS Modules
- **Font**: Geist Font Family
- **Language**: TypeScript
- **Database**: (Sesuaikan dengan database yang digunakan)
- **Authentication**: (Sesuaikan dengan auth provider yang digunakan)

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

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Isi file `.env.local` dengan konfigurasi yang diperlukan.

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
│   └── ...
├── components/            # Reusable components
├── lib/                   # Utility functions
├── public/                # Static assets
├── types/                 # TypeScript type definitions
├── .env.example          # Environment variables template
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

## 🚀 Deployment

### Vercel (Recommended)

1. Push kode ke GitHub repository
2. Import project di [Vercel](https://vercel.com/new)
3. Configure environment variables
4. Deploy!

### Manual Deployment

1. Build aplikasi:
   ```bash
   npm run build
   ```

2. Start production server:
   ```bash
   npm start
   ```

## 📱 Screenshots

*Tambahkan screenshots aplikasi di sini*

## 🤝 Kontribusi

Kontribusi selalu diterima! Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add some amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👤 Author

**Syaiful**
- GitHub: [@Syaiful313](https://github.com/Syaiful313)

## 📞 Support

Jika Anda mengalami masalah atau memiliki pertanyaan, silakan buat [issue](https://github.com/Syaiful313/socio-space/issues) di repository ini.

---

⭐ Jangan lupa untuk memberikan star jika project ini bermanfaat untuk Anda!

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
