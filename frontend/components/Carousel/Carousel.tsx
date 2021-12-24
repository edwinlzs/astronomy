import { useState } from 'react';
import CarouselArrow from '../CarouselArrow/CarouselArrow';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import styles from './Carousel.module.scss';


type CarouselProps = {
    carouselSlides: {
        image: StaticImageData,
        title: string,
        content: string,
    }[]
}

const Carousel = ({ carouselSlides }: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slideCount = carouselSlides.length;

    return (
        <div className={styles.container}>
            <CarouselArrow
                direction="left"
                slideCount={slideCount}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
            />
            <CarouselSlide
                image={carouselSlides[currentSlide].image}
                title={carouselSlides[currentSlide].title}
                content={carouselSlides[currentSlide].content}
            />
            <CarouselArrow
                direction="right"
                slideCount={slideCount}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
            />
        </div>
    )
}

export default Carousel