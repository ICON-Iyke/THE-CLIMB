'use client'

import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import LoadingScreen from './LoadingScreen'
import CustomCursor from './CustomCursor'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
    </>
  )
}
