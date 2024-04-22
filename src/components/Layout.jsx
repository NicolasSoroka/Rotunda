import Hero from './Hero'

const Layout = ({ children }) => {
  return (
    <div>
      <Hero />
      {children}
    </div>
  )
}

export default Layout
