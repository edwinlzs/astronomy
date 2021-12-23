import styles from './CarouselArrow.module.scss';

type CarouselArrowProps = {
    direction: string;
}

const CarouselArrow = ({ direction }: CarouselArrowProps) => {
    const rotations: { [key:string]: string } = {
        right: '0deg',
        left: '180deg',
    }

    return (
        <div className={styles.arrow} style={{ transform: `rotate(${rotations[direction]})` }}>
            <div className={styles.arrowTop}/>
            <div className={styles.arrowBottom}/>
        </div>
    )
}

export default CarouselArrow;