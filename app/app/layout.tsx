import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

export const metadata: Metadata = {
  title: 'THE CLIMB - Greatness Is Earned. Every Day.',
  description: 'Elite mindset, discipline, and success platform for those who refuse average and choose growth, resilience, and legacy.',
  keywords: 'motivation, success, discipline, mindset, entrepreneurship, personal growth, leadership, fitness',
  authors: [{ name: 'THE CLIMB' }],
  openGraph: {
    title: 'THE CLIMB - Greatness Is Earned. Every Day.',
    description: 'Join the movement of elite performers who choose discipline and growth.',
    url: 'https://theclimb.com',
    siteName: 'THE CLIMB',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'THE CLIMB - Motivational Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE CLIMB - Greatness Is Earned. Every Day.',
    description: 'Join the movement of elite performers who choose discipline and growth.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
