// inspired by https://davidwalsh.name/css-flip
import Image from 'next/image';
import { useState } from 'react';
import styles from './FlipCard.module.scss';

type FlipCardProps = {
    overlay: string;
    front: StaticImageData;
    back: JSX.Element;
}

const FlipCard = ({ overlay, front, back }: FlipCardProps ) => {
    const [flipped, setFlipped] = useState<boolean>(false);

    return (
        <div className={`${styles.container} ${flipped ? styles.flipped : ""}`}  onClick={() => setFlipped(!flipped)}>
            <div className={styles.flipper}>
                <div className={styles.front}>
                    <div className={styles.overlay}>
                        {overlay}
                    </div>
                    <Image src={front} alt="" layout="fill" objectFit='cover' />
                </div>
                <div className={styles.back}>
                    {back}
                </div>
            </div>
        </div>
    )
}

export default FlipCard;