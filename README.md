# Wedding Website with Live Countdown

A stunning, modern Next.js wedding website featuring a real-time countdown timer, photo gallery, and beautiful UX design. Ready to deploy on Vercel.

## ✨ Features

- 🎉 **Hero Section** - Beautiful parallax hero with floating animations
- ⏰ **Live Countdown** - Real-time countdown to March 8, 2026 at 8:00 AM IST
- 📸 **Photo Gallery** - Interactive photo gallery with modal view
- 💑 **Our Story** - Section to share your love story
- 📍 **Venue Information** - Wedding venue details with map integration
- 📝 **RSVP Form** - Interactive RSVP form for guests
- 📱 **Fully Responsive** - Works beautifully on all devices
- ✨ **Smooth Animations** - Elegant transitions and hover effects
- 🎨 **Modern Design** - Glassmorphism, gradients, and beautiful typography

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📸 Adding Photos

1. Add your wedding photos to the `public/images/` folder
2. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
3. Supported formats: JPG, PNG, WebP
4. The gallery will automatically display them (or show beautiful gradient placeholders if images aren't found)

**Recommended photo sizes:**
- Gallery thumbnails: 800x800px (square)
- Hero background: 1920x1080px (landscape)
- Story image: 800x600px (landscape)

## 🎨 Customization

### Update Wedding Date

The countdown is set to **March 8, 2026 at 8:00 AM IST**. To change it, edit `app/page.tsx`:

```tsx
// March 8, 2026 8:00 AM IST (IST is UTC+5:30)
// Converting to UTC: 8:00 AM IST = 2:30 AM UTC
const weddingDate = '2026-03-08T02:30:00Z' // UTC time
```

### Customize Names

Edit `components/Hero.tsx`:

```tsx
<div className="hero-names">
  <span className="name">Your Name</span>
  <span className="ampersand">&</span>
  <span className="name">Partner Name</span>
</div>
```

### Update Venue Information

Edit `components/Venue.tsx` to update:
- Venue name
- Address
- Contact information
- Google Maps link

### Customize Story

Edit `components/OurStory.tsx` to add your personal love story.

### Change Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-color: #ffd700;
}
```

## ☁️ Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your site will be live!

Alternatively, you can use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page with all sections
│   └── globals.css     # Global styles and animations
├── components/
│   ├── Hero.tsx        # Hero section with parallax
│   ├── Countdown.tsx   # Live countdown timer
│   ├── PhotoGallery.tsx # Photo gallery with modal
│   ├── OurStory.tsx    # Love story section
│   ├── Venue.tsx       # Venue information
│   └── RSVP.tsx        # RSVP form
├── public/
│   └── images/         # Add your photos here
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies
└── tsconfig.json       # TypeScript configuration
```

## 🎯 Current Settings

- **Wedding Date**: March 8, 2026 at 8:00 AM IST
- **Countdown**: Automatically calculates and displays time remaining
- **Time Zone**: IST (Indian Standard Time) - UTC+5:30

## 💡 Tips

- Add high-quality photos for the best visual experience
- Test the RSVP form functionality (currently logs to console - connect to a backend for production)
- Customize the venue map link to point to your actual location
- Consider adding a backend API for RSVP submissions
- Optimize images before uploading for faster load times

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [React Hooks](https://react.dev/reference/react)

---

Made with 💕 for your special day!