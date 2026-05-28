'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    title: 'The Mindset Mastery',
    description: 'Rewrite your mental programming and develop an unbreakable mindset.',
    level: 'Beginner to Advanced',
    duration: '8 Weeks',
    color: 'from-gold/20 to-transparent',
  },
  {
    title: 'The Discipline Code',
    description: 'Master the art of consistent action and habit formation.',
    level: 'All Levels',
    duration: '12 Weeks',
    color: 'from-gold/20 to-transparent',
  },
  {
    title: 'The Leadership Protocol',
    description: 'Lead yourself and others with authority and integrity.',
    level: 'Advanced',
    duration: '10 Weeks',
    color: 'from-gold/20 to-transparent',
  },
]

export default function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-black to-gray-darker">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-wider font-semibold">TRANSFORMATIVE PROGRAMS</span>
          <h2 className="heading-lg mt-4 mb-6">
            Choose Your{' '}
            <span className="gradient-text">Path</span>
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            Structured, science-backed programs designed to take you from where you are to where you want to be.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-dark to-black border border-white/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-1 bg-gold mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-400 mb-4">{program.description}</p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Level</span>
                    <span className="text-gold">{program.level}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration</span>
                    <span className="text-gold">{program.duration}</span>
                  </div>
                </div>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/programs" className="btn-secondary">
            View All Programs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
