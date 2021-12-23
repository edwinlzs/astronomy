import { ReactChild, ReactChildren } from 'react';
import CarouselArrow from '../CarouselArrow/CarouselArrow';
import styles from './Carousel.module.scss';

type CarouselProps = {
    children: JSX.Element[] | ReactChild | ReactChildren;
}

const Carousel = ({ children }: CarouselProps) => {
    return (
        <div className={styles.container}>
            <CarouselArrow
                direction="left"
            />
                {children}
            <CarouselArrow
                direction="right"
            />
        </div>
    )
}

export default Carousel