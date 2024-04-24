import { Link } from 'react-router-dom'
import ZooIcons from '../components/ZooIcons'
import ParserIcons from '../components/ParserIcons'

const Home = () => {
  return (
    <ul className='flex flex-col md:flex-row gap-4 md:gap-x-8 h-full w-full justify-center items-center'>
      <Link to='/zoochat' className='flex md:justify-end w-11/12'>
        <li className='flex flex-col w-full md:w-[450px] h-[150px] md:h-[200px] items-center justify-center rounded-md bg-element1 bg-cover bg-center gap-y-4 md:hover:scale-110 transition-all'>
          <ZooIcons />
          <h2 className='text-3xl font-semibold text-white'>Zoo Translator</h2>
        </li>
      </Link>

      <Link to='/urlparser' className='flex w-11/12'>
        <li className='flex flex-col w-full md:w-[450px] h-[150px] md:h-[200px] items-center justify-center rounded-md bg-element2 bg-cover bg-center gap-y-4 md:hover:scale-110 transition-all'>
          <ParserIcons />
          <h2 className='text-3xl font-semibold text-white'>URL Parser</h2>
        </li>
      </Link>
    </ul>
  )
}

export default Home
