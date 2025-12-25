import { createElement as h, useState } from 'https://esm.sh/react@19.2.3'
import { createRoot } from 'https://esm.sh/react-dom@19.2.3/client'
import { motion, AnimatePresence } from 'https://esm.sh/framer-motion@11.15.0'

function UplinkPage() {
  const [activeTab, setActiveTab] = useState('login') // 'login' or 'register'
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  // Login form state
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  
  // Register form state
  const [regUsername, setRegUsername] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login:', { username: loginUsername, password: '****' })
    // Mock login - redirect to intro page
    window.location.href = `/intro?user=${encodeURIComponent(loginUsername)}`
  }

  const handleRegister = (e) => {
    e.preventDefault()
    
    // Validation
    if (regPassword.length < 8) {
      alert('Password must be at least 8 characters')
      return
    }
    
    console.log('Register:', { username: regUsername, email: regEmail, password: '****' })
    
    // Show loading
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setShowSuccess(true)
    }, 2000)
  }

  const handleReturnHome = () => {
    window.location.href = '/'
  }

  // Success screen
  if (showSuccess) {
    return h('main', {
      className: 'relative h-screen w-full overflow-hidden bg-black text-white selection:bg-cyan-500 selection:text-black'
    },
      // Background
      h('div', {
        className: 'absolute inset-0 bg-cover bg-center',
        style: {
          backgroundImage: 'url(https://images.unsplash.com/photo-1681673818975-06e6af6ddb08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzcGFjZSUyMHVuaXZlcnNlfGVufDF8fHx8MTc2NjE1NjAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }
      }),
      
      // Gradient overlay
      h('div', {
        className: 'absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90'
      }),
      
      // Cyber grid
      h('div', {
        className: 'absolute inset-0 opacity-10',
        style: {
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.3) 75%, rgba(6, 182, 212, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.3) 75%, rgba(6, 182, 212, 0.3) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }
      }),
      
      // Success content
      h('div', { className: 'relative z-10 flex items-center justify-center h-full p-4' },
        h(motion.div, {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5 },
          className: 'bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8 max-w-md w-full text-center'
        },
          // Checkmark icon
          h('div', { className: 'mb-6 flex justify-center' },
            h('svg', {
              className: 'w-20 h-20 text-green-500',
              fill: 'none',
              stroke: 'currentColor',
              viewBox: '0 0 24 24'
            },
              h('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              })
            )
          ),
          
          // Success message
          h('p', { className: 'text-green-500 text-xl font-mono mb-2' }, '> VERIFICATION LINK SENT.'),
          h('p', { className: 'text-gray-400 text-sm font-mono mb-6' }, 
            'Please check your Email ID to activate your account.'
          ),
          
          // Return button
          h('button', {
            onClick: handleReturnHome,
            className: 'w-full bg-cyan-500/10 border-2 border-cyan-500 text-cyan-500 px-6 py-3 font-mono font-bold hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300'
          }, '[ RETURN TO HOME ]')
        )
      )
    )
  }

  // Loading screen
  if (isLoading) {
    return h('main', {
      className: 'relative h-screen w-full overflow-hidden bg-black text-white selection:bg-cyan-500 selection:text-black'
    },
      // Background
      h('div', {
        className: 'absolute inset-0 bg-cover bg-center',
        style: {
          backgroundImage: 'url(https://images.unsplash.com/photo-1681673818975-06e6af6ddb08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzcGFjZSUyMHVuaXZlcnNlfGVufDF8fHx8MTc2NjE1NjAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }
      }),
      
      // Gradient overlay
      h('div', {
        className: 'absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90'
      }),
      
      // Cyber grid
      h('div', {
        className: 'absolute inset-0 opacity-10',
        style: {
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.3) 75%, rgba(6, 182, 212, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.3) 75%, rgba(6, 182, 212, 0.3) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }
      }),
      
      // Loading content
      h('div', { className: 'relative z-10 flex items-center justify-center h-full' },
        h('div', { className: 'text-center' },
          h('div', { className: 'mb-4 flex justify-center' },
            h('div', {
              className: 'animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500'
            })
          ),
          h('p', { className: 'text-cyan-500 text-xl font-mono animate-pulse' }, 
            '> GENERATING STUDENT PROFILE...'
          )
        )
      )
    )
  }

  // Main auth screen
  return h('main', {
    className: 'relative h-screen w-full overflow-hidden bg-black text-white selection:bg-cyan-500 selection:text-black'
  },
    // Background
    h('div', {
      className: 'absolute inset-0 bg-cover bg-center',
      style: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1681673818975-06e6af6ddb08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzcGFjZSUyMHVuaXZlcnNlfGVufDF8fHx8MTc2NjE1NjAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
      }
    }),
    
    // Gradient overlay
    h('div', {
      className: 'absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90'
    }),
    
    // Cyber grid
    h('div', {
      className: 'absolute inset-0 opacity-10',
      style: {
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.3) 75%, rgba(6, 182, 212, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.3) 75%, rgba(6, 182, 212, 0.3) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }
    }),
    
    // Auth card
    h('div', { className: 'relative z-10 flex items-center justify-center h-full p-4' },
      h('div', { className: 'bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8 max-w-md w-full' },
        // TechBorder corners
        h('div', { className: 'absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500' }),
        h('div', { className: 'absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500' }),
        h('div', { className: 'absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500' }),
        h('div', { className: 'absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500' }),
        
        // Header
        h('h1', { className: 'text-2xl font-mono font-bold text-cyan-500 mb-6 text-center' }, 
          '// STUDENT GATEWAY'
        ),
        
        // Tab switcher
        h('div', { className: 'flex mb-6 border-b border-white/10' },
          // Login tab
          h('button', {
            onClick: () => setActiveTab('login'),
            className: `flex-1 py-3 font-mono font-bold transition-all duration-300 ${
              activeTab === 'login' 
                ? 'text-cyan-500 border-b-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' 
                : 'text-gray-500 hover:text-gray-300'
            }`
          }, '[ LOG IN ]'),
          
          // Register tab
          h('button', {
            onClick: () => setActiveTab('register'),
            className: `flex-1 py-3 font-mono font-bold transition-all duration-300 ${
              activeTab === 'register' 
                ? 'text-cyan-500 border-b-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' 
                : 'text-gray-500 hover:text-gray-300'
            }`
          }, '[ REGISTER ]')
        ),
        
        // Forms
        h(AnimatePresence, { mode: 'wait' },
          activeTab === 'login' ? 
            // Login Form
            h(motion.form, {
              key: 'login',
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: 20 },
              transition: { duration: 0.3 },
              onSubmit: handleLogin,
              className: 'space-y-6'
            },
              // Username
              h('div', {},
                h('label', { className: 'block text-sm font-mono text-gray-400 mb-2' }, 
                  '> Username'
                ),
                h('input', {
                  type: 'text',
                  value: loginUsername,
                  onChange: (e) => setLoginUsername(e.target.value),
                  required: true,
                  className: 'w-full bg-transparent border-b border-white/20 text-white font-mono px-2 py-2 focus:border-cyan-500 focus:outline-none transition-colors',
                  placeholder: 'raj_sharma'
                })
              ),
              
              // Password
              h('div', {},
                h('label', { className: 'block text-sm font-mono text-gray-400 mb-2' }, 
                  '> Password'
                ),
                h('input', {
                  type: 'password',
                  value: loginPassword,
                  onChange: (e) => setLoginPassword(e.target.value),
                  required: true,
                  className: 'w-full bg-transparent border-b border-white/20 text-white font-mono px-2 py-2 focus:border-cyan-500 focus:outline-none transition-colors'
                })
              ),
              
              // Submit button
              h('button', {
                type: 'submit',
                className: 'w-full bg-green-500/10 border-2 border-green-500 text-green-500 px-6 py-3 font-mono font-bold hover:bg-green-500/20 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300 mt-8'
              }, '[ ACCESS PORTAL ]')
            )
          :
            // Register Form
            h(motion.form, {
              key: 'register',
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              transition: { duration: 0.3 },
              onSubmit: handleRegister,
              className: 'space-y-6'
            },
              // Desired Username
              h('div', {},
                h('label', { className: 'block text-sm font-mono text-gray-400 mb-2' }, 
                  '> Desired Username'
                ),
                h('input', {
                  type: 'text',
                  value: regUsername,
                  onChange: (e) => setRegUsername(e.target.value),
                  required: true,
                  className: 'w-full bg-transparent border-b border-white/20 text-white font-mono px-2 py-2 focus:border-cyan-500 focus:outline-none transition-colors',
                  placeholder: 'raj_sharma'
                })
              ),
              
              // Email ID
              h('div', {},
                h('label', { className: 'block text-sm font-mono text-gray-400 mb-2' }, 
                  '> Email ID'
                ),
                h('input', {
                  type: 'email',
                  value: regEmail,
                  onChange: (e) => setRegEmail(e.target.value),
                  required: true,
                  className: 'w-full bg-transparent border-b border-white/20 text-white font-mono px-2 py-2 focus:border-cyan-500 focus:outline-none transition-colors',
                  placeholder: 'student@example.com'
                })
              ),
              
              // Password
              h('div', {},
                h('label', { className: 'block text-sm font-mono text-gray-400 mb-2' }, 
                  '> Password (min 8 chars)'
                ),
                h('input', {
                  type: 'password',
                  value: regPassword,
                  onChange: (e) => setRegPassword(e.target.value),
                  required: true,
                  minLength: 8,
                  className: 'w-full bg-transparent border-b border-white/20 text-white font-mono px-2 py-2 focus:border-cyan-500 focus:outline-none transition-colors'
                })
              ),
              
              // Submit button
              h('button', {
                type: 'submit',
                className: 'w-full bg-cyan-500/10 border-2 border-cyan-500 text-cyan-500 px-6 py-3 font-mono font-bold hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 mt-8'
              }, '[ CREATE ACCOUNT ]')
            )
        )
      )
    )
  )
}

// Mount
const root = createRoot(document.getElementById('root'))
root.render(h(UplinkPage))
