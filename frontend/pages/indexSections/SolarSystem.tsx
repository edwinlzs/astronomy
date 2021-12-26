import Image from 'next/image';
import { m } from 'framer-motion';

import ArrowButton from '../../components/ArrowButton/ArrowButton';

import styles from './sectionStyles/SolarSystem.module.scss';
import commonStyles from './sectionStyles/commonStyles.module.scss';
import { sectionProps } from '../index';
import SolarSystemModel from '../../components/SolarSystemModel/SolarSystemModel';

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
                    handleTransition('slideLeft');
                }}
                text="HOME"
                position="right"
            />
            <div className={`${commonStyles.page}  ${styles.page}`}>
                <SolarSystemModel/>
            </div>

        </m.div>
    )
}

export default SolarSystem;