import { FC } from 'react'


const Contact = ({ }) => {
  return (
    <div className="flex flex-col gap-10 px-[var(--wrapper-inline-padding)] tablet:px-10  pb-[var(--wrapper-inline-padding)] tablet:pb-10 desktop:px-[165px] desktop:w-[1410px]">
      <div className="flex flex-col desktop:flex-row desktop:justify-between items-center bg-black py-12 px-6 tablet:px-20 tablet:pt-14 tablet:pb-16 text-center rounded-[10px] gap-6">
        <div className='gap-6 flex flex-col desktop:text-left desktop:max-w-[540px]'>
          <h2 className="text-h-sm text-biege font-bold">Book a call with me</h2>
          <p className="text-b-md text-biege ">Id love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
        </div>
        <div className="flex w-[176px] h-[44px] justify-center items-center rounded-full bg-salmon hover:bg-orange text-biege font-bold">Free Consultation</div>
      </div>
      <div className="flex justify-between">
        <img src="./logo.svg" alt="logo" className='' />
        <div className='flex items-center bg-black hover:bg-purple text-biege font-bold rounded-[38px] py-2 px-7 desktop:max-w-[228px]'> Free Consultation</div>
      </div>

    </div>
  )
}

export default Contact