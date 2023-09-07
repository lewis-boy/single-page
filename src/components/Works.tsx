'use client'
import { FC, useEffect, useRef } from 'react'
import Carousel from './Carousel'


const Works = ({ }) => {


  return (
    <div className="flex flex-col text-center gap-8">
      <h2 className="text-h-md font-bold">My Work</h2>
      <Carousel />
    </div>
  )
}

export default Works