'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, TrendingUp, Users, Zap } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Elite Mindset',
    description: 'Train your mind for peak performance and unshakeable confidence.',
  },
  {
    icon: TrendingUp,
    title: 'Disciplined Growth',
    description: 'Consistent action compounds into extraordinary results.',
  },
  {
    icon: Users,
    title: 'Community of Champions',
    description: 'Surround yourself with driven individuals on the same path.',
  },
  {
    icon: Zap,
    title: 'Unlock Your Potential',
    description: 'Break through limitations and achieve what you once thought impossible.',
  },
]

export default function WhySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-wider font-semibold">WHY WE EXIST</span>
          <h2 className="heading-lg mt-4 mb-6">
            You Were Born For{' '}
            <span className="gradient-text">More</span>
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            In a world that celebrates mediocrity, THE CLIMB exists to awaken the champion within.
            We don't just motivate — we transform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glassmorphism p-8 text-center hover:border-gold/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <reason.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
