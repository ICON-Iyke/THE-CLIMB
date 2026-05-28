'use client'

import HeroSection from '@/components/HeroSection'
import WhySection from '@/components/WhySection'
import ProgramsSection from '@/components/ProgramsSection'
import StatsSection from '@/components/StatsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import NewsletterSection from '@/components/NewsletterSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ProgramsSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </>
  )
}
