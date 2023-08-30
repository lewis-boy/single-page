import { FC } from 'react'


const Contact = ({ }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center bg-black py-12 px-6 text-center rounded-[10px] gap-6">
        <h2 className="text-h-sm text-biege font-bold">Book a call with me</h2>
        <p className="text-b-md text-biege ">Id love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
        <div className="flex w-[176px] h-[44px] justify-center items-center rounded-full bg-salmon text-biege font-bold">Free Consultation</div>
      </div>
      <div className="flex justify-between">
        <img src="./logo.svg" alt="logo" className='' />
        <div className='flex items-center p- bg-black text-biege font-bold rounded-[38px] py-2 px-7'> Free Consultation</div>
      </div>

    </div>
  )
}

export default Contact