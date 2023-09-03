'use client'
import { FC, useEffect, useRef } from 'react'


const Works = ({ }) => {

  const leftArrowRef = useRef<HTMLDivElement>(null)
  const rightArrowRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const rotateLeft = () => {
    const carousel = carouselRef.current
    if (!carousel) return



    return
  }
  const rotateRight = () => {
    return
  }

  useEffect(() => {
    const leftArrow = leftArrowRef.current
    const rightArrow = rightArrowRef.current
    if (!leftArrow || !rightArrow) return

    leftArrow.addEventListener("click", rotateLeft)
    rightArrow.addEventListener("click", rotateRight)

    return () => {
      leftArrow.removeEventListener("click", rotateLeft)
      rightArrow.removeEventListener("click", rotateRight)
    }
  }, [])

  return (
    <div className="flex flex-col text-center">
      <h2 className="text-h-md font-bold">My Work</h2>
      <div ref={carouselRef} className="carousel max-w-full flex whitespace-nowrap overflow-hidden gap-[30px]">
        <img src="./image-slide-1.jpg" alt="work" className='w-[270px] object-cover rounded-xl' />
        <img src="./image-slide-2.jpg" alt="work" className='w-[270px] object-cover rounded-xl' />
        <img src="./image-slide-3.jpg" alt="work" className='w-[270px] object-cover rounded-xl' />
        <img src="./image-slide-4.jpg" alt="work" className='w-[270px] object-cover rounded-xl' />
        <img src="./image-slide-5.jpg" alt="work" className='w-[270px] object-cover rounded-xl' />
      </div>
      <div className="flex mx-auto gap-4">
        <div ref={leftArrowRef} className="bg-black rounded-full w-[64px] h-[64px] p-6">
          <img src="./icon-arrow-left.svg" alt="arrow" />
        </div>
        <div ref={rightArrowRef} className="bg-black rounded-full w-[64px] h-[64px] p-6">
          <img src="./icon-arrow-right.svg" alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default Works