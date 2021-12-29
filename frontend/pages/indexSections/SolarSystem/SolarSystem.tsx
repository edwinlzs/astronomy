import { m } from 'framer-motion';

import ArrowButton from '../../../components/ArrowButton/ArrowButton';
import SolarSystemModel from '../../../components/SolarSystemModel/SolarSystemModel';

import styles from './SolarSystem.module.scss';
import commonStyles from '../commonStyles.module.scss';
import { sectionProps } from '../../index';

import { objectInfo } from './SolarSystemInfo';

const SolarSystem = ({
    setActiveSection,
    handleTransition,
    transitionDirection,
    transitionProps,
    variants
}: sectionProps) => {

    return (
        <m.div
            key="solarSystem"
            className={commonStyles.pageWrap}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={transitionDirection}
            variants={variants}
            transition={transitionProps}
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
            </div>

        </m.div>
    )
}

export default SolarSystem;