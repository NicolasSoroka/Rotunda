const Home = () => {
  return (
    <div className='flex flex-col'>
      <h1>Menu</h1>
      <ul className='flex flex-col'>
        <li className='flex flex-col w-[450px] h-[200px] items-center justify-center rounded-md bg-element1 bg-cover bg-center gap-y-4'>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-cat'
            >
              <path d='M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z' />
              <path d='M8 14v.5' />
              <path d='M16 14v.5' />
              <path d='M11.25 16.25h1.5L12 17l-.75-.75Z' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-dog'
            >
              <path d='M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5' />
              <path d='M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5' />
              <path d='M8 14v.5' />
              <path d='M16 14v.5' />
              <path d='M11.25 16.25h1.5L12 17l-.75-.75Z' />
              <path d='M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-bird'
            >
              <path d='M16 7h.01' />
              <path d='M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20' />
              <path d='m20 7 2 .5-2 .5' />
              <path d='M10 18v3' />
              <path d='M14 17.75V21' />
              <path d='M7 18a6 6 0 0 0 3.84-10.61' />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-white">Zoo Translator</h2>
        </li>
        <li className='flex flex-col w-[450px] h-[200px] items-center justify-center rounded-md bg-element2 bg-cover bg-center gap-y-4'>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-key-round'
            >
              <path d='M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z' />
              <circle cx='16.5' cy='7.5' r='.5' fill='currentColor' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-hash'
            >
              <line x1='4' x2='20' y1='9' y2='9' />
              <line x1='4' x2='20' y1='15' y2='15' />
              <line x1='10' x2='8' y1='3' y2='21' />
              <line x1='16' x2='14' y1='3' y2='21' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-link'
            >
              <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
              <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-white">URL Parser</h2>
        </li>
      </ul>
    </div>
  )
}

export default Home
