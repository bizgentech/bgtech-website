# BizGen Technologies - Website Images

Central repository for all website images and visual assets.

## 📁 Directory Structure

```
public/images/
├── hero/                          # Hero carousel background images
├── services/                      # Service-specific images
│   ├── it-management/
│   ├── software-development/
│   ├── qa-testing/
│   └── kiosks/
├── projects/                      # Portfolio project images
│   ├── cti-pro-labs/
│   ├── condolink/
│   └── carwash/
├── industries/                    # Industry-specific images/icons
├── team/                          # Team member photos
├── general/                       # Miscellaneous assets (logos, patterns, icons)
└── Logo Bizgen.png               # Main company logo
```

## 📋 Quick Reference

### Image Size Guidelines

| Type | Recommended Size | Format | Max Size |
|------|-----------------|--------|----------|
| Hero/Banner | 1920x1080px | JPG/WebP | 500KB |
| Screenshots | 1440x900px | PNG | 500KB |
| Team Photos | 800x800px | JPG | 200KB |
| Icons | 512x512px | SVG/PNG | 100KB |
| Mobile Screenshots | 375x812px | PNG | 300KB |

### Format Recommendations

- **Photographs:** JPG (optimized at 70-85% quality) or WebP
- **Screenshots:** PNG (for UI clarity) or WebP
- **Logos/Icons:** SVG (preferred) or PNG with transparency
- **Illustrations:** SVG or high-quality PNG

## 🎨 Design Guidelines

### Composition for Hero Images
- **Left-aligned content:** Images should have darker/neutral areas on the left 40%
- **Subject placement:** Main subject should be on the right 60%
- **Avoid:** Centered subjects, busy left side, critical details on left

### Color Palette Integration
Images should complement the website's color scheme:
- **Primary Navy:** #0F172A
- **Primary Blue:** #3B82F6
- **Secondary Cyan:** #06B6D4
- **Success Green:** #10B981

### Glassmorphism Design
Images work with glass overlay effects:
- Sufficient contrast for overlaid glass elements
- Clear subjects that remain visible through blur/transparency
- Avoid overly detailed backgrounds that clash with glass effects

## 🔧 Optimization Tools

Recommended tools for image optimization:
- **TinyPNG** (https://tinypng.com/) - PNG/JPG compression
- **Squoosh** (https://squoosh.app/) - Advanced image optimization
- **ImageOptim** (Mac) - Batch optimization
- **SVGO** - SVG optimization
- **Next.js Image Component** - Automatic optimization (already implemented)

## 📝 Naming Conventions

Use clear, descriptive, lowercase names with hyphens:

```
✅ Good:
- hero-it-team.jpg
- cti-dashboard.png
- john-doe-headshot.jpg

❌ Avoid:
- IMG_1234.jpg
- Screenshot 2024.png
- photo.jpg
```

## 🚀 Current Image Status

### ✅ Currently in Use:
- Hero carousel images (4 images - need optimization)
- Company logo (Logo Bizgen.png)

### 📌 Coming Soon:
- Service page specific images
- Portfolio project screenshots
- Team member photos
- Industry-specific graphics
- Custom icons and illustrations

## 📦 Before Adding New Images

1. **Optimize:** Compress images to web-friendly sizes
2. **Name:** Use descriptive, consistent naming
3. **Format:** Choose appropriate format (JPG/PNG/SVG/WebP)
4. **Test:** Verify images display correctly on the website
5. **Document:** Update relevant README if adding new categories

## 🔗 Usage in Code

Images are referenced in Next.js using the Image component:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero/it-management.jpg"
  alt="IT management services"
  fill
  className="object-cover"
  priority
  sizes="100vw"
/>
```

## 📊 Performance Considerations

- **Current hero images are large** (4-17MB) - Recommend compression to 300-500KB
- Use Next.js Image component for automatic optimization
- Implement lazy loading for images below the fold
- Consider WebP format for modern browser support
- Use appropriate `sizes` attribute for responsive images

## 🔐 Copyright & Licensing

Ensure all images used have appropriate licensing:
- Stock photos: Verify license allows commercial use
- Custom photography: Obtain model releases if needed
- Screenshots: Own work or properly licensed
- Team photos: Written consent from individuals

## 📞 Questions?

For questions about image usage or requirements, refer to:
- Individual folder README files for specific guidelines
- Design system documentation
- Contact the development team

---

**Last Updated:** November 2024
**Maintained By:** BizGen Technologies Development Team
