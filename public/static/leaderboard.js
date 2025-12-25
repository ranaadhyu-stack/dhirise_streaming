import { createElement as h, useState } from 'https://esm.sh/react@19.2.3'
import { createRoot } from 'https://esm.sh/react-dom@19.2.3/client'
import { motion } from 'https://esm.sh/framer-motion@11.15.0'

// Custom SVG Icons
const CrownIcon = () => h('svg', {
  className: 'w-12 h-12 text-yellow-500',
  fill: 'currentColor',
  viewBox: '0 0 24 24'
},
  h('path', { d: 'M12 2l2.5 7.5L22 7l-3 9H5L2 7l7.5 2.5L12 2z' }),
  h('rect', { x: '4', y: '17', width: '16', height: '3', rx: '1' })
)

const ChevronLeftIcon = () => h('svg', {
  className: 'w-5 h-5',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  strokeWidth: '2'
},
  h('path', { d: 'M15 18l-6-6 6-6', strokeLinecap: 'round', strokeLinejoin: 'round' })
)

const UserIcon = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }
  
  return h('div', {
    className: `${sizeClasses[size]} rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white`
  },
    h('span', {}, '👤')
  )
}

// Mock Leaderboard Data
const leaderboardData = [
  { rank: 1, username: 'Arjun_Quantum', title: 'MASTER OPERATIVE', hours: 420, coins: 15420 },
  { rank: 2, username: 'Priya_Chem', title: 'ELITE OPERATIVE', hours: 385, coins: 12850 },
  { rank: 3, username: 'Dev_Coder', title: 'SENIOR OPERATIVE', hours: 360, coins: 11200 },
  { rank: 4, username: 'Raj_Scholar', hours: 342, coins: 10500 },
  { rank: 5, username: 'Aisha_Physics', hours: 325, coins: 9800 },
  { rank: 6, username: 'Vikram_Math', hours: 310, coins: 9200 },
  { rank: 7, username: 'Sana_Biology', hours: 295, coins: 8750 },
  { rank: 8, username: 'Rohan_AI', hours: 280, coins: 8300 },
  { rank: 9, username: 'Meera_Stats', hours: 268, coins: 7950 },
  { rank: 10, username: 'Karthik_ML', hours: 255, coins: 7600 },
  { rank: 11, username: 'Ananya_Data', hours: 242, coins: 7250 },
  { rank: 12, username: 'Ishaan_Tech', hours: 230, coins: 6900 },
  { rank: 13, username: 'Diya_Robotics', hours: 218, coins: 6550 },
  { rank: 14, username: 'Aarav_Cyber', hours: 205, coins: 6200 },
  { rank: 15, username: 'Zara_Networks', hours: 195, coins: 5900 },
  { rank: 16, username: 'Neil_Security', hours: 185, coins: 5600 },
  { rank: 17, username: 'Tara_Cloud', hours: 175, coins: 5300 },
  { rank: 18, username: 'Kabir_DevOps', hours: 165, coins: 5000 },
  { rank: 19, username: 'Riya_Frontend', hours: 155, coins: 4700 },
  { rank: 20, username: 'Aditya_Backend', hours: 145, coins: 4400 }
]

function LeaderboardPage() {
  const topThree = leaderboardData.slice(0, 3)
  const restOfList = leaderboardData.slice(3)

  const handleBackHome = () => {
    window.location.href = '/'
  }

  // Podium Card Component
  const PodiumCard = ({ player, index }) => {
    const colors = {
      0: { 
        border: 'border-yellow-500', 
        shadow: 'shadow-[0_0_40px_rgba(234,179,8,0.4)]',
        text: 'text-yellow-500',
        glow: 'from-yellow-500/20',
        size: 'scale-110'
      },
      1: { 
        border: 'border-cyan-400', 
        shadow: 'shadow-[0_0_30px_rgba(34,211,238,0.3)]',
        text: 'text-cyan-400',
        glow: 'from-cyan-400/20',
        size: 'scale-100'
      },
      2: { 
        border: 'border-orange-600', 
        shadow: 'shadow-[0_0_30px_rgba(234,88,12,0.3)]',
        text: 'text-orange-600',
        glow: 'from-orange-600/20',
        size: 'scale-100'
      }
    }

    const style = colors[index]
    const delay = index * 0.2

    return h(motion.div, {
      initial: { opacity: 0, y: 50 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { delay }
      },
      className: `relative ${style.size}`
    },
      // Floating animation container
      h(motion.div, {
        animate: { 
          y: [0, -10, 0],
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        className: `bg-black/40 backdrop-blur-md border-2 ${style.border} ${style.shadow} rounded-lg p-6 ${index === 0 ? 'w-64' : 'w-56'}`
      },
        // Crown for Rank 1
        index === 0 && h('div', { className: 'absolute -top-8 left-1/2 -translate-x-1/2 animate-pulse' },
          h(CrownIcon)
        ),
        
        // Rank Badge
        h('div', { 
          className: `absolute -top-4 -right-4 w-12 h-12 rounded-full border-2 ${style.border} ${style.shadow} bg-black flex items-center justify-center font-mono font-bold ${style.text} text-xl`
        }, `#${player.rank}`),
        
        // Avatar
        h('div', { className: 'flex justify-center mb-4' },
          h(UserIcon, { size: index === 0 ? 'lg' : 'md' })
        ),
        
        // Username
        h('h3', { 
          className: `text-center font-mono font-bold text-white mb-1 ${index === 0 ? 'text-xl' : 'text-lg'}`
        }, player.username),
        
        // Title (only for top 3)
        player.title && h('p', { 
          className: `text-center font-mono text-xs ${style.text} mb-4`
        }, player.title),
        
        // Stats
        h('div', { className: 'space-y-2' },
          h('div', { className: 'flex justify-between items-center' },
            h('span', { className: 'text-gray-400 text-sm font-mono' }, 'Hours:'),
            h('span', { className: 'text-cyan-400 font-mono font-bold' }, `${player.hours}h`)
          ),
          h('div', { className: 'flex justify-between items-center' },
            h('span', { className: 'text-gray-400 text-sm font-mono' }, 'Coins:'),
            h('span', { className: 'text-yellow-500 font-mono font-bold' }, player.coins.toLocaleString())
          )
        )
      )
    )
  }

  // Operative Row Component
  const OperativeRow = ({ player, index }) => {
    return h(motion.div, {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.05 },
      className: 'bg-white/5 hover:bg-white/10 border border-white/10 rounded px-6 py-4 flex items-center justify-between transition-all duration-300 cursor-pointer group'
    },
      // Left: Rank + User
      h('div', { className: 'flex items-center gap-4 flex-1' },
        // Rank
        h('span', { className: 'text-gray-500 font-mono font-bold text-lg w-12' }, `#${player.rank.toString().padStart(2, '0')}`),
        
        // Avatar
        h(UserIcon, { size: 'sm' }),
        
        // Username
        h('span', { className: 'text-white font-mono group-hover:text-cyan-400 transition-colors' }, player.username)
      ),
      
      // Right: Stats
      h('div', { className: 'flex items-center gap-8' },
        // Hours
        h('div', { className: 'text-right' },
          h('div', { className: 'text-gray-400 text-xs font-mono mb-1' }, 'Hours'),
          h('div', { className: 'text-cyan-400 font-mono font-bold' }, `${player.hours}h`)
        ),
        
        // Coins
        h('div', { className: 'text-right min-w-[100px]' },
          h('div', { className: 'text-gray-400 text-xs font-mono mb-1' }, 'DHI Coins'),
          h('div', { className: 'text-yellow-500 font-mono font-bold' }, player.coins.toLocaleString())
        )
      )
    )
  }

  return h('main', {
    className: 'relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-cyan-500 selection:text-black'
  },
    // Background
    h('div', {
      className: 'fixed inset-0 bg-cover bg-center',
      style: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1681673818975-06e6af6ddb08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzcGFjZSUyMHVuaXZlcnNlfGVufDF8fHx8MTc2NjE1NjAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
      }
    }),
    
    // Gradient overlay
    h('div', {
      className: 'fixed inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90'
    }),
    
    // Cyber grid
    h('div', {
      className: 'fixed inset-0 opacity-10',
      style: {
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.3) 75%, rgba(6, 182, 212, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.3) 75%, rgba(6, 182, 212, 0.3) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }
    }),
    
    // Content
    h('div', { className: 'relative z-10 min-h-screen py-8 px-4' },
      // Back Button
      h('div', { className: 'max-w-7xl mx-auto mb-8' },
        h('button', {
          onClick: handleBackHome,
          className: 'flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono transition-colors group'
        },
          h(ChevronLeftIcon),
          h('span', {}, '< BACK TO HOME')
        )
      ),
      
      // Header
      h('div', { className: 'text-center mb-12' },
        h(motion.h1, {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          className: 'text-5xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-cyan-400 to-orange-600 mb-4'
        }, '// HALL OF FAME'),
        h(motion.p, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.3 },
          className: 'text-gray-400 font-mono'
        }, '> THE ELITE TRINITY & TOP OPERATIVES <')
      ),
      
      // Elite Trinity Podium (Top 3)
      h('div', { className: 'max-w-5xl mx-auto mb-16' },
        h('div', { className: 'flex justify-center items-end gap-8 mb-8' },
          // Rank 2 (Left - Platinum)
          h(PodiumCard, { player: topThree[1], index: 1 }),
          
          // Rank 1 (Center - Gold - Largest)
          h(PodiumCard, { player: topThree[0], index: 0 }),
          
          // Rank 3 (Right - Bronze)
          h(PodiumCard, { player: topThree[2], index: 2 })
        )
      ),
      
      // Operative Log (Ranks 4+)
      h('div', { className: 'max-w-5xl mx-auto' },
        h('div', { className: 'bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6' },
          // Log Header
          h('div', { className: 'flex items-center justify-between mb-6 pb-4 border-b border-white/10' },
            h('h2', { className: 'text-2xl font-mono font-bold text-cyan-500' }, '> OPERATIVE LOG'),
            h('span', { className: 'text-gray-500 font-mono text-sm' }, `${restOfList.length} operatives`)
          ),
          
          // Scrollable List
          h('div', { className: 'space-y-3 max-h-[600px] overflow-y-auto pr-2' },
            restOfList.map((player, index) => 
              h(OperativeRow, { key: player.rank, player, index })
            )
          )
        )
      )
    )
  )
}

// Mount
const root = createRoot(document.getElementById('root'))
root.render(h(LeaderboardPage))
