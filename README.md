# Kolmogorov CV - Personal Resume Website

A modern, responsive CV website built with SvelteKit, Tailwind CSS, and TypeScript.

## 🚀 Quick Start

### Local Development

#### Development server (recommended):
```bash
./dev-local.sh
```

#### Manual development:
```bash
npm run dev
```

#### Custom port:
```bash
PORT=3090 npm run dev
```

### Local Production Testing

#### Build and serve locally:
```bash
./build-local.sh
```

#### Manual build and serve:
```bash
npm run build
serve -s build -l 3090
```

### Production Deployment

#### On production server (with PM2):
```bash
./sync
```

#### Manual production deployment:
```bash
npm run build
pm2 start ecosystem.config.cjs
```

### Build and Preview

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Preview on custom port
PORT=3090 npm run preview
```

## 🛠️ Development

### Port Configuration

The application supports custom ports through environment variables:

- **Development**: `PORT=3090 npm run dev`
- **Preview**: `PORT=3090 npm run preview`
- **Default**: Port 5173 (dev) / 4173 (preview)

### Available Scripts

- `npm run dev` - Start development server
- `npm run dev:3090` - Start on port 3090
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run start` - Start production server on port 3090
- `npm run start:prod` - Start production server with optimizations

### Production Deployment

#### Quick Start:
```bash
# Build and start production server
./start-prod.sh
```

#### Manual Production:
```bash
# Build the application
npm run build

# Start production server
npm run start
```

#### With PM2 (recommended for production):
```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start ecosystem.config.js

# Check status
pm2 status

# View logs
pm2 logs kolmogorov-cv
```

#### Production Deployment Scripts:

**Full Sync (recommended):**
```bash
# Complete update, build, and deploy
./sync
```

**Quick Deploy:**
```bash
# Fast deploy without git pull
./deploy.sh
```

**Manual Production:**
```bash
# Build and start manually
npm run build
pm2 start ecosystem.config.js
```

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/     # Svelte components
│   ├── config/         # App configuration
│   ├── data/           # Centralized data
│   ├── stores/         # Svelte stores
│   ├── types/          # TypeScript types
│   └── utils/          # Utility functions
├── routes/             # SvelteKit routes
└── app.html           # HTML template
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach
- **Multi-language** - English/Russian support
- **Specializations** - Backend Developer / DevOps Engineer
- **Modern Stack** - Svelte 5, Tailwind CSS, TypeScript
- **Analytics** - Yandex.Metrika integration
- **SEO Optimized** - Meta tags and structured data

## 📊 Analytics

Yandex.Metrika counter is integrated for visitor tracking and analytics.

## 🚀 Deployment

See `deploy.md` for deployment instructions.

## 📝 License

Private project - All rights reserved.
