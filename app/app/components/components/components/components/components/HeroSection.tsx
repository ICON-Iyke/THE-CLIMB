'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play } from 'lucide-react'

const words = ['Greatness', 'Is', 'Earned.', 'Every', 'Day.']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-gold text-sm md:text-base tracking-widest font-semibold">
            THE CLIMB PRESENTS
          </span>
        </motion.div>

        <div className="mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`inline-block mx-2 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter ${
                word === 'Earned.' ? 'gradient-text' : 'text-white'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
        >
          THE CLIMB is for those who refuse average and choose discipline, growth, and legacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link href="/join" className="btn-primary hover:scale-105 transition-transform">
            Start Your Journey
          </Link>
          <Link href="/vision" className="btn-secondary flex items-center gap-2 justify-center">
            <Play size={20} />
            Watch The Vision
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gold rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
