import CarouselItem from "./CarouselItem"
import "./Carousel.css";
import { useState, useEffect } from "react";

export default function Carousel({ slides }) {

    useEffect(() => { 
        const slideInterval = setInterval(() => {
            setCurrentSlide(currenstSlide => currenstSlide < slides.length - 1 ? currenstSlide + 1 : 0)
        }, 3000)
        return () => clearInterval (slideInterval)
    }, [])

    const [currenstSlide, setCurrentSlide] = useState(0)
    return (
        <div className='carousel'>
            <div
            className="carousel-inner"
            style={{transform: 'translateX(${-currentSlide *100}%)'}}
            >
                {slides.map((slide, index) => (
                    <CarouselItem slide={slide} key={index} />
                ))}
            </div>
        </div>
    )
}