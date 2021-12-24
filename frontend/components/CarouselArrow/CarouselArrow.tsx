import { Dispatch, SetStateAction } from 'react';
import styles from './CarouselArrow.module.scss';

type CarouselArrowProps = {
    direction: string;
    slideCount: number;
    currentSlide: number;
    setCurrentSlide: Dispatch<SetStateAction<number>>;
}

const CarouselArrow = ({ direction, slideCount, currentSlide, setCurrentSlide }: CarouselArrowProps) => {
    const rotations: { [key: string]: string } = {
        right: '0deg',
        left: '180deg',
    }

    return (
        <div
            className={styles.arrow}
            style={{ transform: `rotate(${rotations[direction]})` }}
            onClick={() => {
                direction === 'right'
                ?
                setCurrentSlide(currentSlide + 1 >= slideCount ? 0 : currentSlide + 1)
                :
                setCurrentSlide(currentSlide - 1 < 0 ? slideCount - 1 : currentSlide - 1)
            }}
        >
            <div className={styles.arrowTop} />
            <div className={styles.arrowBottom} />
        </div>
    )
}

export default CarouselArrow;