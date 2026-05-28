'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

const footerLinks = {
  'Explore': ['About', 'Programs', 'Blog', 'Podcast'],
  'Support': ['Contact', 'FAQ', 'Terms', 'Privacy'],
  'Community': ['Success Stories', 'Events', 'Ambassadors', 'Forum'],
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">THE CLIMB</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Greatness Is Earned. Every Day.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; 2024 THE CLIMB. All rights reserved. Greatness is a choice.</p>
        </div>
      </div>
    </footer>
  )
}
