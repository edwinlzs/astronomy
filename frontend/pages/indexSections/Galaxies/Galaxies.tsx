import Image from 'next/image';
import { m } from 'framer-motion';

import ArrowButton from '../../../components/ArrowButton/ArrowButton';

import styles from './Galaxies.module.scss';
import commonStyles from '../commonStyles.module.scss';
import { sectionProps } from '../../index';

import pngGalaxy from '/assets/pngGalaxy.png';

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
                <ArrowButton
                    onClick={() => {
                        setActiveSection('StartNav')
                        handleTransition('slideRight');
                    }}
                    text="HOME"
                    position="left"
                />
                <div className={commonStyles.pageTitle}>
                    <Image src={pngGalaxy} alt="" width={220} height={220} />
                    <div className={commonStyles.pageTitleText}>
                        Galaxies
                    </div>
                    <div className={commonStyles.pageSubtitleText}>
                        Galaxies are collections of tons and tons of stars, planets, nebulae, asteroids
                        and the like. We live in the Milk Way Galaxy; our closest neighbour is the Andromeda
                        Galaxy. They come in all sorts of quirky shapes and sizes.
                    </div>
                </div>

                <div className={commonStyles.pageContent}>

                </div>
            </div>

        </m.div>
    )
}

export default Galaxies;