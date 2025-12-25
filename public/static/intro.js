import { createElement as h, useState, useEffect } from 'https://esm.sh/react@19.2.3';
import { createRoot } from 'https://esm.sh/react-dom@19.2.3/client';
import { motion } from 'https://esm.sh/framer-motion@11.15.0';

function IntroPage() {
  const [phase, setPhase] = useState(0);
  const [step, setStep] = useState('initial'); // initial, analyzing, guest_warning, ready
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');
  const [analysisText1, setAnalysisText1] = useState('');
  const [analysisText2, setAnalysisText2] = useState('');
  const [subject, setSubject] = useState('');
  const [codename, setCodename] = useState('');

  const text1 = '> SYSTEM CONNECTION ESTABLISHED.';
  const text2 = '> WELCOME, OPERATIVE.';

  useEffect(() => {
    // Get codename from URL query params
    const params = new URLSearchParams(window.location.search);
    const userName = params.get('user') || 'UNKNOWN';
    setCodename(userName);

    // Phase 0: Blinking cursor (2 seconds)
    const timer0 = setTimeout(() => {
      setPhase(1);
    }, 2000);

    return () => clearTimeout(timer0);
  }, []);

  useEffect(() => {
    if (phase === 1) {
      // Phase 1: Type first line
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text1.length) {
          setTypedText1(text1.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          // Start typing second line after a brief pause
          setTimeout(() => {
            setPhase(2);
          }, 300);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 2) {
      // Phase 2: Type second line
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text2.length) {
          setTypedText2(text2.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          // Move to Phase 3 after completion
          setTimeout(() => {
            setPhase(3);
          }, 500);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 3) {
      // Phase 3: Show Dhi message
      setTimeout(() => {
        setPhase(4);
      }, 2000);
    }
  }, [phase]);

  // Mission Analysis Typewriter Effect
  useEffect(() => {
    if (step === 'analyzing') {
      const analysis1 = `> SUBJECT IDENTIFIED: ${subject.toUpperCase()}.`;
      const analysis2 = '> SEARCHING ACTIVE SECTORS...';
      
      // Type first analysis line
      let index = 0;
      const interval1 = setInterval(() => {
        if (index <= analysis1.length) {
          setAnalysisText1(analysis1.slice(0, index));
          index++;
        } else {
          clearInterval(interval1);
          // Start second line after pause
          setTimeout(() => {
            let index2 = 0;
            const interval2 = setInterval(() => {
              if (index2 <= analysis2.length) {
                setAnalysisText2(analysis2.slice(0, index2));
                index2++;
              } else {
                clearInterval(interval2);
                // Show guest warning after search completes
                setTimeout(() => {
                  setStep('guest_warning');
                }, 1000);
              }
            }, 50);
          }, 500);
        }
      }, 50);

      return () => clearInterval(interval1);
    }
  }, [step, subject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject.trim()) {
      return;
    }
    console.log('Mission Analysis Started:', { codename, subject });
    setStep('analyzing');
  };

  const handleNeuralLink = () => {
    console.log('Neural Link Initiated:', { codename, subject });
    // TODO: Navigate to /room
    window.location.href = `/room?user=${encodeURIComponent(codename)}&subject=${encodeURIComponent(subject)}`;
  };

  return h(
    'main',
    {
      className: "relative h-screen w-full overflow-hidden bg-black text-white selection:bg-cyan-500 selection:text-black"
    },
    // UNIVERSE BACKGROUND (Same as landing page)
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

    // CENTER TERMINAL CONTENT
    h('div', {
      className: "relative z-10 flex h-full flex-col items-center justify-center px-4"
    },
      h('div', {
        className: "font-mono text-sm md:text-base max-w-3xl w-full"
      },
        // Phase 0: Blinking cursor
        phase === 0 && h(motion.div, {
          key: 'cursor',
          initial: { opacity: 0 },
          animate: { opacity: [0, 1, 0] },
          transition: { repeat: Infinity, duration: 1 }
        }, h('span', { className: "text-cyan-500 text-2xl" }, '_')),

        // Phase 1-2: Typing lines
        phase >= 1 && h('div', { className: "space-y-2" },
          h('div', { className: "text-green-400" },
            typedText1,
            phase === 1 && h(motion.span, {
              animate: { opacity: [0, 1, 0] },
              transition: { repeat: Infinity, duration: 0.8 }
            }, '_')
          ),
          phase >= 2 && h('div', { className: "text-green-400" },
            typedText2,
            phase === 2 && h(motion.span, {
              animate: { opacity: [0, 1, 0] },
              transition: { repeat: Infinity, duration: 0.8 }
            }, '_')
          )
        ),

        // Phase 3: Dhi message fade in
        phase >= 3 && h(motion.div, {
          key: 'dhi-message',
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1.5 }
        },
          h('div', { className: "mt-12 text-center" },
            h('p', { className: "text-cyan-400 text-2xl md:text-4xl tracking-wider" },
              '"I AM DHI. YOUR WATCHDOG."'
            ),
            h('p', { className: "text-cyan-500/60 text-xs mt-4 tracking-widest" },
              `OPERATIVE: ${codename.toUpperCase()}`
            )
          )
        ),

        // Phase 4: Mission input
        phase >= 4 && step === 'initial' && h(motion.div, {
          key: 'mission-input',
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.3 }
        },
          h('div', { className: "mt-16" },
            h('form', { onSubmit: handleSubmit, className: "space-y-4" },
              h('label', { className: "block text-cyan-500/80 text-xs md:text-sm tracking-wider" },
                '> WHAT IS YOUR MISSION TODAY?'
              ),
              h('div', { className: "flex items-center gap-4 border-b border-cyan-500/30 pb-2 focus-within:border-cyan-500 transition-colors" },
                h('span', { className: "text-cyan-500" }, '['),
                h('input', {
                  type: "text",
                  value: subject,
                  onChange: (e) => setSubject(e.target.value),
                  placeholder: "Enter Subject",
                  className: "bg-transparent flex-1 outline-none text-white placeholder-gray-600 font-mono",
                  autoFocus: true
                }),
                h('span', { className: "text-cyan-500" }, ']')
              ),
              h('button', {
                type: "submit",
                className: "text-xs text-cyan-500/60 hover:text-cyan-400 transition-colors tracking-wider mt-2"
              }, '> PRESS ENTER TO CONTINUE')
            )
          )
        ),

        // Step: Analyzing (Input locked, showing analysis)
        phase >= 4 && (step === 'analyzing' || step === 'guest_warning') && h('div', { className: "mt-16" },
          // Locked input field
          h('div', { className: "space-y-4 mb-6" },
            h('label', { className: "block text-cyan-500/80 text-xs md:text-sm tracking-wider" },
              '> WHAT IS YOUR MISSION TODAY?'
            ),
            h('div', { className: "flex items-center gap-4 border-b border-cyan-500/50 pb-2 opacity-60" },
              h('span', { className: "text-cyan-500" }, '['),
              h('input', {
                type: "text",
                value: subject,
                readOnly: true,
                className: "bg-transparent flex-1 outline-none text-white font-mono cursor-not-allowed"
              }),
              h('span', { className: "text-cyan-500" }, ']')
            )
          ),

          // Analysis response
          h(motion.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5 }
          },
            h('div', { className: "space-y-2 text-green-400" },
              h('div', null, analysisText1),
              h('div', null, analysisText2)
            )
          )
        ),

        // Step: Guest Warning (System Alert Box)
        phase >= 4 && step === 'guest_warning' && h(motion.div, {
          key: 'guest-warning',
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.5 }
        },
          h('div', { className: "mt-8 border-2 border-dashed border-orange-500/50 p-6 rounded-lg bg-orange-950/20" },
            // Warning header
            h('div', { className: "flex items-center gap-3 mb-4" },
              h('span', { className: "text-2xl animate-pulse" }, '⚠️'),
              h('span', { className: "text-orange-400 font-bold tracking-wider text-lg" }, 
                'UNREGISTERED SIGNATURE DETECTED'
              )
            ),
            
            // Warning details
            h('div', { className: "space-y-2 text-orange-400/80 text-sm" },
              h('div', { className: "flex items-center gap-2" },
                h('span', { className: "text-orange-500" }, '▸'),
                h('span', null, 'GUEST PROTOCOL ACTIVE: TIME LIMIT [30:00 MINS]')
              ),
              h('div', { className: "flex items-center gap-2" },
                h('span', { className: "text-orange-500" }, '▸'),
                h('span', null, 'ACCESS LEVEL: BRONZE (NO EXTENSIONS)')
              ),
              h('div', { className: "flex items-center gap-2 mt-4 text-orange-300/60 text-xs" },
                h('span', null, '⏰ SESSION WILL TERMINATE AUTOMATICALLY')
              )
            )
          ),

          // Neural Link Button
          h(motion.button, {
            initial: { opacity: 0, scale: 0.9 },
            animate: { 
              opacity: 1, 
              scale: [1, 1.02, 1],
              boxShadow: [
                '0 0 10px rgba(6,182,212,0.3)',
                '0 0 25px rgba(6,182,212,0.6)',
                '0 0 10px rgba(6,182,212,0.3)'
              ]
            },
            transition: { 
              opacity: { duration: 0.5, delay: 1 },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            },
            onClick: handleNeuralLink,
            className: "mt-8 w-full py-4 border-2 border-cyan-500 bg-cyan-500/10 hover:bg-cyan-500/30 text-cyan-400 font-bold text-lg tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] hover:scale-105 cursor-pointer"
          },
            h('span', { className: "inline-block" }, '[ INITIATE NEURAL LINK ]')
          )
        )
      )
    )
  );
}

// Mount the app
const root = createRoot(document.getElementById('root'));
root.render(h(IntroPage));
