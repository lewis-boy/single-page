import Link from 'next/link'
import { FC } from 'react'
import Card from './Card'


const Hero = ({ }) => {
  return (
    <div className=" container px-8 tablet:px-10 desktop:px-[165px] pt-8 mb-[100px] flex flex-col gap-8">
      <div className="flex justify-between">
        <img src="./logo.svg" alt="logo" className='' />
        <div className='flex items-center p- bg-black hover:bg-purple text-biege font-bold rounded-[38px] py-2 px-7'> Free Consultation</div>
      </div>
      <div className='flex flex-col gap-4 text-center items-center'>
        <h1 className="text-h-md text-black font-bold desktop:text-h-lg">Design solutions made easy</h1>
        <p className='text-b-md text-grey tablet:max-w-[540px] desktop:max-w-[730px]'>With over ten years of experience in various design disciplines, Im your one-stop shop for your design needs.</p>
      </div>
      <div className='grid grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-6 gap-6 w-full h-[1164px] tablet:h-[560px] desktop:h-[364px]'>
        <Card title='Graphic Design' picture='./pattern-graphic-design.svg' color='bg-purple' layout='col-span-2 row-span-2 ' />
        <Card title='UI/UX' picture='./pattern-ui-ux.svg' color='bg-orange' layout='' />
        <Card title='Apps' picture='./pattern-apps.svg' color='bg-pink' layout='' />
        <Card title='Illustrations' picture='./pattern-illustrations.svg' color='bg-salmon' layout='col-span-2 desktop:col-start-3 desktop:row-start-2 ' />
        <Card title='Photography' picture='./pattern-photography.svg' color='bg-teal' layout='col-span-2 desktop:col-start-5 desktop:row-start-1 ' />
        <Card title='Motion Graphics' picture='./pattern-motion-graphics.svg' color='bg-magenta' layout='col-span-2 ' />
      </div>
    </div>
  )
}

// desktop:col-start-3 desktop:row-start-2
// desktop:col-start-5 desktop:row-start-1

export default Hero