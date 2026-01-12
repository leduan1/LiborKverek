# Deployment Guide

## 🚀 Vercel Deployment

### Krok 1: Připojení GitHub Repozitáře

1. Jděte na [Vercel](https://vercel.com) a přihlaste se
2. Klikněte na "Add New Project"
3. Vyberte GitHub účet a najděte repozitář `LiborKverek`
4. Klikněte na "Import"

### Krok 2: Konfigurace projektu

Vercel automaticky detekuje Next.js projekt. Nastavení:

- **Framework Preset**: Next.js
- **Root Directory**: `./` (nechte prázdné)
- **Build Command**: `npm run build` (automaticky)
- **Output Directory**: `.next` (automaticky)
- **Install Command**: `npm install` (automaticky)

### Krok 3: Environment Variables

Pokud máte environment variables, přidejte je v sekci "Environment Variables":
- Není potřeba žádných pro základní funkčnost

### Krok 4: Deploy

1. Klikněte na "Deploy"
2. Počkejte na dokončení buildu
3. Vercel vytvoří URL pro vaši aplikaci

## 🌿 Dev Branch Deployment

Pro automatické deployment z `dev` branch:

1. V projektu na Vercel jděte do "Settings" > "Git"
2. V sekci "Production Branch" můžete změnit na `dev` nebo nechat `main`
3. Vercel automaticky deployuje každý push do `dev` branch jako Preview Deployment

## 📝 Preview URLs

Každý push do `dev` branch vytvoří novou preview URL:
- Formát: `lbor-kverek-web-[hash].vercel.app`
- Můžete sdílet tuto URL pro review

## 🔄 Production Deployment

Pro production deployment:

1. Merge `dev` branch do `main` branch
2. Push do `main` branch
3. Vercel automaticky deployuje do production URL

## 🛠️ Lokální Testování

Před deploymentem můžete testovat lokálně:

```bash
# Instalace dependencies
npm install

# Spuštění dev serveru
npm run dev

# Build pro produkci (test)
npm run build

# Spuštění produkční verze lokálně
npm start
```

## 📊 Monitoring

Po deploymentu můžete:
- Sledovat performance v Vercel dashboardu
- Zobrazit analytics
- Kontrolovat build logs
- Nastavit custom domain

## 🔗 GitHub Actions (Optional)

Pro CI/CD můžete přidat GitHub Actions workflow (volitelné):

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [dev, main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
```

## ✅ Checklist před deploymentem

- [ ] Všechny komponenty fungují správně
- [ ] Responzivní design testován na mobile/tablet/desktop
- [ ] Animace fungují správně
- [ ] Obrázky jsou optimalizované
- [ ] Build prochází bez chyb (`npm run build`)
- [ ] Git repozitář je připojený
- [ ] Dev branch je vytvořený a obsahuje všechny změny

## 🐛 Troubleshooting

### Build fails
- Zkontrolujte build logs v Vercel
- Ověřte, že všechny dependencies jsou v `package.json`
- Zkontrolujte TypeScript errors: `npm run build`

### Images not loading
- Ověřte, že `next.config.js` obsahuje správné `remotePatterns`
- Zkontrolujte CORS nastavení na externích API

### Animations not working
- Ověřte, že Framer Motion je správně nainstalován
- Zkontrolujte, že komponenty používají `'use client'` direktivu

