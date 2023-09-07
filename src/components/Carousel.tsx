import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'


const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla">
            <div className="embla__viewport mb-8" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <img src="./image-slide-1.jpg" alt="work" className='embla__slide__img w-full desktop:w-[540px] object-cover rounded-xl' />
                    </div>
                    <div className="embla__slide">
                        <img src="./image-slide-2.jpg" alt="work" className='embla__slide__img w-full desktop:w-[540px] object-cover rounded-xl' />
                    </div>
                    <div className="embla__slide">
                        <img src="./image-slide-3.jpg" alt="work" className='embla__slide__img w-full desktop:w-[540px] object-cover rounded-xl' />
                    </div>
                    <div className="embla__slide">
                        <img src="./image-slide-4.jpg" alt="work" className='embla__slide__img w-full desktop:w-[540px] object-cover rounded-xl' />
                    </div>
                    <div className="embla__slide">
                        <img src="./image-slide-5.jpg" alt="work" className='embla__slide__img w-full desktop:w-[540px] object-cover rounded-xl' />
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-4">
                <button className="embla__prev bg-black hover:bg-purple rounded-full w-[64px] h-[64px] p-6" onClick={scrollPrev}>
                    <img src="./icon-arrow-left.svg" alt="arrow" />
                </button>
                <button className="embla__next bg-black hover:bg-purple rounded-full w-[64px] h-[64px] p-6" onClick={scrollNext}>
                    <img src="./icon-arrow-right.svg" alt="arrow" />
                </button>
            </div>
        </div>
    )
}

export default Carousel