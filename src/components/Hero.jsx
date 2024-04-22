import { Link, useLocation } from 'react-router-dom'
import RotundaLogo from './RotundaLogo'
import BurgerMenu from './BurgerMenu'

const Hero = () => {
  const location = useLocation()
  let heroText = location.pathname
  if (heroText !== '/') {
    heroText = heroText.replace(/\//g, '').replace(/-/g, ' ').trim()
  } else if (heroText === '/') {
    heroText = 'Challenge Rotunda'
  }

  heroText = heroText[0].toUpperCase() + heroText.slice(1)

  return (
    <div className='flex flex-col items-center justify-center relative w-full h-[300px] md:h-[600px] bg-hero bg-cover bg-center'>
      <span className='absolute flex w-full h-full bg-[#308cdb] bg-opacity-85'/>

      <div className='flex relative items-center justify-between px-8 mt-4 h-[80px] w-full z-50'>
        <Link to='/'>
          <RotundaLogo color='white' size='200' />
        </Link>
        <BurgerMenu />
      </div>

      <h1 className='flex relative h-full items-center justify-center w-full text-white text-4xl md:text-6xl font-semibold'>
        {heroText}
      </h1>
    </div>
  )
}

export default Hero
