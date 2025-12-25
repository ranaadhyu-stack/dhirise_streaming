import { createElement as h, useState, useEffect, useRef } from 'https://esm.sh/react@19.2.3';
import { createRoot } from 'https://esm.sh/react-dom@19.2.3/client';
import { motion } from 'https://esm.sh/framer-motion@11.15.0';

// Custom ScanFace SVG Component
function ScanFaceIcon({ size = 120, className = "" }) {
  return h('svg', {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className
  },
    // Face outline
    h('circle', { cx: "12", cy: "12", r: "10" }),
    // Eyes
    h('circle', { cx: "9", cy: "10", r: "1.5" }),
    h('circle', { cx: "15", cy: "10", r: "1.5" }),
    // Mouth
    h('path', { d: "M8 15c1 1 3 2 4 2s3-1 4-2" }),
    // Scan lines
    h('line', { x1: "2", y1: "12", x2: "6", y2: "12", strokeWidth: "2" }),
    h('line', { x1: "18", y1: "12", x2: "22", y2: "12", strokeWidth: "2" }),
    h('line', { x1: "12", y1: "2", x2: "12", y2: "6", strokeWidth: "2" }),
    h('line', { x1: "12", y1: "18", x2: "12", y2: "22", strokeWidth: "2" })
  );
}

function RoomPage() {
  const [codename, setCodename] = useState('UNKNOWN');
  const [subject, setSubject] = useState('PHYSICS');
  const [timeLeft, setTimeLeft] = useState(59 * 60 + 59); // 59:59 in seconds
  const [askDhiMode, setAskDhiMode] = useState(false);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'DHI WATCHDOG', text: 'NEURAL LINK ESTABLISHED. MISSION PARAMETERS LOADED.', type: 'system' },
    { sender: 'DHI WATCHDOG', text: 'AWAITING PEER CONNECTION...', type: 'system' }
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Get params from URL
    const params = new URLSearchParams(window.location.search);
    const userName = params.get('user') || 'UNKNOWN';
    const missionSubject = params.get('subject') || 'PHYSICS';
    setCodename(userName.toUpperCase());
    setSubject(missionSubject.toUpperCase());
  }, []);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userPrefix = `OP_${codename}`;
    
    // Add user message
    setChatLog(prev => [...prev, { 
      sender: userPrefix, 
      text: message, 
      type: 'user' 
    }]);

    // If Ask Dhi mode is active, simulate Dhi response
    if (askDhiMode) {
      setTimeout(() => {
        setChatLog(prev => [...prev, { 
          sender: 'DHI', 
          text: 'Affirmative. analyzing query...', 
          type: 'dhi' 
        }]);
      }, 2000);
    }

    setMessage('');
  };

  const handleDisengage = () => {
    if (confirm('DISENGAGE NEURAL LINK?\n\nThis will terminate your session.')) {
      window.location.href = '/';
    }
  };

  return h(
    'main',
    {
      className: "relative min-h-screen w-full bg-black text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden"
    },
    // UNIVERSE BACKGROUND
    h('div', {
      className: "absolute inset-0 h-full w-full bg-cover bg-center opacity-50",
      style: { backgroundImage: "url('https://images.unsplash.com/photo-1681673818975-06e6af6ddb08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzcGFjZSUyMHVuaXZlcnNlfGVufDF8fHx8MTc2NjE1NjAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')" }
    }),

    // Animated overlay
    h('div', {
      className: "absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"
    }),

    // Cyber grid overlay
    h('div', {
      className: "absolute inset-0 opacity-5",
      style: {
        backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }
    }),

    // MAIN CONTENT
    h('div', {
      className: "relative z-10 min-h-screen flex flex-col p-4 md:p-6"
    },
      // ========== 1. HUD HEADER ==========
      h('header', {
        className: "flex flex-col md:flex-row items-center justify-between gap-4 mb-6 p-4 border-b border-cyan-500/30"
      },
        // Left: Mission
        h('div', {
          className: "flex items-center gap-2 font-mono text-sm md:text-base"
        },
          h('span', { className: "text-cyan-400" }, 'MISSION:'),
          h('span', { className: "text-white font-bold tracking-wider" }, subject)
        ),

        // Center: Timer
        h('div', {
          className: "flex items-center gap-1 font-mono text-3xl md:text-5xl font-bold"
        },
          h('span', { className: "text-orange-500" }, 'T-MINUS:'),
          h(motion.span, {
            animate: { opacity: [1, 0.3, 1] },
            transition: { duration: 2, repeat: Infinity }
          }, h('span', { className: "text-orange-500" }, formatTime(timeLeft)))
        ),

        // Right: Wallet + Exit Button
        h('div', {
          className: "flex items-center gap-4"
        },
          h('div', {
            className: "border-2 border-cyan-500/50 px-4 py-2 rounded bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors"
          },
            h('span', { className: "text-cyan-400 font-mono text-sm md:text-base tracking-wider" }, '[ WALLET: 540 DHI ]')
          ),
          // Exit Button
          h('button', {
            onClick: handleDisengage,
            className: "border-2 border-red-500/50 px-4 py-2 rounded bg-red-500/5 hover:bg-red-500/10 text-red-500 font-mono text-sm md:text-base tracking-wider transition-all hover:shadow-[0_0_10px_rgba(239,68,68,0.3)]"
          }, '[ DISENGAGE // ]')
        )
      ),

      // ========== 2. MAIN CONTENT GRID ==========
      h('div', {
        className: "flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6"
      },
        // ===== LEFT/CENTER: VIDEO GRID (Takes 2 columns on large screens) =====
        h('div', {
          className: "lg:col-span-2"
        },
          h('div', {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4 h-full"
          },
            // Me Box (Top-Left) - UPGRADED
            h(motion.div, {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5 }
            },
              h('div', {
                className: "relative aspect-video bg-gradient-to-br from-cyan-950/40 to-black border-2 border-cyan-400 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] overflow-hidden"
              },
                // ScanFace Icon with Pulse Animation
                h('div', {
                  className: "absolute inset-0 flex items-center justify-center"
                },
                  h(motion.div, {
                    animate: { opacity: [0.5, 1, 0.5] },
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  },
                    h(ScanFaceIcon, {
                      size: 120,
                      className: "text-cyan-400"
                    })
                  )
                ),
                
                // Label
                h('div', {
                  className: "absolute top-2 left-2 bg-cyan-900/80 px-3 py-1 rounded text-xs font-mono tracking-wider text-cyan-300 border border-cyan-400/50"
                }, `[ OPERATIVE: ${codename} (ME) ]`),

                // Controls
                h('div', {
                  className: "absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2"
                },
                  h('button', {
                    className: "bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500 text-cyan-300 px-3 py-1 rounded text-xs font-mono transition-colors"
                  }, '🎤 MUTE'),
                  h('button', {
                    className: "bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500 text-cyan-300 px-3 py-1 rounded text-xs font-mono transition-colors"
                  }, '📹 VIDEO')
                )
              )
            ),

            // Peer Box 1 (Top-Right) - UPGRADED WITH RADAR SCAN
            h(motion.div, {
              animate: { 
                opacity: [0.3, 0.5, 0.3],
                borderColor: ['rgba(255,255,255,0.1)', 'rgba(6,182,212,0.2)', 'rgba(255,255,255,0.1)']
              },
              transition: { duration: 3, repeat: Infinity }
            },
              h('div', {
                className: "relative aspect-video bg-gradient-to-br from-gray-900 to-black border-2 border-white/10 rounded-lg overflow-hidden"
              },
                // Static noise effect
                h('div', {
                  className: "absolute inset-0 opacity-20",
                  style: {
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                  }
                }),
                
                // Radar Scan Effect
                h(motion.div, {
                  className: "absolute inset-0",
                  animate: { y: ['0%', '100%', '0%'] },
                  transition: { duration: 4, repeat: Infinity, ease: "linear" }
                },
                  h('div', {
                    className: "w-full h-8 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
                  })
                ),
                
                // Label
                h('div', {
                  className: "absolute top-2 left-2 bg-gray-800/80 px-3 py-1 rounded text-xs font-mono tracking-wider text-gray-400 border border-white/20"
                }, '[ SEARCHING SIGNAL... ]')
              )
            ),

            // Peer Box 2 (Bottom-Left) - UPGRADED WITH RADAR SCAN
            h(motion.div, {
              animate: { 
                opacity: [0.3, 0.5, 0.3],
                borderColor: ['rgba(255,255,255,0.1)', 'rgba(6,182,212,0.2)', 'rgba(255,255,255,0.1)']
              },
              transition: { duration: 3.5, repeat: Infinity }
            },
              h('div', {
                className: "relative aspect-video bg-gradient-to-br from-gray-900 to-black border-2 border-white/10 rounded-lg overflow-hidden"
              },
                h('div', {
                  className: "absolute inset-0 opacity-20",
                  style: {
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                  }
                }),
                
                // Radar Scan Effect
                h(motion.div, {
                  className: "absolute inset-0",
                  animate: { y: ['0%', '100%', '0%'] },
                  transition: { duration: 4.5, repeat: Infinity, ease: "linear" }
                },
                  h('div', {
                    className: "w-full h-8 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
                  })
                ),
                
                h('div', {
                  className: "absolute top-2 left-2 bg-gray-800/80 px-3 py-1 rounded text-xs font-mono tracking-wider text-gray-400 border border-white/20"
                }, '[ SEARCHING SIGNAL... ]')
              )
            ),

            // Peer Box 3 (Bottom-Right) - UPGRADED WITH RADAR SCAN
            h(motion.div, {
              animate: { 
                opacity: [0.3, 0.5, 0.3],
                borderColor: ['rgba(255,255,255,0.1)', 'rgba(6,182,212,0.2)', 'rgba(255,255,255,0.1)']
              },
              transition: { duration: 4, repeat: Infinity }
            },
              h('div', {
                className: "relative aspect-video bg-gradient-to-br from-gray-900 to-black border-2 border-white/10 rounded-lg overflow-hidden"
              },
                h('div', {
                  className: "absolute inset-0 opacity-20",
                  style: {
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                  }
                }),
                
                // Radar Scan Effect
                h(motion.div, {
                  className: "absolute inset-0",
                  animate: { y: ['0%', '100%', '0%'] },
                  transition: { duration: 5, repeat: Infinity, ease: "linear" }
                },
                  h('div', {
                    className: "w-full h-8 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
                  })
                ),
                
                h('div', {
                  className: "absolute top-2 left-2 bg-gray-800/80 px-3 py-1 rounded text-xs font-mono tracking-wider text-gray-400 border border-white/20"
                }, '[ SEARCHING SIGNAL... ]')
              )
            )
          )
        ),

        // ===== RIGHT: DHI COMMAND CONSOLE =====
        h('div', {
          className: "flex flex-col border-2 border-cyan-500/30 rounded-lg bg-black/50 overflow-hidden"
        },
          // Console Header
          h('div', {
            className: "bg-cyan-900/30 border-b border-cyan-500/30 px-4 py-2"
          },
            h('span', { className: "text-cyan-400 font-mono text-sm tracking-wider" }, '> NEURAL LINK (CHAT)')
          ),

          // Chat Log
          h('div', {
            className: "flex-1 overflow-y-auto p-4 space-y-2 min-h-[300px] max-h-[600px] custom-scrollbar",
            style: { scrollBehavior: 'smooth' }
          },
            ...chatLog.map((msg, idx) => {
              if (msg.type === 'system' || msg.type === 'dhi') {
                return h('div', { key: idx, className: "text-sm font-mono" },
                  h('span', { className: "text-cyan-400" }, `[${msg.sender}]: `),
                  h('span', { className: "text-green-400" }, msg.text)
                );
              } else {
                return h('div', { key: idx, className: "text-sm font-mono" },
                  h('span', { className: "text-gray-400" }, `[${msg.sender}]: `),
                  h('span', { className: "text-white" }, msg.text)
                );
              }
            }),
            h('div', { ref: chatEndRef })
          ),

          // Input Area - UPGRADED
          h('div', {
            className: "border-t border-cyan-500/30 p-4"
          },
            // Input Form with Toggle Inside
            h('form', { onSubmit: handleSendMessage, className: "flex gap-2" },
              // Ask Dhi Toggle Button (Inside Input Area)
              h('button', {
                type: "button",
                onClick: () => setAskDhiMode(!askDhiMode),
                className: `flex-shrink-0 px-3 py-2 rounded text-xs font-mono tracking-wider transition-all ${
                  askDhiMode 
                    ? 'bg-cyan-500/30 border-2 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.4)]' 
                    : 'bg-gray-800/50 border border-gray-600 text-gray-400 hover:text-gray-300'
                }`
              }, askDhiMode ? '✓ DHI' : 'DHI'),
              
              // Input Field
              h('input', {
                type: "text",
                value: message,
                onChange: (e) => setMessage(e.target.value),
                placeholder: askDhiMode ? "> Ask Dhi..." : "> Enter command...",
                className: `flex-1 bg-transparent rounded px-3 py-2 text-white placeholder-gray-500 font-mono text-sm outline-none transition-all ${
                  askDhiMode 
                    ? 'border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                    : 'border border-gray-600 focus:border-cyan-400'
                }`
              }),
              
              // Send Button
              h('button', {
                type: "submit",
                className: "flex-shrink-0 bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500 text-cyan-300 px-4 py-2 rounded font-mono text-sm transition-colors"
              }, 'SEND')
            )
          )
        )
      )
    )
  );
}

// Mount the app
const root = createRoot(document.getElementById('root'));
root.render(h(RoomPage));
