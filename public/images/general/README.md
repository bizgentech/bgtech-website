# General Images & Assets

This folder contains miscellaneous images, patterns, graphics, and assets used throughout the website.

## Image Guidelines

### Logos & Branding
- **Recommended Size:** Various (vector preferred)
- **Format:** SVG, PNG (with transparency)
- **Content:** Company logo variations, partner logos, certification badges

**Currently in parent folder:**
- `Logo Bizgen.png` - Main company logo (consider moving here)

### Background Patterns/Textures
- **Recommended Size:** 1920x1080px or tileable patterns
- **Format:** PNG (with transparency) or SVG
- **Max File Size:** 200KB
- **Content:** Subtle patterns, gradients, geometric shapes for backgrounds

### Icons & Graphics
- **Recommended Size:** 512x512px or SVG
- **Format:** SVG (preferred) or PNG
- **Content:** Generic icons, UI elements, decorative graphics

### Illustrations
- **Recommended Size:** 1200x800px or vector
- **Format:** SVG, PNG, or WebP
- **Content:** Custom illustrations, infographics, diagrams

### Placeholder Images
- **Recommended Size:** Various
- **Format:** JPG or PNG
- **Content:** Temporary images for development, coming soon graphics

## Suggested Substructure

Consider organizing further as content grows:
```
general/
├── logos/
│   ├── bizgen-main.svg
│   ├── bizgen-white.svg
│   └── partners/
├── patterns/
│   ├── dots-pattern.svg
│   └── waves-pattern.svg
├── icons/
│   └── custom-icons.svg
└── illustrations/
    └── tech-illustration.svg
```

## Naming Convention

Use descriptive, categorized names:
- `logo-{variant}.{ext}` - Logo variations
- `pattern-{name}.svg` - Background patterns
- `icon-{name}.svg` - Custom icons
- `illustration-{description}.{ext}` - Illustrations

## Current Usage

Images from this folder may be used:
- Throughout the website as decorative elements
- Logo in header/footer (currently in parent directory)
- Background patterns in sections
- Generic UI elements

## Asset Management

### Best Practices:
- Use SVG for logos and icons whenever possible
- Optimize all images before upload
- Maintain organized subfolder structure as content grows
- Document usage of each asset
- Keep original source files (AI, Figma, Sketch) in a separate design folder

### Logo Usage:
**Main Logo:** `Logo Bizgen.png` (currently in `/public/images/`)
- Used in: Header, Footer
- Consider creating SVG version for better scaling
- Create variations: white logo, icon-only, horizontal layout
