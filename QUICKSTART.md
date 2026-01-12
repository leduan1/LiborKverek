# 🚀 Quick Start Guide

## Okamžité spuštění lokální dev verze

```bash
# 1. Instalace dependencies (pokud ještě nejsou nainstalované)
npm install

# 2. Spuštění dev serveru
npm run dev

# 3. Otevřete prohlížeč na http://localhost:3000
```

## 📤 Push na GitHub

```bash
# Push dev branch na GitHub
git push -u origin dev

# Nebo pokud chcete pushnout main branch také
git checkout main
git merge dev
git push -u origin main
```

## 🌐 Vercel Deployment (Dev Preview)

1. **Jděte na [vercel.com](https://vercel.com)** a přihlaste se
2. **Klikněte na "Add New Project"**
3. **Vyberte GitHub** a autorizujte přístup
4. **Najděte repozitář `LiborKverek`** a klikněte "Import"
5. **Vercel automaticky detekuje Next.js** - klikněte "Deploy"
6. **Po dokončení buildu** získáte URL pro dev preview

### Automatické deploymenty

- Každý push do `dev` branch vytvoří novou preview URL
- Můžete sdílet tuto URL pro review
- Production deployment se spustí při push do `main` branch

## ✅ Co je hotové

- ✅ Next.js 14 s TypeScript
- ✅ Tailwind CSS design system
- ✅ Framer Motion animace
- ✅ Swiper carousely
- ✅ Hero sekce s countdown timerem
- ✅ Value propositions
- ✅ Statistiky s counter animacemi
- ✅ Testimonials carousel
- ✅ Features/Modules accordion
- ✅ Pricing tiers
- ✅ FAQ sekce
- ✅ Sticky CTA bar
- ✅ Responzivní design
- ✅ Performance optimalizace
- ✅ Lazy loading komponent
- ✅ Git setup s dev branch

## 🎨 Funkce webu

- **Pokročilé animace**: Scroll-triggered fade-ins, parallax efekty, hover animations
- **Carousely**: Testimonials s auto-play a smooth transitions
- **Konverzní optimalizace**: Multiple CTAs, sticky CTA bar, urgency elements
- **Responzivní**: Optimalizováno pro mobile, tablet, desktop
- **Performance**: Code splitting, lazy loading, image optimization

## 📝 Další kroky

1. Spusťte lokální dev server: `npm run dev`
2. Pushněte na GitHub: `git push -u origin dev`
3. Deploy na Vercel podle instrukcí výše
4. Sdílejte preview URL pro review

## 🐛 Troubleshooting

**Port 3000 je obsazený?**
```bash
# Použijte jiný port
npm run dev -- -p 3001
```

**Build errors?**
```bash
# Zkuste clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Git push errors?**
```bash
# Zkontrolujte remote
git remote -v

# Pokud není nastavený, přidejte:
git remote add origin https://github.com/leduan1/LiborKverek.git
```

