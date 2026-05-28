'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Trophy, BookOpen, Clock } from 'lucide-react'

const stats = [
  { icon: Users, value: 50000, label: 'Active Members', suffix: '+' },
  { icon: Trophy, value: 1000, label: 'Success Stories', suffix: '+' },
  { icon: BookOpen, value: 250, label: 'Hours of Content', suffix: 'K+' },
  { icon: Clock, value: 98, label: 'Member Satisfaction', suffix: '%' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = value / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-darker to-black">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-gold" />
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 mt-3 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
