import { m } from 'framer-motion';

import ArrowButton from '../../components/ArrowButton/ArrowButton';

import styles from './sectionStyles/StartNav.module.scss';
import commonStyles from './sectionStyles/commonStyles.module.scss';
import { sectionProps } from '../index';

const StartNav = ({
    setActiveSection,
    handleTransition,
    animation
}: sectionProps) => {
    return (
        <m.div
            key="startNav"
            className={commonStyles.pageWrap}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
        >
            <div className={`${styles.startNav} ${commonStyles.page}`}>
                <div className={styles.startNavTitle}>
                    <span className={styles.header}>Astronomy</span>
                    <span className={styles.subheader}>an introduction.</span>
                </div>
                <ArrowButton
                    onClick={() => {
                        setActiveSection('Meteors');
                        handleTransition('slideDown');
                    }}
                    text="METEORS"
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
                        setActiveSection('SolarSystem');
                        handleTransition('slideRight');
                    }}
                    text="SOLAR SYSTEM"
                    position="left"
                />
            </div >
        </m.div>
    )
}

export default StartNav;