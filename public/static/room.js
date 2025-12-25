import { createElement as h, useState, useEffect, useRef } from 'https://esm.sh/react@19.2.3';
import { createRoot } from 'https://esm.sh/react-dom@19.2.3/client';
import { motion } from 'https://esm.sh/framer-motion@11.15.0';

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

        // Right: Wallet
        h('div', {
          className: "border-2 border-cyan-500/50 px-4 py-2 rounded bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors"
        },
          h('span', { className: "text-cyan-400 font-mono text-sm md:text-base tracking-wider" }, '[ WALLET: 540 DHI ]')
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
            // Me Box (Top-Left)
            h(motion.div, {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5 }
            },
              h('div', {
                className: "relative aspect-video bg-gradient-to-br from-cyan-950/40 to-black border-2 border-cyan-400 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] overflow-hidden"
              },
                // Video placeholder
                h('div', {
                  className: "absolute inset-0 flex items-center justify-center text-cyan-400/50 text-6xl"
                }, '👤'),
                
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

            // Peer Box 1 (Top-Right)
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
                
                // Label
                h('div', {
                  className: "absolute top-2 left-2 bg-gray-800/80 px-3 py-1 rounded text-xs font-mono tracking-wider text-gray-400 border border-white/20"
                }, '[ SEARCHING SIGNAL... ]')
              )
            ),

            // Peer Box 2 (Bottom-Left)
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
                h('div', {
                  className: "absolute top-2 left-2 bg-gray-800/80 px-3 py-1 rounded text-xs font-mono tracking-wider text-gray-400 border border-white/20"
                }, '[ SEARCHING SIGNAL... ]')
              )
            ),

            // Peer Box 3 (Bottom-Right)
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

          // Input Area
          h('div', {
            className: "border-t border-cyan-500/30 p-4 space-y-3"
          },
            // Ask Dhi Toggle
            h('div', {
              className: "flex items-center gap-2 mb-2"
            },
              h('button', {
                onClick: () => setAskDhiMode(!askDhiMode),
                className: `px-3 py-1 rounded text-xs font-mono tracking-wider transition-all ${
                  askDhiMode 
                    ? 'bg-cyan-500/30 border-2 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.4)]' 
                    : 'bg-gray-800/50 border border-gray-600 text-gray-400'
                }`
              }, askDhiMode ? '✓ ASK DHI MODE' : 'ASK DHI'),
              askDhiMode && h('span', { className: "text-cyan-400 text-xs font-mono animate-pulse" }, '← DHI LISTENING')
            ),

            // Input Form
            h('form', { onSubmit: handleSendMessage, className: "flex gap-2" },
              h('input', {
                type: "text",
                value: message,
                onChange: (e) => setMessage(e.target.value),
                placeholder: "> Enter command...",
                className: `flex-1 bg-transparent border ${
                  askDhiMode 
                    ? 'border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.3)]' 
                    : 'border-gray-600'
                } rounded px-3 py-2 text-white placeholder-gray-500 font-mono text-sm outline-none focus:border-cyan-400 transition-all`
              }),
              h('button', {
                type: "submit",
                className: "bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500 text-cyan-300 px-4 py-2 rounded font-mono text-sm transition-colors"
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
