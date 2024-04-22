import { Menu } from 'lucide'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BurgerMenu = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  scrolling
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto')

  const handleMenuOpen = () => {
    setScrolling(prev => !prev)
    setIsBurgerMenuOpen(prev => !prev)
  }

  useEffect(() => {
    function handleEscapeKey (event) {
      if (event.keyCode === 27) {
        setIsBurgerMenuOpen(false)
        setScrolling(false)
      }
    }

    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  return (
    <>
      <div
        className={`absolute flex justify-center left-0 items-center  w-full h-dvh bg-slate-500 transition-all duration-700
          ${
            isBurgerMenuOpen
              ? 'top-0 opacity-90 flex z-50'
              : '-top-[1000px] -z-10 opacity-0'
          }`}
      >
        <span
          onClick={handleMenuOpen}
          className='absolute top-0 right-2 font-bold text-2xl text-slate-900 p-4 cursor-pointer'
        >
          x
        </span>
        <ul className='flex flex-col text-center text-white font-bold uppercase gap-y-2 '>
          <li className='hover:text-slate-800' onClick={handleMenuOpen}>
            <Link className='px-4 py-2' to='/task-1'>
              Task 1
            </Link>
          </li>
          <li className='hover:text-slate-800' onClick={handleMenuOpen}>
            <Link className='px-4 py-2' to='/task-2'>
              Task 2
            </Link>
          </li>
        </ul>
      </div>

      <button
        onClick={handleMenuOpen}
        className={`flex items-center justify-center w-12 h-12 transition-all ${
          isBurgerMenuOpen ? 'z-10' : 'z-50'
        }`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='35'
          height='35'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#FFFFFF'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-menu'
        >
          <line x1='4' x2='20' y1='12' y2='12' />
          <line x1='4' x2='20' y1='6' y2='6' />
          <line x1='4' x2='20' y1='18' y2='18' />
        </svg>
      </button>
    </>
  )
}

export default BurgerMenu
