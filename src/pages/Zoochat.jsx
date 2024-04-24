import { useState } from 'react'

class Animal {
  constructor ({ sound }) {
    this.sound = sound
  }

  speak (message) {
    return message.replace(/\b\w+\b/g, word => word + ' ' + this.sound)
  }
}

class Lion extends Animal {
  constructor () {
    super({ sound: 'roar' })
  }
}

class Tiger extends Animal {
  constructor () {
    super({ sound: 'grr' })
  }
}

const Zoo = () => {
  const [lionMessage, setLionMessage] = useState('')
  const [tigerMessage, setTigerMessage] = useState('')

  const lion = new Lion()
  const tiger = new Tiger()

  const handleLionChange = event => {
    setLionMessage(event.target.value)
  }

  const handleTigerChange = event => {
    setTigerMessage(event.target.value)
  }

  return (
    <div className='flex flex-col gap-y-10 py-4 w-full items-center'>
      <div className='flex flex-col w-[300px] md:w-[400px]'>
        <h2 className='text-2xl m-auto'>Lion</h2>
        <input
          className='p-2 w-full md:w-[400px] my-2 rounded-sm'
          type='text'
          placeholder='Phrase to translate'
          value={lionMessage}
          onChange={handleLionChange}
        />
        <p className='text-2xl w-full md:w-[400px] h-[100px] md:h-[150px] border break-words bg-slate-300 p-2 py-0 font-semibold overflow-auto'>
          {lion.speak(lionMessage)}
        </p>
      </div>
      <div className='flex flex-col w-[300px] md:w-[400px]'>
        <h2 className='text-2xl m-auto'>Tiger</h2>
        <input
          className='p-2 w-full md:w-[400px] my-2 rounded-sm'
          type='text'
          placeholder='Phrase to translate'
          value={tigerMessage}
          onChange={handleTigerChange}
        />
        <p className='text-2xl w-full md:w-[400px] h-[100px] md:h-[150px] border break-words bg-slate-300 p-2 py-0 font-semibold overflow-auto'>
          {tiger.speak(tigerMessage)}
        </p>
      </div>
    </div>
  )
}

export default Zoo
