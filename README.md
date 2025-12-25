# DHIVERSE

## Project Overview
- **Name**: DHIVERSE - The Academic Universe
- **Goal**: A cyberpunk-styled academic networking platform with cinematic user experience and tactical HUD interface
- **Features**: 
  - Immersive space-themed background with galaxy imagery
  - Animated cyber grid overlay
  - Live statistics display (Operatives, Active Rooms, Sessions)
  - Guest access input form with codename entry
  - Cinematic "Dhi Introduction" page with typewriter effects
  - Tactical HUD room interface with video grid and chat console
  - Guest Protocol with mission analysis and neural link
  - Responsive navigation menu
  - Floating particle effects
  - Framer Motion animations

## URLs
- **GitHub Repository**: https://github.com/ranaadhyu-stack/dhirise_streaming
- **Development**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai
- **Intro Page**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai/intro?user=Agent47
- **Room Page**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai/room?user=Agent47&subject=AI
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
3. **Intro Page** (`/intro`) - Cinematic introduction with 5 phases:
   - Phase 0 (0-2s): Blinking cursor
   - Phase 1 (2-3s): Typewriter effect - "SYSTEM CONNECTION ESTABLISHED"
   - Phase 2 (3-4s): Typewriter effect - "WELCOME, OPERATIVE"
   - Phase 3 (4-6s): Fade-in - "I AM DHI. YOUR WATCHDOG."
   - Phase 4 (6s+): Mission input field appears
4. **User enters mission subject** → Guest Protocol sequence begins:
   - Input field locks (read-only)
   - Analysis text: "SUBJECT IDENTIFIED: [SUBJECT]"
   - Analysis text: "SEARCHING ACTIVE SECTORS..."
   - Guest Warning appears (orange alert box)
   - "INITIATE NEURAL LINK" button appears (pulsing)
5. **Redirects to** `/room?user=CodeName&subject=Subject`
6. **Room Page** (`/room`) - Tactical HUD interface with:
   - HUD Header: Mission, Timer (59:59 countdown), Wallet
   - 2x2 Video Grid: "Me" box (highlighted) + 3 peer boxes (searching)
   - Dhi Command Console: Chat log with "Ask Dhi" toggle

## Features Completed
✅ Cyberpunk-themed landing page with space background
✅ Responsive navigation menu
✅ Live stats display (static numbers: 1,024 operatives, 142 rooms, 8,900 sessions)
✅ Guest access input form with codename validation
✅ Cinematic Dhi introduction page with typewriter effect
✅ Guest Protocol sequence with mission analysis
✅ Guest Warning alert box (orange dashed border)
✅ Pulsing "INITIATE NEURAL LINK" button
✅ Tactical HUD room interface
✅ 2x2 video grid with "Me" box highlighted (cyan glow)
✅ Pulsing peer boxes with "SEARCHING SIGNAL..."
✅ Countdown timer (59:59) with blinking effect
✅ Dhi command console with chat log
✅ "Ask Dhi" toggle with visual feedback
✅ Auto-reply when Ask Dhi is active
✅ Query parameter routing (codename + subject passed via URL)
✅ Framer Motion animations (fade-in, typewriter, pulse)
✅ Animated effects (pulse, particles, grid overlay)
✅ Mobile-responsive design (stacks on small screens)
✅ Tailwind CSS integration
✅ React 19 with hooks (useState, useEffect, useRef)
✅ Cache-busting for static files

## Features Not Yet Implemented
❌ Video/Audio streaming (WebRTC)
❌ Real peer-to-peer connections
❌ Room Matcher system
❌ Backend API integration for mission submission
❌ Real-time stat updates from database
❌ User authentication system
❌ Navigation pages (WHO ARE WE, CONTACT US, etc.)
❌ Live map functionality
❌ Leaderboard system
❌ Database persistence (D1/KV/R2)
❌ Session management (30-minute timer enforcement)
❌ Wallet/token system integration

## Recommended Next Steps
1. **WebRTC Integration**: Add real video/audio streaming
2. **Peer Matching**: Build room matching algorithm
3. **Backend API Routes**: Create Hono API routes for room management
4. **Database Integration**: Set up Cloudflare D1 for user data and rooms
5. **Real-time Updates**: Implement WebSocket or Server-Sent Events for live updates
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
│   ├── index.tsx         # Hono backend entry point (routes: /, /intro, /room)
│   └── renderer.tsx      # HTML renderer with Tailwind
├── public/
│   └── static/
│       ├── app.js        # Landing page React app (7.3KB)
│       ├── intro.js      # Intro page with Guest Protocol (12KB)
│       ├── room.js       # Room interface with tactical HUD (13.4KB)
│       └── style.css     # Custom CSS styles with scrollbar
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

## Page Details

### 1. Landing Page (`/`)
- Space background with galaxy imagery
- Live stats: 1,024 operatives, 142 rooms, 8,900 sessions
- Guest access form: Enter codename
- Navigation menu (top-right)
- Floating particle effects
- Redirects to: `/intro?user=CodeName`

### 2. Intro Page (`/intro`)
- Cinematic typewriter sequence
- Dhi introduction: "I AM DHI. YOUR WATCHDOG."
- Mission input field
- Guest Protocol sequence:
  - Mission analysis (typewriter effect)
  - Guest warning box (orange alert)
  - "INITIATE NEURAL LINK" button (pulsing)
- Redirects to: `/room?user=CodeName&subject=Subject`

### 3. Room Page (`/room`)
**HUD Header:**
- Mission name (from URL param)
- Countdown timer: 59:59 (blinking orange)
- Wallet display: 540 DHI

**2x2 Video Grid:**
- "Me" box: Cyan glowing border, controls (Mute/Video)
- 3 Peer boxes: Pulsing animations, "SEARCHING SIGNAL..."

**Dhi Command Console:**
- Chat log with scrollbar
- System messages (cyan/green)
- User messages (white)
- "Ask Dhi" toggle (glowing when active)
- Auto-reply: "Affirmative. analyzing query..." (2s delay)

## Notes
- Background image is from Unsplash (galaxy/space theme)
- All stats are currently hardcoded for demo purposes
- Build script automatically copies `public/static/*` to `dist/static/`
- Cache-busting version parameters (`?v=5`) prevent browser caching issues
- Timer counts down in real-time but doesn't enforce session limits yet
- Video placeholders use emoji icons (no real video streaming yet)

## Console Output
**Intro Page (mission submission):**
```javascript
Mission Analysis Started: { codename: "Agent47", subject: "Physics" }
Neural Link Initiated: { codename: "Agent47", subject: "Physics" }
```

**Room Page (chat messages):**
```javascript
// Displayed in chat log with proper prefixes
[DHI WATCHDOG]: NEURAL LINK ESTABLISHED...
[OP_AGENT47]: Hello Dhi
[DHI]: Affirmative. analyzing query...
```

## Color Scheme
- **Cyan** (`#06b6d4`) - Stable elements, borders, system messages
- **Orange** (`#f97316`) - Alerts, timer, warnings
- **Green** (`#22c55e`) - Success, Dhi responses
- **Gold/Cyan glow** - Highlighted elements (Me box)
- **Gray** - Inactive/searching elements

## Keyboard Shortcuts
- **Ctrl+Shift+R** (or **Cmd+Shift+R** on Mac) - Hard refresh to clear cache
- **Enter** - Submit forms (codename, mission, chat messages)

## Browser Support
- Modern browsers with ES6+ support
- Tested on Chrome, Firefox, Safari, Edge
- Mobile-responsive (iOS Safari, Chrome Mobile)
