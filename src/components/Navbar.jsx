import { Link } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
import RotundaLogo from './RotundaLogo'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-8 w-full h-[80px] bg-[#35a3d8]'>
      <Link to='/'>
        <RotundaLogo color='white' size='200' />
      </Link>
      <BurgerMenu />
    </div>
  )
}

export default Navbar
