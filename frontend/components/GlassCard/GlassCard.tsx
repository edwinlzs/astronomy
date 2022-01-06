import Image from 'next/image';
import { ReactChildren, useRef, useState } from 'react';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import styles from './GlassCard.module.scss';
import { SquaredCross } from '@styled-icons/entypo'
import { keyframes } from 'styled-components';

type GlassCardProps = {
    img: StaticImageData;
    title: string;
    content: string;
    children?: ReactChildren;
}

const GlassCard = ({ img, title, content, children }: GlassCardProps) => {
    const [selected, setSelected] = useState<boolean>(false);
    const overlay = useRef(null);

    const handleClickOutside = () => setSelected(!selected);

    useOutsideAlerter(overlay, handleClickOutside);

    return (
        <div
            className={styles.container}
            onClick={selected ? undefined : () => setSelected(!selected)}
            ref={selected ? overlay : null}
            style={selected ? undefined : { cursor: 'pointer' }}
        >
            <div
            className={`${styles.card} ${selected ? styles.selected : styles.unselected}`}
            >
                {selected ?
                    <>
                        <div className={styles.selectedTitle}>
                            {title}
                        </div>
                        <SquaredCross
                            className={styles.closeButton}
                            onClick={() => setSelected(!selected)}
                            size={32}
                        />
                    </>
                    :
                    ''
                }
                <div className={styles.cardImage}>
                    <Image src={img} alt="" layout='responsive' />
                </div>
                {selected ?
                    <div className={styles.selectedContent}>
                        {content}
                    </div>
                    :
                    <div className={styles.cardTitle}>
                        {title}
                    </div>
                }
                {children}
            </div>
        </div>
    )
}

export default GlassCard;