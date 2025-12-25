# DHIVERSE

## Project Overview
- **Name**: DHIVERSE - The Academic Universe
- **Goal**: A cyberpunk-styled academic networking platform with cinematic user experience and tactical HUD interface
- **Features**: 
  - Immersive space-themed background with galaxy imagery
  - Animated cyber grid overlay
  - Live statistics display (Operatives, Active Rooms, Sessions)
  - Guest access input form with codename entry
  - Student Gateway authentication page (Login/Register)
  - Cinematic "Dhi Introduction" page with typewriter effects
  - Tactical HUD room interface with video grid and chat console
  - Guest Protocol with mission analysis and neural link
  - Responsive navigation menu
  - Floating particle effects
  - Framer Motion animations

## URLs
- **GitHub Repository**: https://github.com/ranaadhyu-stack/dhirise_streaming
- **Development**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai
- **Uplink Page**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai/uplink
- **Intro Page**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai/intro?user=Agent47
- **Room Page**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai/room?user=Agent47&subject=AI
- **Local**: http://localhost:3000

## Current Status
- **Version**: v8 (Stable with Authentication)
- **Last Updated**: 2025-12-25
- **Status**: ✅ All core features working
- **Cache Version**: v8 (use Ctrl+Shift+R for hard refresh)

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

### Flow 1: Guest Access (Quick Start)
1. **Landing Page** (`/`) - User enters codename → Clicks "ENTER"
2. **Redirects to** `/intro?user=CodeName`
3. **Intro Page** - Cinematic introduction → Enter mission subject
4. **Redirects to** `/room?user=CodeName&subject=Subject`

### Flow 2: Student Authentication
1. **Landing Page** (`/`) - User clicks "UPLINK //" button
2. **Uplink Page** (`/uplink`) - Student Gateway authentication:
   - **Register Tab**: Create new account with username, email, password
   - **Login Tab**: Access portal with username and password
3. **After Registration**: Verification screen → "RETURN TO HOME"
4. **After Login**: Redirects to `/intro?user=Username`
5. **Continue to Room**: Same as guest flow

## Page Details

### 1. Landing Page (`/`)
- Space background with galaxy imagery
- Live stats: 1,024 operatives, 142 rooms, 8,900 sessions
- Guest access form: Enter codename
- Navigation menu (top-right) with "UPLINK //" button
- Floating particle effects
- **Redirects to**: `/intro?user=CodeName` (guest) or `/uplink` (auth)

### 2. Uplink Page (`/uplink`) - **NEW!**
**Student Gateway Authentication**
- Glass-morphism centered panel with cyan TechBorder corners
- Tab switcher: [ LOG IN ] | [ REGISTER ]
- Smooth Framer Motion transitions

**Login Tab:**
- Username input
- Password input
- [ ACCESS PORTAL ] button (green glow)
- On submit: Redirects to `/intro?user=Username`

**Register Tab:**
- Desired Username input (e.g., raj_sharma)
- Email ID input
- Password input (min 8 chars)
- [ CREATE ACCOUNT ] button (cyan glow)
- On submit: Loading screen → Success screen

**Registration Flow:**
1. Loading: "> GENERATING STUDENT PROFILE..." (2s)
2. Success: Green checkmark + "VERIFICATION LINK SENT"
3. Message: "Please check your Email ID to activate your account"
4. [ RETURN TO HOME ] button

### 3. Intro Page (`/intro`)
- Cinematic typewriter sequence (5 phases)
- Dhi introduction: "I AM DHI. YOUR WATCHDOG."
- Mission input field
- Guest Protocol sequence:
  - Mission analysis (typewriter effect)
  - Guest warning box (orange alert)
  - "INITIATE NEURAL LINK" button (pulsing)
- **Redirects to**: `/room?user=CodeName&subject=Subject`

### 4. Room Page (`/room`)
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

## Features Completed
✅ Cyberpunk-themed landing page with space background
✅ Responsive navigation menu with "UPLINK //" button
✅ Live stats display (static numbers: 1,024 operatives, 142 rooms, 8,900 sessions)
✅ Guest access input form with codename validation
✅ **Student Gateway authentication page with login/register**
✅ **Tab switcher with smooth animations**
✅ **Registration form with email verification flow**
✅ **Login form with portal access**
✅ **Mock verification system with loading and success states**
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
✅ Framer Motion animations (fade-in, typewriter, pulse, tab switching)
✅ Animated effects (pulse, particles, grid overlay)
✅ Mobile-responsive design (stacks on small screens)
✅ Tailwind CSS integration
✅ React 19 with hooks (useState, useEffect, useRef)
✅ Cache-busting for static files (v8)

## Features Not Yet Implemented
❌ Video/Audio streaming (WebRTC)
❌ Real peer-to-peer connections
❌ Room Matcher system
❌ Backend API integration for authentication (currently mock)
❌ Real-time stat updates from database
❌ Email verification system (currently mock UI)
❌ Password hashing and secure authentication
❌ Navigation pages (WHO ARE WE, CONTACT US, etc.)
❌ Live map functionality
❌ Leaderboard system
❌ Database persistence (D1/KV/R2)
❌ Session management (30-minute timer enforcement)
❌ Wallet/token system integration

## Recommended Next Steps
1. **Backend Authentication**: Integrate real auth system (Cloudflare D1 + JWT)
2. **Email Service**: Connect email verification (SendGrid, Mailgun, or Resend)
3. **WebRTC Integration**: Add real video/audio streaming
4. **Peer Matching**: Build room matching algorithm
5. **Database Integration**: Set up Cloudflare D1 for users and rooms
6. **Real-time Updates**: Implement WebSocket or Server-Sent Events for live updates
7. **Additional Pages**: Build out the navigation pages (About, Contact, etc.)

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
│   ├── index.tsx         # Hono backend (routes: /, /intro, /room, /uplink)
│   └── renderer.tsx      # HTML renderer with Tailwind
├── public/
│   └── static/
│       ├── app.js        # Landing page React app (7.3KB)
│       ├── intro.js      # Intro page with Guest Protocol (13KB)
│       ├── room.js       # Room interface with tactical HUD (14KB)
│       ├── uplink.js     # Authentication page (15KB) - NEW!
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

## Notes
- Background image is from Unsplash (galaxy/space theme)
- All stats are currently hardcoded for demo purposes
- Authentication is mock (no real backend yet)
- Email verification is UI-only (no actual emails sent)
- Build script automatically copies `public/static/*` to `dist/static/`
- Cache-busting version parameters (`?v=8`) prevent browser caching issues
- Timer counts down in real-time but doesn't enforce session limits yet
- Video placeholders use emoji icons (no real video streaming yet)

## Console Output
**Uplink Page (authentication):**
```javascript
// Register
Register: { username: "raj_sharma", email: "raj@example.com", password: "****" }

// Login
Login: { username: "raj_sharma", password: "****" }
```

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
- **Cyan** (`#06b6d4`) - Primary accent, borders, system messages, register button
- **Green** (`#22c55e`) - Success states, Dhi responses, login button
- **Orange** (`#f97316`) - Alerts, timer, warnings
- **Gold/Cyan glow** - Highlighted elements (Me box)
- **Gray** - Inactive/searching elements

## Design Philosophy
- **Target Audience**: Indian students
- **Language**: Clear, standard English (no military jargon)
- **Aesthetic**: Futuristic sci-fi, "Elite Student Portal"
- **UI Style**: Glass-morphism, dark mode, cyan accents
- **Typography**: Monospace fonts for terminal feel
- **Animations**: Smooth, cinematic (typewriter, fade, pulse, slide)

## Keyboard Shortcuts
- **Ctrl+Shift+R** (or **Cmd+Shift+R** on Mac) - Hard refresh to clear cache
- **Enter** - Submit forms (codename, mission, chat messages, login/register)

## Browser Support
- Modern browsers with ES6+ support
- Tested on Chrome, Firefox, Safari, Edge
- Mobile-responsive (iOS Safari, Chrome Mobile)

## Latest Updates (v8)
- ✅ Added Student Gateway authentication page (`/uplink`)
- ✅ Implemented login/register tab switcher
- ✅ Created registration form with validation
- ✅ Added mock email verification flow
- ✅ Integrated "UPLINK //" button on landing page
- ✅ Updated cache to v8 for proper button functionality
- ✅ All pages properly linked and functional
