import { m } from 'framer-motion';

import ArrowButton from '../../../components/ArrowButton/ArrowButton';

import styles from './StartNav.module.scss';
import commonStyles from '../commonStyles.module.scss';
import { sectionProps } from '../../index';

const StartNav = ({
    setActiveSection,
    handleTransition,
    transitionDirection,
    transitionProps,
    variants
}: sectionProps) => {

    return (
        <m.div
            key="startNav"
            className={commonStyles.pageWrap}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={transitionDirection}
            variants={variants}
            transition={transitionProps}
        >
            <div className={`${styles.startNav} ${commonStyles.page}`}>
                <ArrowButton
                    onClick={() => {
                        setActiveSection('SolarSystem');
                        handleTransition('slideDown');
                    }}
                    text="SOLAR SYSTEM"
                    position="top"
                />
                <ArrowButton
                    onClick={() => {
                        setActiveSection('BlackHoles');
                        handleTransition('slideUp');
                    }}
                    text="BLACK HOLES"
                    position="bottom"
                />
                <ArrowButton
                    onClick={() => {
                        setActiveSection('Galaxies');
                        handleTransition('slideLeft');
                    }}
                    text="GALAXIES"
                    position="right"
                />
                <ArrowButton
                    onClick={() => {
                        setActiveSection('Meteors');
                        handleTransition('slideRight');
                    }}
                    text="METEORS"
                    position="left"
                />
                <div className={styles.startNavTitle}>
                    <span className={styles.header}>Astronomy</span>
                    <span className={styles.subheader}>an exploratory project.</span>
                </div>
            </div >
        </m.div>
    )
}

export default StartNav;