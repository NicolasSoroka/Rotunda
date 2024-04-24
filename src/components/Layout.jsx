import { useEffect, useState } from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Loading from './Loading'

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) return <Loading/>

  return (
    <div className='flex flex-col h-screen w-full bg-[#f2f5fb]'>
      <Hero />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
