import { m } from 'framer-motion';
import Image from 'next/image';
import styles from './CarouselSlide.module.scss';

import { framerAnimations } from '../../lib/framerAnimations';

type CarouselSlideProps = {
    image: StaticImageData;
    title: string;
    content: string;
}

const CarouselSlide = ({ image, title, content }: CarouselSlideProps) => {
    
    return (
        <m.div
            className={styles.container}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={framerAnimations.fade.variants}
            transition={framerAnimations.fade.transition}
        >
        {/* <div className={styles.container}> */}
            <div className={styles.slideImage}>
                <Image src={image} alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className={styles.slideText}>
                <div className={styles.slideTitle}>
                    {title}
                </div>
                <div className={styles.slideDesc}>
                    {content}
                </div>
            </div>
        {/* </div> */}
        </m.div>
    )
}

export default CarouselSlide;