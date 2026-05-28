'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <main className="pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="heading-xl mb-6">Our Mission</h1>
              <p className="text-xl text-gray-300 mb-12">
                To awaken the champion within every person and build a global community of unstoppable individuals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="heading-md mb-4">The Story Behind THE CLIMB</h2>
                <p className="text-gray-300 mb-4">
                  Founded by elite performers who refused to accept mediocrity, THE CLIMB was born from a simple truth: greatness doesn't happen by accident.
                </p>
                <p className="text-gray-300">
                  We've built a movement that combines ancient wisdom with modern science to help you unlock your full potential and create a legacy worth leaving.
                </p>
              </div>
              <div className="glassmorphism p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Our Philosophy</h3>
                <ul className="space-y-3">
                  {['Discipline over motivation', 'Consistency over intensity', 'Growth over comfort', 'Legacy over luxury'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
