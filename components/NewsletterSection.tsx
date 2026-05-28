'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send } from 'lucide-react'

export default function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-gray-darker to-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center glassmorphism p-8 md:p-12"
        >
          <h2 className="heading-md mb-4">
            Join The{' '}
            <span className="gradient-text">Inner Circle</span>
          </h2>
          <p className="body-text mb-8">
            Get daily motivation, exclusive content, and early access to new programs delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-gold transition-colors text-white"
            />
            <button
              type="submit"
              className="btn-primary flex items-center gap-2 justify-center whitespace-nowrap"
            >
              Subscribe <Send size={18} />
            </button>
          </form>

          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold mt-4"
            >
              Thank you for joining! Check your inbox.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
