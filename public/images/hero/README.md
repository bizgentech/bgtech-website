# Hero Carousel Images

This folder contains background images for the homepage hero carousel.

## Image Guidelines

### Carousel Background Images
- **Recommended Size:** 1920x1080px (16:9 aspect ratio)
- **Format:** JPG (optimized for web)
- **Max File Size:** 500KB - 1MB (balance quality and performance)
- **Orientation:** Landscape, horizontally composed
- **Content Focus:** Subject should be on the RIGHT side of image (text overlays on left)

### Current Images

1. **it-management.jpg** (17MB - needs optimization)
   - IT professionals, servers, network operations
   - Used for: IT Management Services slide

2. **software-development.jpg** (15MB - needs optimization)
   - Developers coding, modern office, React/Next.js
   - Used for: Custom Software Development slide

3. **qa-testing.jpg** (12MB - needs optimization)
   - QA engineers, testing environments, automation
   - Used for: QA Services & Testing slide

4. **kiosks.jpg** (4MB)
   - Self-service kiosks, retail environments
   - Used for: Kiosk Solutions slide

## Optimization Tips

Current images are quite large. Consider:
- Compress JPG images to 70-85% quality
- Use tools like ImageOptim, TinyPNG, or Squoosh
- Target file size: 300-500KB per image
- Maintain 1920x1080px dimensions

## Composition Guidelines

For best results with the left-aligned glassmorphism hero design:
- **Left 40%:** Should be darker or allow overlay without obscuring important details
- **Right 60%:** Primary subject, bright, engaging content
- **Avoid:** Centered subjects, busy left side, critical text/faces on left

## Naming Convention

Use service name for clarity:
- `it-management.jpg`
- `software-development.jpg`
- `qa-testing.jpg`
- `kiosks.jpg`

## Current Usage

Used on:
- Home page hero carousel (HeroCarousel component)
- Automatic 5-second rotation
- With gradient overlay (dark left → transparent right)
