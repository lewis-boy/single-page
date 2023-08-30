import { FC } from 'react'

interface CardProps {
    title: string,
    picture: string,
    color: string,
    layout: string,
}

const Card: FC<CardProps> = ({ title, picture, color, layout }) => {
    return (
        <div className={`${layout}` + `${color}` + ' relative rounded-[8px]'}>
            <img src={picture} alt="picture" className=' absolute top-6 right-6' />
            <h1 className='text-white font-bold absolute bottom-6 left-6'>{title}</h1>
        </div>
    )
}

export default Card