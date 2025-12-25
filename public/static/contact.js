import { createElement as h, useState } from 'https://esm.sh/react@19.2.3'
import { createRoot } from 'https://esm.sh/react-dom@19.2.3/client'
import { motion } from 'https://esm.sh/framer-motion@11.15.0'

// Custom SVG Icons
const ChevronLeftIcon = () => h('svg', {
  className: 'w-5 h-5',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  strokeWidth: '2'
},
  h('path', { d: 'M15 18l-6-6 6-6', strokeLinecap: 'round', strokeLinejoin: 'round' })
)

const WhatsAppIcon = () => h('svg', {
  className: 'w-8 h-8',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  strokeWidth: '1.5'
},
  h('path', { d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z', strokeLinecap: 'round', strokeLinejoin: 'round' })
)

const InstagramIcon = () => h('svg', {
  className: 'w-8 h-8',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  strokeWidth: '1.5'
},
  h('rect', { x: '4', y: '4', width: '16', height: '16', rx: '4' }),
  h('circle', { cx: '12', cy: '12', r: '3' }),
  h('circle', { cx: '17.5', cy: '6.5', r: '0.5', fill: 'currentColor' })
)

const EmailIcon = () => h('svg', {
  className: 'w-8 h-8',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  strokeWidth: '1.5'
},
  h('rect', { x: '3', y: '5', width: '18', height: '14', rx: '2' }),
  h('path', { d: 'M3 7l9 6 9-6', strokeLinecap: 'round', strokeLinejoin: 'round' })
)

const PhoneIcon = () => h('svg', {
  className: 'w-8 h-8',
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  strokeWidth: '1.5'
},
  h('path', { d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', strokeLinecap: 'round', strokeLinejoin: 'round' })
)

function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [context, setContext] = useState('Account Issue')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [ticketId, setTicketId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Contact Form:', { name, email, context, message })
    
    // Generate random ticket ID
    const randomTicket = Math.floor(1000 + Math.random() * 9000)
    setTicketId(randomTicket)
    
    // Show loading
    setIsLoading(true)
    
    // Simulate encryption
    setTimeout(() => {
      setIsLoading(false)
      setShowSuccess(true)
    }, 2000)
  }

  const handleBackHome = () => {
    window.location.href = '/'
  }

  const handleReset = () => {
    setShowSuccess(false)
    setName('')
    setEmail('')
    setContext('Account Issue')
    setMessage('')
    setTicketId('')
  }

  // Direct Uplink Card Component
  const UplinkCard = ({ icon, label, subtext, borderColor, index }) => {
    return h(motion.div, {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.1 },
      whileHover: { x: 10 },
      className: `bg-black/40 backdrop-blur-md border-2 ${borderColor} rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`
    },
      h('div', { className: 'flex items-center gap-4 mb-3' },
        h('div', { className: `${borderColor.replace('border-', 'text-')}` }, icon),
        h('div', {},
          h('h3', { className: 'font-mono font-bold text-white text-lg' }, label),
          h('p', { className: `font-mono text-xs ${borderColor.replace('border-', 'text-')}` }, subtext)
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
          className: 'text-5xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 mb-4'
        }, '// MISSION CONTROL'),
        h(motion.p, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.3 },
          className: 'text-gray-400 font-mono'
        }, '> SECURE TRANSMISSION LINK <')
      ),
      
      // 2-Column Layout
      h('div', { className: 'max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8' },
        // LEFT COLUMN: Direct Uplinks
        h('div', { className: 'space-y-6' },
          h('div', { className: 'bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6' },
            h('h2', { className: 'text-2xl font-mono font-bold text-cyan-500 mb-6' }, '> DIRECT CHANNELS'),
            
            h('div', { className: 'space-y-4' },
              // WhatsApp
              h(UplinkCard, {
                icon: h(WhatsAppIcon),
                label: 'PRIORITY CHAT',
                subtext: 'Avg Reply: 5 mins',
                borderColor: 'border-green-500',
                index: 0
              }),
              
              // Instagram
              h(UplinkCard, {
                icon: h(InstagramIcon),
                label: 'COMMUNITY',
                subtext: 'Follow Updates',
                borderColor: 'border-pink-500',
                index: 1
              }),
              
              // Email
              h(UplinkCard, {
                icon: h(EmailIcon),
                label: 'OFFICIAL LOGS',
                subtext: 'support@dhirise.com',
                borderColor: 'border-cyan-500',
                index: 2
              }),
              
              // Call
              h(UplinkCard, {
                icon: h(PhoneIcon),
                label: 'EMERGENCY',
                subtext: '+91-98765-XXXX',
                borderColor: 'border-orange-500',
                index: 3
              })
            )
          )
        ),
        
        // RIGHT COLUMN: Encrypted Transmission Form
        h('div', { className: 'space-y-6' },
          h('div', { className: 'bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6' },
            h('h2', { className: 'text-2xl font-mono font-bold text-cyan-500 mb-4' }, '> SUBMIT QUERY LOG'),
            
            // Trust Indicator
            h('div', { className: 'flex items-center gap-2 mb-6 pb-4 border-b border-white/10' },
              h('div', { className: 'w-2 h-2 rounded-full bg-emerald-400 animate-pulse' }),
              h('p', { className: 'text-emerald-400 font-mono text-xs tracking-widest' }, 
                'HUMAN OPERATIVES ACTIVE. ESTIMATED REPLY: 24-48 HOURS.'
              )
            ),
            
            // Success Screen
            showSuccess ? h('div', { className: 'text-center py-12' },
              h(motion.div, {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.5 }
              },
                // Success Icon
                h('div', { className: 'mb-6 flex justify-center' },
                  h('svg', {
                    className: 'w-20 h-20 text-emerald-500',
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
                
                h('p', { className: 'text-emerald-500 text-xl font-mono mb-2' }, `> TRANSMISSION RECEIVED. TICKET #${ticketId}.`),
                h('p', { className: 'text-gray-400 font-mono text-sm mb-8' }, 
                  'Stand by, Operative. We are reviewing your log personally.'
                ),
                
                h('button', {
                  onClick: handleReset,
                  className: 'bg-cyan-500/10 border-2 border-cyan-500 text-cyan-500 px-8 py-3 font-mono font-bold hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300'
                }, '[ SUBMIT ANOTHER ]')
              )
            )
            // Loading Screen
            : isLoading ? h('div', { className: 'text-center py-12' },
              h('div', { className: 'mb-4 flex justify-center' },
                h('div', {
                  className: 'animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500'
                })
              ),
              h('p', { className: 'text-cyan-500 text-xl font-mono animate-pulse' }, 
                '> ENCRYPTING DATA PACKETS...'
              )
            )
            // Form
            : h('form', {
              onSubmit: handleSubmit,
              className: 'space-y-6'
            },
              // Operative Name
              h('div', {},
                h('label', { className: 'block text-sm font-mono text-gray-400 mb-2' }, 
                  '> Operative Name'
                ),
                h('input', {
                  type: 'text',
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  required: true,
                  className: 'w-full bg-transparent border-b border-white/20 text-white font-mono px-2 py-2 focus:border-cyan-500 focus:outline-none transition-colors',
                  placeholder: 'Raj Sharma'
                })
              ),
              
              // Comms ID (Email)
              h('div', {},
                h('label', { className: 'block text-sm font-mono text-gray-400 mb-2' }, 
                  '> Comms ID'
                ),
                h('input', {
                  type: 'email',
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  required: true,
                  className: 'w-full bg-transparent border-b border-white/20 text-white font-mono px-2 py-2 focus:border-cyan-500 focus:outline-none transition-colors',
                  placeholder: 'operative@dhirise.com'
                })
              ),
              
              // Mission Context
              h('div', {},
                h('label', { className: 'block text-sm font-mono text-gray-400 mb-2' }, 
                  '> Mission Context'
                ),
                h('select', {
                  value: context,
                  onChange: (e) => setContext(e.target.value),
                  required: true,
                  className: 'w-full bg-black/50 border border-white/20 text-white font-mono px-2 py-3 focus:border-cyan-500 focus:outline-none transition-colors rounded'
                },
                  h('option', { value: 'Account Issue' }, 'Account Issue'),
                  h('option', { value: 'Bug Report' }, 'Bug Report'),
                  h('option', { value: 'Feature Request' }, 'Feature Request'),
                  h('option', { value: 'Technical Support' }, 'Technical Support'),
                  h('option', { value: 'Other' }, 'Other')
                )
              ),
              
              // Transmission Data (Message)
              h('div', {},
                h('label', { className: 'block text-sm font-mono text-gray-400 mb-2' }, 
                  '> Transmission Data'
                ),
                h('textarea', {
                  value: message,
                  onChange: (e) => setMessage(e.target.value),
                  required: true,
                  rows: 6,
                  className: 'w-full bg-black/50 border border-white/20 text-white font-mono px-4 py-3 focus:border-cyan-500 focus:outline-none transition-colors rounded resize-none',
                  placeholder: 'Describe your issue or request in detail...'
                })
              ),
              
              // Submit Button
              h('button', {
                type: 'submit',
                className: 'w-full bg-cyan-500/10 border-2 border-cyan-500 text-cyan-500 px-6 py-4 font-mono font-bold text-lg hover:bg-cyan-500/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 mt-8'
              }, '[ TRANSMIT DATA ]')
            )
          )
        )
      )
    )
  )
}

// Mount
const root = createRoot(document.getElementById('root'))
root.render(h(ContactPage))
