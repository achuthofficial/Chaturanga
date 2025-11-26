import './App.css'

// Chess piece SVG components
const ChessPiece = ({ type, className }) => {
  const pieces = {
    king: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="none" fillRule="evenodd" stroke="#d4a574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.5 11.63V6M20 8h5" strokeLinejoin="miter"/>
          <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#1a0a0a" strokeLinecap="butt" strokeLinejoin="miter"/>
          <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#1a0a0a"/>
          <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/>
        </g>
      </svg>
    ),
    queen: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="#1a0a0a" stroke="#d4a574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/>
          <path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L6 14l3 12z" strokeLinecap="butt"/>
          <path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" strokeLinecap="butt"/>
          <path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none"/>
        </g>
      </svg>
    ),
    rook: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="#1a0a0a" stroke="#d4a574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" strokeLinecap="butt"/>
          <path d="M34 14l-3 3H14l-3-3"/>
          <path d="M31 17v12.5H14V17" strokeLinecap="butt" strokeLinejoin="miter"/>
          <path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/>
          <path d="M11 14h23" fill="none" strokeLinejoin="miter"/>
        </g>
      </svg>
    ),
    knight: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="none" stroke="#d4a574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#1a0a0a"/>
          <path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3" fill="#1a0a0a"/>
          <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z" fill="#d4a574"/>
          <path d="M14.933 15.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z" fill="#d4a574" stroke="#d4a574"/>
        </g>
      </svg>
    ),
    bishop: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="none" stroke="#d4a574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <g fill="#1a0a0a" strokeLinecap="butt">
            <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/>
            <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/>
            <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/>
          </g>
          <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="#d4a574" strokeLinejoin="miter"/>
        </g>
      </svg>
    ),
    pawn: (
      <svg viewBox="0 0 45 45" className={className}>
        <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#1a0a0a" stroke="#d4a574" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  }
  return pieces[type] || null
}

// Decorative Mandala component
const Mandala = ({ className, size = "200" }) => (
  <svg viewBox="0 0 200 200" className={className} width={size} height={size}>
    <defs>
      <linearGradient id="mandalaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6"/>
        <stop offset="50%" stopColor="#d97706" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#92400e" stopOpacity="0.6"/>
      </linearGradient>
    </defs>
    <g fill="none" stroke="url(#mandalaGradient)" strokeWidth="0.5">
      {[...Array(12)].map((_, i) => (
        <g key={i} transform={`rotate(${i * 30} 100 100)`}>
          <path d="M100 20 Q120 50 100 80 Q80 50 100 20" />
          <circle cx="100" cy="35" r="8" />
          <path d="M100 80 L110 100 L100 120 L90 100 Z" />
        </g>
      ))}
      <circle cx="100" cy="100" r="15" strokeWidth="1"/>
      <circle cx="100" cy="100" r="30" />
      <circle cx="100" cy="100" r="50" />
      <circle cx="100" cy="100" r="70" />
      <circle cx="100" cy="100" r="90" />
    </g>
  </svg>
)

// Decorative corner ornament
const CornerOrnament = ({ className, flip = false }) => (
  <svg viewBox="0 0 100 100" className={className} style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
    <defs>
      <linearGradient id="ornamentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b"/>
        <stop offset="100%" stopColor="#d97706"/>
      </linearGradient>
    </defs>
    <g fill="none" stroke="url(#ornamentGradient)" strokeWidth="1.5">
      <path d="M0 100 Q0 50 50 50 Q50 0 100 0" />
      <path d="M0 80 Q20 60 40 60 Q40 40 60 20" />
      <circle cx="50" cy="50" r="5" fill="url(#ornamentGradient)"/>
      <circle cx="25" cy="75" r="3" fill="url(#ornamentGradient)"/>
      <circle cx="75" cy="25" r="3" fill="url(#ornamentGradient)"/>
    </g>
  </svg>
)

// Feature card component
const FeatureCard = ({ icon, title, description, delay }) => (
  <div
    className="group relative bg-gradient-to-br from-stone-900/80 to-stone-950/90 backdrop-blur-sm border border-gold-600/20 rounded-2xl p-8 hover:border-gold-500/50 transition-all duration-500 hover:shadow-gold hover:-translate-y-2"
    style={{ animationDelay: delay }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
    <div className="relative z-10">
      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gold-500/20 to-gold-700/20 rounded-xl flex items-center justify-center border border-gold-600/30 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-heading text-xl text-gold-400 mb-3 text-center">{title}</h3>
      <p className="text-stone-400 text-center leading-relaxed">{description}</p>
    </div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950"/>
      <div className="fixed inset-0 bg-mandala-pattern opacity-30"/>
      <div className="fixed inset-0 bg-gradient-radial from-gold-900/10 via-transparent to-transparent"/>

      {/* Floating decorative elements */}
      <div className="fixed top-10 left-10 w-32 h-32 opacity-20 animate-spin-slow">
        <Mandala size="128" />
      </div>
      <div className="fixed bottom-10 right-10 w-40 h-40 opacity-15 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
        <Mandala size="160" />
      </div>
      <div className="fixed top-1/4 right-20 w-24 h-24 opacity-10 animate-float">
        <Mandala size="96" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-gold-600/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <ChessPiece type="king" className="w-full h-full" />
              </div>
              <span className="font-display text-2xl bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
                Chaturanga
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-stone-400 hover:text-gold-400 transition-colors font-body">Features</a>
              <a href="#about" className="text-stone-400 hover:text-gold-400 transition-colors font-body">About</a>
              <a href="#play" className="text-stone-400 hover:text-gold-400 transition-colors font-body">How to Play</a>
            </div>
            <button className="px-6 py-2.5 bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-500 hover:to-gold-600 text-stone-950 font-heading font-semibold rounded-lg transition-all duration-300 hover:shadow-gold hover:scale-105">
              Play Now
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative pt-20">
          {/* Corner ornaments */}
          <div className="absolute top-24 left-8 w-24 h-24 opacity-40">
            <CornerOrnament />
          </div>
          <div className="absolute top-24 right-8 w-24 h-24 opacity-40">
            <CornerOrnament flip />
          </div>
          <div className="absolute bottom-8 left-8 w-24 h-24 opacity-40 rotate-180">
            <CornerOrnament flip />
          </div>
          <div className="absolute bottom-8 right-8 w-24 h-24 opacity-40 rotate-180">
            <CornerOrnament />
          </div>

          <div className="max-w-6xl mx-auto px-6 text-center">
            {/* Sanskrit text */}
            <p className="font-sanskrit text-gold-500/80 text-lg mb-4 animate-fade-in tracking-wider">
              चतुरङ्ग - The Ancient Game of Kings
            </p>

            {/* Main title */}
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent drop-shadow-lg">
                Chaturanga
              </span>
            </h1>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500/50"/>
              <div className="flex gap-2">
                <ChessPiece type="pawn" className="w-6 h-6 opacity-60" />
                <ChessPiece type="knight" className="w-6 h-6 opacity-80" />
                <ChessPiece type="king" className="w-8 h-8" />
                <ChessPiece type="knight" className="w-6 h-6 opacity-80" />
                <ChessPiece type="pawn" className="w-6 h-6 opacity-60" />
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500/50"/>
            </div>

            {/* Subtitle */}
            <p className="font-body text-xl md:text-2xl text-stone-300 mb-4 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Experience the ancient Indian art of chess, reimagined with
              <span className="text-gold-400 font-semibold"> Artificial Intelligence</span>
            </p>
            <p className="font-body text-stone-500 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Where tradition meets innovation. Challenge the AI or play with friends.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <button className="group relative px-10 py-4 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 text-stone-950 font-heading font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-gold-lg hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Start Playing
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </button>
              <button className="px-10 py-4 border-2 border-gold-600/50 text-gold-400 font-heading font-semibold text-lg rounded-xl hover:bg-gold-600/10 hover:border-gold-500 transition-all duration-300 hover:scale-105">
                Challenge AI
              </button>
            </div>

            {/* Floating chess pieces */}
            <div className="relative mt-16 h-32">
              <div className="absolute left-1/4 animate-float" style={{ animationDelay: '0s' }}>
                <ChessPiece type="rook" className="w-12 h-12 opacity-40" />
              </div>
              <div className="absolute left-1/3 top-8 animate-float" style={{ animationDelay: '1s' }}>
                <ChessPiece type="bishop" className="w-10 h-10 opacity-30" />
              </div>
              <div className="absolute right-1/3 animate-float" style={{ animationDelay: '2s' }}>
                <ChessPiece type="queen" className="w-14 h-14 opacity-50" />
              </div>
              <div className="absolute right-1/4 top-10 animate-float" style={{ animationDelay: '1.5s' }}>
                <ChessPiece type="knight" className="w-10 h-10 opacity-35" />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <div className="flex flex-col items-center gap-2 text-gold-500/60">
              <span className="text-sm font-body">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-900/5 to-transparent"/>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-16">
              <p className="font-sanskrit text-gold-500/70 text-lg mb-2">विशेषताएं</p>
              <h2 className="font-heading text-4xl md:text-5xl text-stone-100 mb-4">
                Divine <span className="text-gold-400">Features</span>
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/50"/>
                <div className="w-2 h-2 bg-gold-500 rounded-full"/>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/50"/>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title="AI Opponent"
                description="Challenge our sophisticated AI powered by advanced algorithms. Multiple difficulty levels from beginner to grandmaster."
                delay="0s"
              />
              <FeatureCard
                icon={
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                }
                title="Multiplayer"
                description="Play with friends or challenge opponents from around the world. Real-time matches with seamless connectivity."
                delay="0.1s"
              />
              <FeatureCard
                icon={
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                }
                title="Smart Hints"
                description="Stuck on a move? Get intelligent suggestions powered by AI analysis. Learn and improve with every game."
                delay="0.2s"
              />
              <FeatureCard
                icon={
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                }
                title="Learn History"
                description="Discover the rich heritage of Chaturanga, the ancient Indian predecessor to modern chess dating back 1500 years."
                delay="0.3s"
              />
              <FeatureCard
                icon={
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
                title="Track Progress"
                description="Detailed statistics and game history. Watch your rating grow as you master the ancient art of Chaturanga."
                delay="0.4s"
              />
              <FeatureCard
                icon={
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                }
                title="Beautiful Design"
                description="Immerse yourself in authentic Indian aesthetics. Stunning visuals inspired by ancient royal courts and temples."
                delay="0.5s"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Chess Board Visual */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 via-gold-600/10 to-gold-500/20 rounded-3xl blur-2xl"/>
                <div className="relative bg-gradient-to-br from-stone-900 to-stone-950 rounded-2xl p-8 border border-gold-600/20">
                  {/* Mini chess board */}
                  <div className="grid grid-cols-8 gap-0 aspect-square rounded-lg overflow-hidden shadow-gold">
                    {[...Array(64)].map((_, i) => {
                      const row = Math.floor(i / 8)
                      const col = i % 8
                      const isLight = (row + col) % 2 === 0
                      return (
                        <div
                          key={i}
                          className={`aspect-square ${
                            isLight
                              ? 'bg-gradient-to-br from-gold-200 to-gold-300'
                              : 'bg-gradient-to-br from-stone-700 to-stone-800'
                          }`}
                        />
                      )
                    })}
                  </div>
                  {/* Decorative pieces around the board */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 animate-float">
                    <ChessPiece type="king" className="w-full h-full" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 animate-float" style={{ animationDelay: '1s' }}>
                    <ChessPiece type="queen" className="w-full h-full" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="font-sanskrit text-gold-500/70 text-lg mb-2">इतिहास</p>
                <h2 className="font-heading text-4xl md:text-5xl text-stone-100 mb-6">
                  The <span className="text-gold-400">Ancient</span> Legacy
                </h2>
                <div className="space-y-4 text-stone-400 font-body leading-relaxed">
                  <p>
                    <span className="text-gold-400 font-semibold">Chaturanga</span>, meaning "four divisions of the military"
                    in Sanskrit, is the ancient Indian game that gave birth to modern chess. Originating in the
                    <span className="text-gold-300"> Gupta Empire</span> around the 6th century CE, it was played by
                    kings and scholars alike.
                  </p>
                  <p>
                    The four divisions represent the <span className="text-gold-300">infantry</span>,
                    <span className="text-gold-300"> cavalry</span>, <span className="text-gold-300">elephants</span>,
                    and <span className="text-gold-300">chariots</span> — the essential components of ancient Indian
                    warfare that evolved into the pawns, knights, bishops, and rooks we know today.
                  </p>
                  <p>
                    Our AI-powered version honors this magnificent heritage while bringing the game into the modern era,
                    allowing you to experience the wisdom of ancient India through cutting-edge technology.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <div className="text-center">
                    <div className="font-display text-3xl text-gold-400">1500+</div>
                    <div className="text-stone-500 text-sm">Years of History</div>
                  </div>
                  <div className="h-12 w-px bg-gold-600/30"/>
                  <div className="text-center">
                    <div className="font-display text-3xl text-gold-400">AI</div>
                    <div className="text-stone-500 text-sm">Powered Engine</div>
                  </div>
                  <div className="h-12 w-px bg-gold-600/30"/>
                  <div className="text-center">
                    <div className="font-display text-3xl text-gold-400">100%</div>
                    <div className="text-stone-500 text-sm">Authentic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Play Section */}
        <section id="play" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-maroon-950/20 to-transparent"/>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-16">
              <p className="font-sanskrit text-gold-500/70 text-lg mb-2">खेलने का तरीका</p>
              <h2 className="font-heading text-4xl md:text-5xl text-stone-100 mb-4">
                How to <span className="text-gold-400">Play</span>
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/50"/>
                <div className="w-2 h-2 bg-gold-500 rounded-full"/>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/50"/>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Choose Your Mode', desc: 'Select single player to challenge AI or multiplayer to play with friends' },
                { step: '2', title: 'Set Difficulty', desc: 'Pick from beginner to grandmaster level AI opponents' },
                { step: '3', title: 'Make Your Move', desc: 'Click to select a piece, then click the destination square' },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/20 to-gold-700/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                  <div className="relative bg-gradient-to-br from-stone-900/90 to-stone-950/90 rounded-2xl p-8 border border-gold-600/20 text-center h-full">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-stone-950 font-display text-2xl font-bold shadow-gold">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-xl text-gold-400 mb-3">{item.title}</h3>
                    <p className="text-stone-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-radial from-gold-900/20 via-transparent to-transparent"/>
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <Mandala className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" size="400" />
            <div className="relative">
              <p className="font-sanskrit text-gold-500/70 text-xl mb-4">आइए खेलें</p>
              <h2 className="font-display text-4xl md:text-6xl mb-6">
                <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                  Ready to Begin?
                </span>
              </h2>
              <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto font-body">
                Embrace the wisdom of ancient India. Challenge your mind. Master the royal game.
              </p>
              <button className="group relative px-12 py-5 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 text-stone-950 font-heading font-bold text-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-gold-lg hover:scale-105 animate-glow">
                <span className="relative z-10">Begin Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gold-600/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <ChessPiece type="king" className="w-full h-full" />
                </div>
                <span className="font-display text-xl bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                  Chaturanga
                </span>
              </div>
              <p className="text-stone-500 text-sm font-body">
                The ancient game of kings, reimagined for the modern world
              </p>
              <div className="flex items-center gap-4">
                <span className="font-sanskrit text-gold-500/60 text-sm">शतरंज का राजा</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
