# DHIVERSE

## Project Overview
- **Name**: DHIVERSE - The Academic Universe
- **Goal**: A cyberpunk-styled landing page for an academic networking platform
- **Features**: 
  - Immersive space-themed background with galaxy imagery
  - Animated cyber grid overlay
  - Live statistics display (Operatives, Active Rooms, Sessions)
  - Guest access input form
  - Responsive navigation menu
  - Floating particle effects
  - Real-time countdown timer (currently showing static stats)

## URLs
- **Development**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai
- **Local**: http://localhost:3000

## Tech Stack
- **Backend**: Hono (Lightweight web framework)
- **Frontend**: React 19 (via ESM CDN)
- **Styling**: Tailwind CSS (via CDN)
- **Runtime**: Cloudflare Workers/Pages
- **Build Tool**: Vite
- **Deployment**: Wrangler (Cloudflare CLI)

## Data Architecture
- **Data Models**: Currently static data (stats hardcoded)
- **Storage Services**: None yet (can integrate Cloudflare D1/KV/R2 for persistence)
- **Data Flow**: Client-side React state management

## User Guide
1. Visit the landing page
2. View the "LIVE STATS" showing platform activity
3. Enter a codename in the "GUEST ACCESS" field
4. Click "ENTER" to request access
5. Navigate using the top-right menu:
   - WHO ARE WE
   - CONTACT US
   - LIVE MAP
   - LEADERBOARD
   - UPLINK (Login)

## Features Completed
✅ Cyberpunk-themed landing page with space background
✅ Responsive navigation menu
✅ Live stats display (static numbers)
✅ Guest access input form with validation
✅ Animated effects (pulse, particles, grid overlay)
✅ Mobile-responsive design
✅ Tailwind CSS integration
✅ React 19 with hooks (useState, useEffect)

## Features Not Yet Implemented
❌ Backend API integration for form submission
❌ Real-time stat updates from database
❌ User authentication system
❌ Navigation pages (WHO ARE WE, CONTACT US, etc.)
❌ Live map functionality
❌ Leaderboard system
❌ Database persistence (D1/KV/R2)

## Recommended Next Steps
1. **Backend API Routes**: Create Hono API routes for form submission
2. **Database Integration**: Set up Cloudflare D1 for user data and stats
3. **Authentication**: Implement guest access token system
4. **Real Stats**: Connect live stats to database queries
5. **Additional Pages**: Build out the navigation pages (About, Contact, etc.)
6. **Live Features**: Implement real-time map and leaderboard

## Development Commands
```bash
# Start development server
npm run dev:sandbox

# Build for production
npm run build

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
│   ├── index.tsx         # Hono backend entry point
│   └── renderer.tsx      # HTML renderer with Tailwind
├── public/
│   └── static/
│       ├── app.js        # React frontend application
│       └── style.css     # Custom CSS styles
├── ecosystem.config.cjs  # PM2 configuration
├── wrangler.jsonc        # Cloudflare configuration
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Notes
- The countdown timer logic is present but not actively counting down (static display)
- Background image is from Unsplash (galaxy/space theme)
- All stats are currently hardcoded for demo purposes
- Form submission currently shows an alert (no backend integration yet)
