import { m } from 'framer-motion';

import ArrowButton from '../../components/ArrowButton/ArrowButton';

import { useGlobalBackgroundCoords } from '../../hooks/useGlobalBackgroundCenterCoords';
import styles from './sectionStyles/StartNav.module.scss';
import commonStyles from './sectionStyles/commonStyles.module.scss';
import { sectionProps } from '../index';

import { slideBackground } from '../../lib/animations';

const StartNav = ({
    setActiveSection,
    setTransition,
    animation
}: sectionProps) => {
    const [backgroundCoords, setBackgroundCoords] = useGlobalBackgroundCoords();
    return (
        <m.div
            key="home"
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
                        setTransition('slideDown');
                        slideBackground({
                            backgroundCoords,
                            setBackgroundCoords,
                            direction: 'down'
                        })
                    }}
                    text="METEORS"
                    position="top"
                />
                <ArrowButton
                    onClick={() => {
                        setActiveSection('BlackHoles');
                        setTransition('slideUp');
                        slideBackground({
                            backgroundCoords,
                            setBackgroundCoords,
                            direction: 'up'
                        })
                    }}
                    text="BLACK HOLES"
                    position="bottom"
                />
                <ArrowButton
                    onClick={() => {
                        setActiveSection('Galaxies');
                        setTransition('slideLeft');
                        slideBackground({
                            backgroundCoords,
                            setBackgroundCoords,
                            direction: 'left'
                        })
                    }}
                    text="GALAXIES"
                    position="right"
                />
                <ArrowButton
                    onClick={() => {
                        setActiveSection('SolarSystem');
                        setTransition('slideRight');
                        slideBackground({
                            backgroundCoords,
                            setBackgroundCoords,
                            direction: 'right'
                        })
                    }}
                    text="SOLAR SYSTEM"
                    position="left"
                />
            </div >
        </m.div>
    )
}

export default StartNav;