import Image from 'next/image';
import { m } from 'framer-motion';

import ArrowButton from '../../../components/ArrowButton/ArrowButton';
import SolarSystemModel from '../../../components/SolarSystemModel/SolarSystemModel';
import Carousel from '../../../components/Carousel/Carousel';

import styles from './SolarSystem.module.scss';
import commonStyles from '../commonStyles.module.scss';
import { sectionProps } from '../../index';

import { objectInfo } from './SolarSystemInfo';

const SolarSystem = ({
    setActiveSection,
    handleTransition,
    animation
}: sectionProps) => {

    return (
        <m.div
            key="solarSystem"
            className={commonStyles.pageWrap}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
        >
            <ArrowButton
                onClick={() => {
                    setActiveSection('StartNav')
                    handleTransition('slideUp');
                }}
                text="HOME"
                position="bottom"
            />
            <div className={`${commonStyles.page}  ${styles.page}`}>
                <SolarSystemModel />
                {/* <Carousel carouselSlides={objectInfo}/> */}
            </div>

        </m.div>
    )
}

export default SolarSystem;