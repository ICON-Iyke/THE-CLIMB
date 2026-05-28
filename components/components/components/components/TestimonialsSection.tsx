'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcus Thompson',
    role: 'CEO, Tech Startup',
    content: 'THE CLIMB transformed how I approach daily challenges. The discipline framework alone was worth everything.',
    image: '/avatar1.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'Olympic Athlete',
    content: 'Mental toughness is everything in my sport. THE CLIMB gave me the tools to push beyond my limits.',
    image: '/avatar2.jpg',
  },
  {
    name: 'David Rodriguez',
    role: 'Best-selling Author',
    content: 'This isn\'t just motivation—it\'s a complete system for building an unstoppable mindset.',
    image: '/avatar3.jpg',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-wider font-semibold">SUCCESS STORIES</span>
          <h2 className="heading-lg mt-4">
            What Our{' '}
            <span className="gradient-text">Community</span> Says
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glassmorphism p-8 md:p-12 text-center"
            >
              <Quote className="w-12 h-12 text-gold mx-auto mb-6" />
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                "{testimonials[current].content}"
              </p>
              <div>
                <p className="font-bold text-lg">{testimonials[current].name}</p>
                <p className="text-gold">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-gold/20 rounded-full p-2 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-gold/20 rounded-full p-2 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div
