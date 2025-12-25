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
  - Quick Access social login (Google, Apple, Instagram) with sci-fi wireframe design
  - Hall of Fame leaderboard with Elite Trinity podium
  - Mission Control contact page with secure transmission interface
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
- **Leaderboard Page**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai/leaderboard
- **Contact Page**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai/contact
- **Intro Page**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai/intro?user=Agent47
- **Room Page**: https://3000-i5lsaotnp60kou4tqc49h-5c13a017.sandbox.novita.ai/room?user=Agent47&subject=AI
- **Local**: http://localhost:3000

## Current Status
- **Version**: v11 (Mission Control Contact Page Added)
- **Last Updated**: 2025-12-25
- **Status**: ✅ All core features working + Contact support interface
- **Cache Version**: v10 (use Ctrl+Shift+R for hard refresh)

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

### Flow 2: Student Authentication (Traditional)
1. **Landing Page** (`/`) - User clicks "UPLINK //" button
2. **Uplink Page** (`/uplink`) - Student Gateway authentication:
   - **Register Tab**: Create new account with username, email, password
   - **Login Tab**: Access portal with username and password
3. **After Registration**: Verification screen → "RETURN TO HOME"
4. **After Login**: Redirects to `/intro?user=Username`
5. **Continue to Room**: Same as guest flow

### Flow 3: Social Login (Quick Access)
1. **Landing Page** (`/`) - User clicks "UPLINK //" button
2. **Uplink Page** (`/uplink`) - Choose Quick Access:
   - Click Google, Apple, or Instagram button
3. **Loading**: "AUTHENTICATING VIA SOCIAL NETWORK..." (2s)
4. **Success Screen**: 
   - "SYSTEM ACCESS GRANTED"
   - Alert: "Verify student status within 72 HOURS"
   - Click [ ENTER DHIVERSE ]
5. **Redirects to**: `/intro?user=SocialUser`
6. **Continue to Room**: Same as other flows

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
- **Quick Access social login** (Google, Apple, Instagram)

**Login Tab:**
- Username input
- Password input
- [ ACCESS PORTAL ] button (green glow)
- **Quick Access divider**: "> OR QUICK ACCESS VIA <"
- **Social buttons**: Google, Apple, Instagram (sci-fi wireframe style)
- On submit: Redirects to `/intro?user=Username`

**Register Tab:**
- Desired Username input (e.g., raj_sharma)
- Email ID input
- Password input (min 8 chars)
- [ CREATE ACCOUNT ] button (cyan glow)
- **Quick Access divider**: "> OR QUICK ACCESS VIA <"
- **Social buttons**: Google, Apple, Instagram (sci-fi wireframe style)
- On submit: Loading screen → Success screen

**Registration Flow:**
1. Loading: "> GENERATING STUDENT PROFILE..." (2s)
2. Success: Green checkmark + "VERIFICATION LINK SENT"
3. Message: "Please check your Email ID to activate your account"
4. [ RETURN TO HOME ] button

**Social Login Flow (Google/Apple/Instagram):**
1. Loading: "> AUTHENTICATING VIA SOCIAL NETWORK..." (2s)
2. Success: Green checkmark + "SYSTEM ACCESS GRANTED"
3. Alert: "⚠️ Please verify student status within 72 HOURS"
4. Warning: "Failure to verify will result in access revocation"
5. [ ENTER DHIVERSE ] button → Redirects to `/intro?user=SocialUser`

**Social Button Design:**
- Monochrome cyan wireframe aesthetic (no colorful generic buttons)
- Custom SVG icons (Google crosshairs, Apple wireframe, Instagram camera)
- Normal state: `border-cyan-500/30` with transparent background
- Hover state: `border-cyan-500/60` with cyan glow effect
- Matches overall sci-fi theme perfectly

### 3. Leaderboard Page (`/leaderboard`) - **NEW!**
**Hall of Fame - Elite Trinity & Operative Log**
- Cyberpunk high score theme
- Starfield background with cyber grid
- Back to Home button (top-left)

**Elite Trinity Podium (Top 3):**
- Strategic positioning: Rank 2 (Left), Rank 1 (Center), Rank 3 (Right)
- **Rank 1 (Gold - LARGEST):**
  - Floating gold crown above avatar
  - Border: `border-yellow-500` with golden glow
  - Scale: 110% (largest card)
  - Title: "MASTER OPERATIVE"
  - Shadow: `shadow-[0_0_40px_rgba(234,179,8,0.4)]`
- **Rank 2 (Platinum - Cyan):**
  - Border: `border-cyan-400` with cyan glow
  - Title: "ELITE OPERATIVE"
  - Shadow: `shadow-[0_0_30px_rgba(34,211,238,0.3)]`
- **Rank 3 (Bronze - Orange):**
  - Border: `border-orange-600` with orange glow
  - Title: "SENIOR OPERATIVE"
  - Shadow: `shadow-[0_0_30px_rgba(234,88,12,0.3)]`
- **Floating Animation:** Continuous up/down motion (3s cycle, staggered)

**Operative Log (Ranks 4-20):**
- Scrollable glass list (max height: 600px)
- Each row: Rank, Avatar, Username, Hours, DHI Coins
- Hover effect: Background lightens, username glows cyan
- 17 operatives with Indian student names
- Mock data: Hours (145-342) and Coins (4,400-10,500 DHI)

### 4. Contact Page (`/contact`) - **NEW!**
**Mission Control - Secure Transmission Link**
- 2-column layout (Direct Uplinks + Encrypted Transmission Form)
- Starfield background with cyber grid
- Back to Home button (top-left)

**Left Column: Direct Channels**
- Header: `> DIRECT CHANNELS`
- **4 Uplink Cards** with hover slide effect:
  - **WhatsApp** (Green border): "PRIORITY CHAT" - Avg Reply: 5 mins
  - **Instagram** (Pink border): "COMMUNITY" - Follow Updates
  - **Email** (Cyan border): "OFFICIAL LOGS" - support@dhirise.com
  - **Call** (Orange border): "EMERGENCY" - +91-98765-XXXX
- Hover animation: Slides right (x: 10px)
- Staggered entry animations (0.1s delay each)
- Custom SVG icons for each service

**Right Column: Encrypted Transmission Form**
- Header: `> SUBMIT QUERY LOG`
- **Trust Indicator** (CRITICAL for reassurance):
  - Pulsing green dot (●)
  - Text: "HUMAN OPERATIVES ACTIVE. ESTIMATED REPLY: 24-48 HOURS."
  - Style: `text-emerald-400, tracking-widest`
- **Form Fields:**
  - `> Operative Name` (text input)
  - `> Comms ID` (email input)
  - `> Mission Context` (dropdown: Account Issue, Bug Report, Feature Request, Technical Support, Other)
  - `> Transmission Data` (textarea, 6 rows)
- **Submit Button:** `[ TRANSMIT DATA ]` with cyan glow and scale hover effect

**Submit Flow:**
1. Loading: "> ENCRYPTING DATA PACKETS..." (2s with spinner)
2. Success: "> TRANSMISSION RECEIVED. TICKET #[RANDOM]."
3. Message: "Stand by, Operative. We are reviewing your log personally."
4. Button: `[ SUBMIT ANOTHER ]` to reset form

### 5. Intro Page (`/intro`)
- Cinematic typewriter sequence (5 phases)
- Dhi introduction: "I AM DHI. YOUR WATCHDOG."
- Mission input field
- Guest Protocol sequence:
  - Mission analysis (typewriter effect)
  - Guest warning box (orange alert)
  - "INITIATE NEURAL LINK" button (pulsing)
- **Redirects to**: `/room?user=CodeName&subject=Subject`

### 6. Room Page (`/room`)
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
✅ **Quick Access social login (Google, Apple, Instagram)**
✅ **Sci-fi wireframe social buttons (monochrome cyan aesthetic)**
✅ **Different success flows for social vs traditional login**
✅ **72-hour verification alert for social login**
✅ **Mock verification system with loading and success states**
✅ **Hall of Fame leaderboard page with Elite Trinity podium**
✅ **Floating animated podium cards (Gold/Cyan/Bronze)**
✅ **Gold crown for Rank 1 (MASTER OPERATIVE)**
✅ **Scrollable operative log (ranks 4-20)**
✅ **Indian student names in leaderboard data**
✅ **Back to Home button with navigation**
✅ **Mission Control contact page with secure transmission interface**
✅ **Direct Uplinks cards (WhatsApp, Instagram, Email, Call)**
✅ **Hover slide effect for uplink cards (x: 10px)**
✅ **Trust indicator with pulsing green dot**
✅ **Encrypted transmission form with validation**
✅ **Mock submission with loading and success states**
✅ **Random ticket ID generation (1000-9999)**
✅ **Personal reassurance messaging**
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
✅ Cache-busting for static files (v9)

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

## Latest Updates (v10)
- ✅ **Added Hall of Fame Leaderboard** (`/leaderboard`)
- ✅ **Elite Trinity Podium** with top 3 operatives (Gold/Cyan/Bronze)
- ✅ **Rank 1 features gold crown** floating above avatar
- ✅ **Floating animation** for all podium cards (3s cycle, staggered)
- ✅ **Strategic positioning** (Rank 2 left, Rank 1 center largest, Rank 3 right)
- ✅ **Operative Log** with scrollable list (ranks 4-20)
- ✅ **20 Indian student names** with realistic hours and DHI coins
- ✅ **Glass-morphism design** with unique glows for each rank
- ✅ **Back to Home button** with chevron navigation
- ✅ **Landing page LEADERBOARD link** updated to `/leaderboard`
- ✅ **Cache updated to v9** for proper button functionality

## Previous Updates (v9)
- ✅ **Added Quick Access social login** (Google, Apple, Instagram)
- ✅ **Sci-fi wireframe social buttons** with monochrome cyan aesthetic
- ✅ **Custom SVG icons** for social providers (no external library dependencies)
- ✅ **Different success flows** for social vs traditional authentication
- ✅ **72-hour verification alert** for social login users
- ✅ **"ENTER DHIVERSE" button** for immediate access after social login
- ✅ Social buttons match overall cyberpunk theme perfectly
- ✅ No colorful generic social buttons - pure wireframe design
- ✅ Hover effects with cyan glow and subtle background fill
- ✅ All social login flows properly tested and working

## Previous Updates (v8)
- ✅ Added Student Gateway authentication page (`/uplink`)
- ✅ Implemented login/register tab switcher
- ✅ Created registration form with validation
- ✅ Added mock email verification flow
- ✅ Integrated "UPLINK //" button on landing page
- ✅ Updated cache to v8 for proper button functionality
- ✅ All pages properly linked and functional
