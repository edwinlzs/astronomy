import Image from 'next/image';
import styles from './CarouselSlide.module.scss';

type CarouselSlideProps = {
    image: StaticImageData;
    title: string;
    content: string;
}

const CarouselSlide = ({ image, title, content }: CarouselSlideProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.slideImage}>
                <Image src={image} alt="" layout="fill" objectFit="cover" width={270}/>
            </div>
            <div className={styles.slideText}>
                <div className={styles.slideTitle}>
                    {title}
                </div>
                <div className={styles.slideDesc}>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default CarouselSlide;