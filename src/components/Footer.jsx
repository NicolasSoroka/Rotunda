import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Link
      to='https://www.linkedin.com/in/nsrka/'
      target='_blank'
      rel='noopener noreferrer'
      className='flex w-full m-auto justify-center py-4 hover:text-blue-700 transition-all'
    >
      Nicol&#225;s Soroka
    </Link>
  )
}

export default Footer
