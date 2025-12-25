import { createElement as h, useState, useEffect } from 'https://esm.sh/react@19.2.3';
import { createRoot } from 'https://esm.sh/react-dom@19.2.3/client';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 32
  });

  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        
        if (hours < 0) {
          hours = 23;
          days--;
        }
        
        if (days < 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('Please enter a codename!');
      return;
    }
    console.log('Codename submitted:', email);
    // Redirect to intro page with codename as query parameter
    window.location.href = `/intro?user=${encodeURIComponent(email)}`;
  };

  return h('main', {
    className: "relative h-screen w-full overflow-hidden bg-black text-white selection:bg-cyan-500 selection:text-black"
  },
    // UNIVERSE BACKGROUND
    h('div', {
      className: "absolute inset-0 h-full w-full bg-cover bg-center opacity-70",
      style: { backgroundImage: "url('https://images.unsplash.com/photo-1681673818975-06e6af6ddb08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzcGFjZSUyMHVuaXZlcnNlfGVufDF8fHx8MTc2NjE1NjAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')" }
    }),
    
    // Animated overlay
    h('div', {
      className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[1px]"
    }),

    // Cyber grid overlay effect
    h('div', {
      className: "absolute inset-0 opacity-10",
      style: {
        backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }
    }),

    // THE MINIMAL MENU (Top Right)
    h('nav', {
      className: "absolute top-0 right-0 p-8 z-20 flex gap-8 font-mono text-xs tracking-[0.2em] text-cyan-400/80"
    },
      h('a', { href: "#whoarewe", className: "hover:text-white transition-colors duration-200" }, "[ WHO ARE WE ]"),
      h('a', { href: "/contact", className: "hover:text-white transition-colors duration-200" }, "[ CONTACT US ]"),
      h('a', { href: "#livemap", className: "hover:text-white transition-colors duration-200" }, "[ LIVE MAP ]"),
      h('a', { href: "/leaderboard", className: "hover:text-white transition-colors duration-200" }, "[ LEADERBOARD ]"),
      h('a', { 
        href: "/uplink", 
        className: "border border-cyan-500/50 px-4 py-2 hover:bg-cyan-500 hover:text-black transition-all duration-200" 
      }, "UPLINK //")
    ),

    // THE CENTER HERO
    h('div', {
      className: "relative z-10 flex h-full flex-col items-center justify-center px-4"
    },
      h('div', {
        className: "mb-4 font-mono text-sm tracking-[0.5em] text-cyan-500 animate-pulse flex items-center gap-2"
      },
        h('span', {
          className: "w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"
        }),
        "SYSTEM STATUS: ONLINE"
      ),
      h('h1', {
        className: "text-[12vw] sm:text-[10vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl"
      }, "DHIVERSE"),
      h('div', {
        className: "mt-8 h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"
      }),
      h('p', {
        className: "mt-6 text-center max-w-2xl font-mono text-sm text-cyan-400"
      }, "FIND YOUR NETWORK. THE ACADEMIC UNIVERSE IS LIVE.")
    ),

    // THE BOTTOM BAR (Timer & Input)
    h('div', {
      className: "absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 flex flex-col md:flex-row justify-between items-end gap-8"
    },
      // Left: Newsletter / Waitlist
      h('div', {
        className: "w-full max-w-md"
      },
        h('label', {
          className: "block font-mono text-xs text-gray-400 mb-2 tracking-wider"
        }, "GUEST ACCESS (5 MINS)"),
        h('form', {
          onSubmit: handleSubmit,
          className: "flex border-b border-white/20 pb-2 focus-within:border-cyan-500/50 transition-colors"
        },
          h('input', {
            type: "text",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "ENTER CODENAME...",
            className: "bg-transparent w-full outline-none font-mono text-white placeholder-gray-600"
          }),
          h('button', {
            type: "submit",
            className: "text-cyan-500 font-bold hover:text-white transition-colors duration-200 tracking-wider"
          }, "ENTER")
        )
      ),

      // Right: The Countdown
      h('div', {
        className: "text-right"
      },
        h('p', {
          className: "font-mono text-xs text-cyan-500 italic mb-2 tracking-wider"
        }, "LIVE STATS"),
        h('div', {
          className: "flex gap-4 md:gap-8 font-mono"
        },
          h('div', {
            className: "flex flex-col items-center"
          },
            h('span', {
              className: "text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            }, "1,024"),
            h('span', {
              className: "text-xs text-cyan-500 font-normal mt-2 tracking-wider"
            }, "OPERATIVES")
          ),
          h('div', {
            className: "flex flex-col items-center"
          },
            h('span', {
              className: "text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            }, "142"),
            h('span', {
              className: "text-xs text-cyan-500 font-normal mt-2 tracking-wider"
            }, "ACTIVE ROOMS")
          ),
          h('div', {
            className: "flex flex-col items-center"
          },
            h('span', {
              className: "text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            }, "8,900"),
            h('span', {
              className: "text-xs text-cyan-500 font-normal mt-2 tracking-wider"
            }, "SESSIONS ENDED")
          )
        )
      )
    ),

    // Floating particles effect
    h('div', {
      className: "absolute inset-0 pointer-events-none z-0"
    },
      ...Array.from({ length: 20 }, (_, i) => 
        h('div', {
          key: i,
          className: "absolute w-1 h-1 bg-cyan-500/30 rounded-full animate-pulse",
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }
        })
      )
    )
  );
}

// Mount the app
const root = createRoot(document.getElementById('root'));
root.render(h(App));
