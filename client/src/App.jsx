import { useState, useEffect } from 'react'
import './App.css'

// ============================================
// ICON COMPONENTS - Professional SVG Icons
// ============================================

const Icons = {
  // Navigation & UI Icons
  Menu: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  ChevronDown: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
  ArrowRight: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  ),
  Play: ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),

  // Feature Icons
  Cpu: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  Users: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  Lightbulb: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  BookOpen: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  ChartBar: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  Sparkles: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  Trophy: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m3.044 0a6.726 6.726 0 002.749-1.35m0 0a6.772 6.772 0 01-3.044 0" />
    </svg>
  ),
  Globe: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  Shield: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),

  // Social Icons
  Twitter: ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  GitHub: ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Discord: ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  ),
}

// ============================================
// CHESS PIECE COMPONENTS
// ============================================

const ChessPiece = ({ type, className }) => {
  const pieces = {
    king: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.5 11.63V6M20 8h5" strokeLinejoin="miter"/>
          <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="currentColor" fillOpacity="0.1" strokeLinecap="butt" strokeLinejoin="miter"/>
          <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="currentColor" fillOpacity="0.1"/>
          <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/>
        </g>
      </svg>
    ),
    queen: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/>
          <path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L6 14l3 12z" strokeLinecap="butt"/>
          <path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" strokeLinecap="butt"/>
          <path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none"/>
        </g>
      </svg>
    ),
    rook: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="currentColor" fillOpacity="0.1"/>
          <path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3" fill="currentColor" fillOpacity="0.1"/>
          <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z" fill="currentColor"/>
          <path d="M14.933 15.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z" fill="currentColor" stroke="currentColor"/>
        </g>
      </svg>
    ),
    bishop: (
      <svg viewBox="0 0 45 45" className={className}>
        <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <g fill="currentColor" fillOpacity="0.1" strokeLinecap="butt">
            <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/>
            <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/>
            <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/>
          </g>
          <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="currentColor" strokeLinejoin="miter"/>
        </g>
      </svg>
    ),
    pawn: (
      <svg viewBox="0 0 45 45" className={className}>
        <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  }
  return pieces[type] || null
}

// ============================================
// DECORATIVE COMPONENTS
// ============================================

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

const FloatingParticles = () => (
  <div className="particles">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-amber-500/30 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 5}s`,
        }}
      />
    ))}
  </div>
)

// ============================================
// FEATURE CARD COMPONENT
// ============================================

const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <div
    className="feature-card group opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
  >
    <div className="relative z-10">
      <div className="icon-container mx-auto mb-6">
        <Icon className="w-8 h-8 text-amber-400" />
      </div>
      <h3 className="font-heading text-xl text-amber-400 mb-3 text-center">{title}</h3>
      <p className="text-stone-400 text-center leading-relaxed text-sm">{description}</p>
    </div>
  </div>
)

// ============================================
// STEP CARD COMPONENT
// ============================================

const StepCard = ({ number, title, description, icon: Icon, index }) => (
  <div
    className="relative group opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-700/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-gradient-to-br from-stone-900/90 to-stone-950/90 rounded-2xl p-8 border border-amber-600/20 text-center h-full transition-all duration-500 group-hover:border-amber-500/40">
      <div className="step-indicator mx-auto mb-6 relative">
        <span className="relative z-10">{number}</span>
        <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping-slow opacity-0 group-hover:opacity-100" />
      </div>
      <div className="w-12 h-12 mx-auto mb-4 text-amber-500/60">
        <Icon className="w-full h-full" />
      </div>
      <h3 className="font-heading text-xl text-amber-400 mb-3">{title}</h3>
      <p className="text-stone-400 text-sm">{description}</p>
    </div>
  </div>
)

// ============================================
// STAT COMPONENT
// ============================================

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
)

// ============================================
// MAIN APP COMPONENT
// ============================================

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: Icons.Cpu,
      title: "AI Opponent",
      description: "Challenge our sophisticated AI powered by neural networks. Adaptive difficulty from beginner to grandmaster level."
    },
    {
      icon: Icons.Users,
      title: "Multiplayer",
      description: "Play with friends or match against opponents worldwide. Real-time games with seamless connectivity."
    },
    {
      icon: Icons.Lightbulb,
      title: "Smart Hints",
      description: "Get intelligent move suggestions powered by AI analysis. Learn optimal strategies as you play."
    },
    {
      icon: Icons.BookOpen,
      title: "Learn History",
      description: "Discover the rich 1500-year heritage of Chaturanga, the ancient game that shaped modern chess."
    },
    {
      icon: Icons.ChartBar,
      title: "Track Progress",
      description: "Detailed analytics and game history. Watch your rating climb as you master the art of strategy."
    },
    {
      icon: Icons.Sparkles,
      title: "Beautiful Design",
      description: "Immerse in authentic Indian aesthetics. Royal visuals inspired by ancient temples and palaces."
    },
  ]

  const steps = [
    {
      number: "1",
      title: "Choose Your Mode",
      description: "Single player against AI or multiplayer with friends worldwide",
      icon: Icons.Globe,
    },
    {
      number: "2",
      title: "Set Difficulty",
      description: "Select from beginner to grandmaster AI opponents",
      icon: Icons.Shield,
    },
    {
      number: "3",
      title: "Start Playing",
      description: "Make your move and begin your journey to mastery",
      icon: Icons.Trophy,
    },
  ]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 overflow-hidden">
      {/* Animated background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />
      <div className="fixed inset-0 bg-mandala-pattern opacity-30" />
      <div className="fixed inset-0 mesh-gradient" />
      <FloatingParticles />
      <div className="noise-overlay" />

      {/* Floating Mandalas */}
      <div className="fixed top-10 left-10 w-32 h-32 opacity-20 animate-spin-slow pointer-events-none">
        <Mandala size="128" />
      </div>
      <div className="fixed bottom-10 right-10 w-40 h-40 opacity-15 animate-spin-slower pointer-events-none" style={{ animationDirection: 'reverse' }}>
        <Mandala size="160" />
      </div>
      <div className="fixed top-1/3 right-20 w-24 h-24 opacity-10 animate-float-slow pointer-events-none hidden lg:block">
        <Mandala size="96" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-stone-950/95 backdrop-blur-lg shadow-gold/10 shadow-lg' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 relative text-amber-500 transition-transform duration-300 group-hover:scale-110">
                  <ChessPiece type="king" className="w-full h-full" />
                </div>
                <span className="font-display text-2xl gold-text-shine">
                  Chaturanga
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <a href="#features" className="nav-link">Features</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#play" className="nav-link">How to Play</a>
              </div>

              {/* CTA Button & Mobile Menu */}
              <div className="flex items-center gap-4">
                <button className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-heading font-semibold rounded-lg transition-all duration-300 hover:shadow-gold hover:scale-105 group">
                  <Icons.Play className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  Play Now
                </button>

                {/* Mobile menu button */}
                <button
                  className="md:hidden btn-icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <Icons.Close className="w-5 h-5" /> : <Icons.Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'}`}>
              <div className="flex flex-col gap-4 py-4 border-t border-amber-600/20">
                <a href="#features" className="nav-link py-2">Features</a>
                <a href="#about" className="nav-link py-2">About</a>
                <a href="#play" className="nav-link py-2">How to Play</a>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 font-heading font-semibold rounded-lg mt-2">
                  <Icons.Play className="w-4 h-4" />
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative pt-20">
          {/* Decorative elements */}
          <div className="absolute top-32 left-8 w-16 h-16 text-amber-500/20 animate-float hidden lg:block">
            <ChessPiece type="rook" className="w-full h-full" />
          </div>
          <div className="absolute top-40 right-12 w-14 h-14 text-amber-500/15 animate-float-delayed hidden lg:block">
            <ChessPiece type="bishop" className="w-full h-full" />
          </div>
          <div className="absolute bottom-32 left-16 w-12 h-12 text-amber-500/15 animate-float-slow hidden lg:block">
            <ChessPiece type="knight" className="w-full h-full" />
          </div>
          <div className="absolute bottom-40 right-20 w-16 h-16 text-amber-500/20 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
            <ChessPiece type="queen" className="w-full h-full" />
          </div>

          <div className="max-w-6xl mx-auto px-6 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-amber-400 text-sm font-medium">Now with Advanced AI</span>
            </div>

            {/* Sanskrit text */}
            <p className="font-sanskrit text-amber-500/80 text-lg mb-4 animate-fade-in tracking-wider animation-delay-100">
              चतुरङ्ग - The Ancient Game of Kings
            </p>

            {/* Main title */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 animate-fade-in-up animation-delay-200">
              <span className="gold-text-shine">
                Chaturanga
              </span>
            </h1>

            {/* Decorative divider with chess pieces */}
            <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in animation-delay-300">
              <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-500/50"/>
              <div className="flex gap-1 sm:gap-2 text-amber-500">
                <ChessPiece type="pawn" className="w-5 h-5 sm:w-6 sm:h-6 opacity-60" />
                <ChessPiece type="knight" className="w-5 h-5 sm:w-6 sm:h-6 opacity-80" />
                <ChessPiece type="king" className="w-6 h-6 sm:w-8 sm:h-8" />
                <ChessPiece type="knight" className="w-5 h-5 sm:w-6 sm:h-6 opacity-80" />
                <ChessPiece type="pawn" className="w-5 h-5 sm:w-6 sm:h-6 opacity-60" />
              </div>
              <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-500/50"/>
            </div>

            {/* Subtitle */}
            <p className="font-body text-lg sm:text-xl md:text-2xl text-stone-300 mb-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Experience the ancient Indian art of chess, reimagined with
              <span className="text-amber-400 font-semibold"> Artificial Intelligence</span>
            </p>
            <p className="font-body text-stone-500 mb-12 animate-fade-in-up animation-delay-500">
              Where tradition meets innovation. Challenge the AI or play with friends.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-stone-950 font-heading font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-gold-lg hover:scale-105 w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Icons.Play className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  Start Playing
                  <Icons.ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </button>
              <button className="group px-10 py-4 border-2 border-amber-600/50 text-amber-400 font-heading font-semibold text-lg rounded-xl hover:bg-amber-600/10 hover:border-amber-500 transition-all duration-300 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2">
                <Icons.Cpu className="w-5 h-5" />
                Challenge AI
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-16 animate-fade-in-up animation-delay-700">
              <StatItem value="1500+" label="Years of Heritage" />
              <div className="hidden sm:block h-12 w-px bg-amber-600/30"/>
              <StatItem value="AI" label="Powered Engine" />
              <div className="hidden sm:block h-12 w-px bg-amber-600/30"/>
              <StatItem value="100%" label="Free to Play" />
            </div>
          </div>

        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent"/>
          <div className="max-w-7xl mx-auto px-6 relative">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="section-subtitle">विशेषताएं</p>
              <h2 className="section-title">
                Divine <span className="text-amber-400">Features</span>
              </h2>
              <div className="divider-ornament mt-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full"/>
              </div>
              <p className="text-stone-400 mt-6 max-w-2xl mx-auto">
                Experience chess like never before with features designed for both beginners and masters
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 sm:py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Chess Board Visual */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-amber-600/10 to-amber-500/20 rounded-3xl blur-2xl"/>
                <div className="relative bg-gradient-to-br from-stone-900 to-stone-950 rounded-2xl p-6 sm:p-8 border border-amber-600/20 shadow-gold">
                  {/* Mini chess board */}
                  <div className="grid grid-cols-8 gap-0 aspect-square rounded-lg overflow-hidden">
                    {[...Array(64)].map((_, i) => {
                      const row = Math.floor(i / 8)
                      const col = i % 8
                      const isLight = (row + col) % 2 === 0
                      return (
                        <div
                          key={i}
                          className={`aspect-square transition-colors duration-300 ${
                            isLight
                              ? 'bg-gradient-to-br from-amber-200 to-amber-300 hover:from-amber-300 hover:to-amber-400'
                              : 'bg-gradient-to-br from-stone-700 to-stone-800 hover:from-stone-600 hover:to-stone-700'
                          }`}
                        />
                      )
                    })}
                  </div>
                  {/* Decorative pieces */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 text-amber-500 animate-float">
                    <ChessPiece type="king" className="w-full h-full drop-shadow-gold" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 text-amber-500 animate-float" style={{ animationDelay: '1s' }}>
                    <ChessPiece type="queen" className="w-full h-full drop-shadow-gold" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <p className="section-subtitle">इतिहास</p>
                <h2 className="section-title">
                  The <span className="text-amber-400">Ancient</span> Legacy
                </h2>
                <div className="space-y-4 text-stone-400 font-body leading-relaxed mt-6">
                  <p>
                    <span className="text-amber-400 font-semibold">Chaturanga</span>, meaning "four divisions of the military"
                    in Sanskrit, is the ancient Indian game that gave birth to modern chess. Originating in the
                    <span className="text-amber-300"> Gupta Empire</span> around the 6th century CE, it was played by
                    kings and scholars alike.
                  </p>
                  <p>
                    The four divisions represent the <span className="text-amber-300">infantry</span>,
                    <span className="text-amber-300"> cavalry</span>, <span className="text-amber-300">elephants</span>,
                    and <span className="text-amber-300">chariots</span> — the essential components of ancient Indian
                    warfare that evolved into the pawns, knights, bishops, and rooks we know today.
                  </p>
                  <p>
                    Our AI-powered version honors this magnificent heritage while bringing the game into the modern era,
                    allowing you to experience the wisdom of ancient India through cutting-edge technology.
                  </p>
                </div>

                {/* Stats row */}
                <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
                  <StatItem value="1500+" label="Years of History" />
                  <div className="h-12 w-px bg-amber-600/30 hidden sm:block"/>
                  <StatItem value="4" label="Military Divisions" />
                  <div className="h-12 w-px bg-amber-600/30 hidden sm:block"/>
                  <StatItem value="64" label="Sacred Squares" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Play Section */}
        <section id="play" className="py-24 sm:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-maroon-950/10 to-transparent"/>
          <div className="max-w-7xl mx-auto px-6 relative">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="section-subtitle">खेलने का तरीका</p>
              <h2 className="section-title">
                How to <span className="text-amber-400">Play</span>
              </h2>
              <div className="divider-ornament mt-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full"/>
              </div>
              <p className="text-stone-400 mt-6 max-w-2xl mx-auto">
                Get started in three simple steps and begin your journey to becoming a Chaturanga master
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <StepCard key={index} {...step} index={index} />
              ))}
            </div>

            {/* Connection lines (desktop only) */}
            <div className="hidden lg:flex justify-center mt-8">
              <div className="flex items-center gap-4 text-amber-500/30">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"/>
                <Icons.ArrowRight className="w-5 h-5" />
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"/>
                <Icons.ArrowRight className="w-5 h-5" />
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"/>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 relative">
          <div className="absolute inset-0 bg-gradient-radial from-amber-900/20 via-transparent to-transparent"/>
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <Mandala className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none" size="500" />
            <div className="relative">
              <p className="font-sanskrit text-amber-500/70 text-xl mb-4">आइए खेलें</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6">
                <span className="gold-text-shine">
                  Ready to Begin?
                </span>
              </h2>
              <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto font-body">
                Embrace the wisdom of ancient India. Challenge your mind. Master the royal game.
                Join thousands of players worldwide.
              </p>
              <button className="group relative px-12 py-5 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-stone-950 font-heading font-bold text-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-gold-xl hover:scale-105 animate-glow-pulse">
                <span className="relative z-10 flex items-center gap-3">
                  <Icons.Play className="w-6 h-6" />
                  Begin Your Journey
                  <Icons.ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </button>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-stone-500 text-sm">
                <div className="flex items-center gap-2">
                  <Icons.Shield className="w-4 h-4 text-amber-500/60" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.Globe className="w-4 h-4 text-amber-500/60" />
                  <span>Play Worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.Trophy className="w-4 h-4 text-amber-500/60" />
                  <span>Competitive Rankings</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-amber-600/20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Brand */}
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 text-amber-500">
                    <ChessPiece type="king" className="w-full h-full" />
                  </div>
                  <span className="font-display text-xl gold-text">
                    Chaturanga
                  </span>
                </div>
                <p className="text-stone-500 text-sm mb-4">
                  The ancient game of kings, reimagined for the modern world with AI-powered gameplay.
                </p>
                {/* Social icons */}
                <div className="flex gap-3">
                  <a href="#" className="btn-icon w-10 h-10">
                    <Icons.Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="btn-icon w-10 h-10">
                    <Icons.GitHub className="w-4 h-4" />
                  </a>
                  <a href="#" className="btn-icon w-10 h-10">
                    <Icons.Discord className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-heading text-amber-400 mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-stone-500 hover:text-amber-400 transition-colors text-sm">Play Now</a></li>
                  <li><a href="#features" className="text-stone-500 hover:text-amber-400 transition-colors text-sm">Features</a></li>
                  <li><a href="#about" className="text-stone-500 hover:text-amber-400 transition-colors text-sm">About</a></li>
                  <li><a href="#play" className="text-stone-500 hover:text-amber-400 transition-colors text-sm">How to Play</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-heading text-amber-400 mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-stone-500 hover:text-amber-400 transition-colors text-sm">Documentation</a></li>
                  <li><a href="#" className="text-stone-500 hover:text-amber-400 transition-colors text-sm">API</a></li>
                  <li><a href="#" className="text-stone-500 hover:text-amber-400 transition-colors text-sm">Blog</a></li>
                  <li><a href="#" className="text-stone-500 hover:text-amber-400 transition-colors text-sm">Support</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-heading text-amber-400 mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-stone-500 hover:text-amber-400 transition-colors text-sm">Privacy Policy</a></li>
                  <li><a href="#" className="text-stone-500 hover:text-amber-400 transition-colors text-sm">Terms of Service</a></li>
                  <li><a href="#" className="text-stone-500 hover:text-amber-400 transition-colors text-sm">Cookie Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 border-t border-amber-600/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-stone-600 text-sm">
                &copy; {new Date().getFullYear()} Chaturanga. All rights reserved.
              </p>
              <p className="font-sanskrit text-amber-500/40 text-sm">
                शतरंज का राजा - The King of Chess
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
