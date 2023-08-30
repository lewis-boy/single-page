import { FC } from 'react'


const Works = ({ }) => {
  return (
    <div className="flex flex-col text-center">
      <h2 className="text-h-md font-bold">My Work</h2>
      <div className="flex mx-auto gap-4">
        <div className="bg-black rounded-full w-[64px] h-[64px] p-6">
          <img src="./icon-arrow-left.svg" alt="arrow" />
        </div>
        <div className="bg-black rounded-full w-[64px] h-[64px] p-6">
          <img src="./icon-arrow-right.svg" alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default Works