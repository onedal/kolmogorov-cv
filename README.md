# Kolmogorov CV - Personal Resume Website

A modern, responsive CV website built with SvelteKit, Tailwind CSS, and TypeScript.

## 🚀 Quick Start

### Development Server

#### Default port (5173):
```bash
npm run dev
```

#### Custom port (3090):
```bash
PORT=3090 npm run dev
```

#### Predefined port script:
```bash
npm run dev:3090
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
