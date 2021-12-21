import Image from 'next/image';
import { m } from 'framer-motion';

import ArrowButton from '../../components/ArrowButton/ArrowButton';

import styles from './sectionStyles/Galaxies.module.scss';
import commonStyles from './sectionStyles/commonStyles.module.scss';
import { sectionProps } from '../index';

import pngGalaxy from '../../assets/pngGalaxy.png';

const Galaxies = ({
    setActiveSection,
    handleTransition,
    animation
}: sectionProps) => {

    return (
            <m.div
                key="galaxies"
                className={commonStyles.pageWrap}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={animation.variants}
                transition={animation.transition}
            >
            <div className={commonStyles.page}>
                <div className={commonStyles.pageTitle}>
                    <Image src={pngGalaxy} alt="" width={220} height={220} />
                    <div className={commonStyles.pageTitleText}>
                        Galaxies
                    </div>
                    <div className={commonStyles.pageSubtitleText}>
                        Galaxies are collections of tons and tons of stars, planets, nebulae, asteroids
                        and the like. We live in the Milk Way Galaxy; our closest neighbour is the Andromeda
                        Galaxy. They come in various shapes and sizes, and it can be interesting to
                        see the odd shapes and sizes which they come in.
                    </div>
                </div>

                <div className={commonStyles.pageContent}>
                    
                </div>

                    <ArrowButton
                    onClick={() => {
                        setActiveSection('StartNav')
                        handleTransition('slideRight');
                    }}
                    text="HOME"
                    position="left"
                    />
                </div>
            </m.div>
    )
}

export default Galaxies;