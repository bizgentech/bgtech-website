# BizGen Technologies LLC Website

A modern, responsive Next.js website for BizGen Technologies LLC (BG Tech), showcasing custom software development, QA testing, self-service kiosks, and IT management services.

## Features

- **Fully Responsive** - Mobile-first design that works on all devices
- **Static Export Ready** - Configured for static export to deploy on any shared hosting
- **Modern Tech Stack** - Built with Next.js 14, React 18, and Tailwind CSS
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Smooth Animations** - Hover effects and transitions throughout
- **Professional Design** - Clean, fresh interface with custom color palette

## Pages

1. **Home** - Hero section, services overview, featured projects, industries, tech stack
2. **Services** - Detailed pages for all 4 services:
   - Custom Software Development
   - QA Services & Testing
   - Self-Service Kiosk Solutions
   - IT Management Services (MSP)
3. **Portfolio** - Case studies for CTI Pro Labs, CondoLink, and CarWash platforms
4. **About** - Company story, approach, and team information
5. **Contact** - Contact form with company information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Icons**: React Icons & Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

Build the project:

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

### Static Export

To generate a static export that can be hosted on any web server:

```bash
npm run build
```

The static files will be generated in the `out` directory. You can then upload the contents of the `out` directory to your web hosting provider.

## Project Structure

```
bgtech-website/
├── src/
│   ├── app/                  # App router pages
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── portfolio/       # Portfolio/case studies page
│   │   ├── services/        # Services page
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/          # Reusable components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── ServiceCard.tsx
│       ├── ProjectCard.tsx
│       ├── IndustryCard.tsx
│       ├── TechStack.tsx
│       └── CTASection.tsx
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Color Palette

- **Primary Navy**: #0F172A
- **Primary Blue**: #3B82F6
- **Secondary Cyan**: #06B6D4
- **Success Green**: #10B981
- **Warning Yellow**: #F59E0B
- **Neutral Dark**: #1E293B
- **Neutral Light**: #F8FAFC
- **Text Gray**: #64748B

## Customization

### Updating Company Information

1. **Contact Details**: Edit `src/components/Footer.tsx` and `src/app/contact/page.tsx`
2. **Company Name/Logo**: Update `src/components/Header.tsx`
3. **Meta Tags**: Edit metadata in each page's layout or page component

### Adding New Services

1. Create a new section in `src/app/services/page.tsx`
2. Add the service to the home page services grid in `src/app/page.tsx`
3. Update navigation if needed in `src/components/Header.tsx`

### Adding New Projects

1. Add project details to `src/app/portfolio/page.tsx`
2. Update featured projects on home page if desired

## Deployment

### Static Hosting (Shared Hosting, GitHub Pages, etc.)

1. Build the static export:
   ```bash
   npm run build
   ```

2. Upload the contents of the `out` directory to your web server

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Set build command to `npm run build`
4. Set publish directory to `out`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2024 BizGen Technologies LLC. All rights reserved.

## Contact

**BizGen Technologies LLC**
- Email: info@bgtech.com
- Phone: (555) 123-4567
- Location: Fort Lauderdale, Florida

---

Built with ❤️ by BizGen Technologies LLC
