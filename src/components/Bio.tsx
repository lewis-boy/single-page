import Link from 'next/link'
import { FC } from 'react'


const Bio = ({ }) => {
  return (
    <div className='flex flex-col tablet:flex-row gap-10 px-[var(--wrapper-inline-padding)] tablet:px-10 desktop:px-[165px]'>
      <img src="./image-amy.webp" alt="amy" className='tablet:w-[364px] tablet:h-[364px]' />
      <div className='tablet:text-left flex flex-col gap-6 items-center text-center'>
        <h2 className='text-h-md text-black font-bold'>Im Amy, and Id love to work on your next project</h2>
        <p className='text-b-md text-grey'>I love working with others to create beautiful design solutions. Ive designed everything from brand illustrations to complete mobile apps. Im also handy with a camera!</p>
        <Link href='/' className='bg-salmon hover:bg-orange text-biege font-bold p-4 flex items-center justify-center hover:cursor-pointer rounded-full'>Free Consultation</Link>
      </div>
    </div>
  )
}

export default Bio