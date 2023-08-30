import Link from 'next/link'
import { FC } from 'react'
import Card from './Card'


const Hero = ({ }) => {
  return (
    <div className=" container px-4 pt-4 mb-[100px]">
      <div className="flex justify-between">
        <img src="./logo.svg" alt="logo" className='' />
        <div className='flex items-center p- bg-black text-biege font-bold rounded-[38px] py-2 px-7'> Free Consultation</div>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className="text-h-lg text-black font-bold">Design solutions made easy</h1>
        <p className='text-b-md text-grey'>With over ten years of experience in various design disciplines, Im your one-stop shop for your design needs.</p>
      </div>
      <div className='flex flex-col gap-6'>
        <Card title='Graphic Design' picture='./pattern-graphic-design.svg' color='bg-purple' />
        <div className='flex'>
          <Card title='UI/UX' picture='./pattern-ui-ux.svg' color='bg-orange' />
          <Card title='Apps' picture='./pattern-apps.svg' color='bg-pink' />
        </div>
        <Card title='Illustrations' picture='./pattern-illustrations.svg' color='bg-salmon' />
        <Card title='Photography' picture='./pattern-photography.svg' color='bg-teal' />
        <Card title='Motion Graphics' picture='./pattern-motion-graphics.svg' color='bg-magenta' />
      </div>
    </div>
  )
}

export default Hero