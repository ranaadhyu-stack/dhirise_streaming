# DHIVERSE

## Project Overview
- **Name**: DHIVERSE - The Academic Universe
- **Goal**: A cyberpunk-styled academic networking platform with cinematic user experience
- **Features**: 
  - Immersive space-themed background with galaxy imagery
  - Animated cyber grid overlay
  - Live statistics display (Operatives, Active Rooms, Sessions)
  - Guest access input form with codename entry
  - Cinematic "Dhi Introduction" page with typewriter effects
  - Responsive navigation menu
  - Floating particle effects
  - Framer Motion animations

## URLs
- **GitHub Repository**: https://github.com/ranaadhyu-stack/dhirise_streaming
- **Development**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai
- **Intro Page**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai/intro?user=Agent47
- **Local**: http://localhost:3000

## Tech Stack
- **Backend**: Hono (Lightweight web framework)
- **Frontend**: React 19 (via ESM CDN)
- **Animation**: Framer Motion 12 (via ESM CDN)
- **Styling**: Tailwind CSS (via CDN)
- **Runtime**: Cloudflare Workers/Pages
- **Build Tool**: Vite
- **Deployment**: Wrangler (Cloudflare CLI)

## Data Architecture
- **Data Models**: Currently static data (stats hardcoded)
- **Storage Services**: None yet (can integrate Cloudflare D1/KV/R2 for persistence)
- **Data Flow**: Client-side React state management with query parameters

## User Flow
1. **Landing Page** (`/`) - User enters codename → Clicks "ENTER"
2. **Redirects to** `/intro?user=CodeName`
3. **Intro Page** (`/intro`) - Cinematic introduction with 4 phases:
   - Phase 0 (0-2s): Blinking cursor
   - Phase 1 (2-4s): Typewriter effect - "SYSTEM CONNECTION ESTABLISHED"
   - Phase 2 (4s): Typewriter effect - "WELCOME, OPERATIVE"
   - Phase 3 (4-6s): Fade-in - "I AM DHI. YOUR WATCHDOG."
   - Phase 4 (Final): Mission input field appears
4. **User enters mission** → Logs to console (ready for Room Matcher)

## Features Completed
✅ Cyberpunk-themed landing page with space background
✅ Responsive navigation menu
✅ Live stats display (static numbers: 1,024 operatives, 142 rooms, 8,900 sessions)
✅ Guest access input form with codename validation
✅ Cinematic Dhi introduction page with typewriter effect
✅ Query parameter routing (codename passed via URL)
✅ Framer Motion animations (fade-in, typewriter)
✅ Animated effects (pulse, particles, grid overlay)
✅ Mobile-responsive design
✅ Tailwind CSS integration
✅ React 19 with hooks (useState, useEffect)
✅ Cache-busting for static files

## Features Not Yet Implemented
❌ Room Matcher system
❌ Backend API integration for mission submission
❌ Real-time stat updates from database
❌ User authentication system
❌ Navigation pages (WHO ARE WE, CONTACT US, etc.)
❌ Live map functionality
❌ Leaderboard system
❌ Database persistence (D1/KV/R2)

## Recommended Next Steps
1. **Room Matcher**: Build the room matching algorithm
2. **Chat Interface**: Create the video/text chat room
3. **Backend API Routes**: Create Hono API routes for room management
4. **Database Integration**: Set up Cloudflare D1 for user data and rooms
5. **Real Stats**: Connect live stats to database queries
6. **Additional Pages**: Build out the navigation pages (About, Contact, etc.)

## Development Commands
```bash
# Install dependencies
npm install

# Build for production (includes static file copy)
npm run build

# Start development server (after build)
npm run dev:sandbox

# Or use PM2
pm2 start ecosystem.config.cjs

# Deploy to Cloudflare Pages
npm run deploy:prod

# Clean port 3000
npm run clean-port

# Test local server
npm run test
```

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: ✅ Active (Development)
- **Last Updated**: 2025-12-25

## Project Structure
```
webapp/
├── src/
│   ├── index.tsx         # Hono backend entry point (routes)
│   └── renderer.tsx      # HTML renderer with Tailwind
├── public/
│   └── static/
│       ├── app.js        # Landing page React app
│       ├── intro.js      # Intro page React app with animations
│       └── style.css     # Custom CSS styles
├── dist/                 # Build output (auto-generated)
│   ├── _worker.js        # Compiled worker
│   ├── _routes.json      # Routing config
│   └── static/           # Copied static files
├── ecosystem.config.cjs  # PM2 configuration
├── wrangler.jsonc        # Cloudflare configuration
├── vite.config.ts        # Vite build config
├── package.json          # Dependencies and scripts
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Notes
- The countdown timer logic is present but not actively counting down (static display)
- Background image is from Unsplash (galaxy/space theme)
- All stats are currently hardcoded for demo purposes
- Form submission redirects to intro page with codename as query parameter
- Build script automatically copies `public/static/*` to `dist/static/`
- Cache-busting version parameters added to prevent browser caching issues

## Console Output
When user submits mission on intro page:
```javascript
Room Requested: {
  codename: "Agent47",
  subject: "Artificial Intelligence"
}
```
