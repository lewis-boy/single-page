import { FC } from 'react'

interface CardProps {
    title: string,
    picture: string,
    color: string,
}

const Card: FC<CardProps> = ({ title, picture, color }) => {
    return (
        <div className={`${color}` + ' relative rounded-2 w-full h-full'}>
            <img src={picture} alt="picture" className=' absolute top-6 right-6' />
            <h1 className='text-white absolute bottom-6 left-6'>{title}</h1>
        </div>
    )
}

export default Card