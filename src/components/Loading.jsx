import { useEffect, useState } from 'react'
import RotundaLogo from './RotundaLogo'

const Loading = () => {

  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        switch (prevText) {
          case 'Loading':
            return 'Loading.';
          case 'Loading.':
            return 'Loading..';
          case 'Loading..':
            return 'Loading...';
          default:
            return 'Loading';
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center'>
      <RotundaLogo size='200'/>
      <h1 className='text-4xl font-semibold w-[250px] pl-[65px] text-[#308cdb]'>{loadingText}</h1>
    </div>
  )
}

export default Loading