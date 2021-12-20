import Image from 'next/image';
import { m } from 'framer-motion';

import ArrowButton from '../../components/ArrowButton/ArrowButton';

import { useGlobalBackgroundCoords } from '../../hooks/useGlobalBackgroundCenterCoords';
import styles from './sectionStyles/SolarSystem.module.scss';
import commonStyles from './sectionStyles/commonStyles.module.scss';
import { sectionProps } from '../index';

import { slideBackground } from '../../lib/animations';

const SolarSystem = ({
    setActiveSection,
    setTransition,
    animation
}: sectionProps) => {
    const [backgroundCoords, setBackgroundCoords] = useGlobalBackgroundCoords();

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
                <div className={commonStyles.page}>
                    THIS IS A PLACEHOLDER; THERE WILL BE MORE CONTENT HERE NEXT TIME!
                    <ArrowButton
                    onClick={() => {
                        setActiveSection('StartNav')
                        setTransition('slideLeft')
                        slideBackground({
                            backgroundCoords,
                            setBackgroundCoords,
                            direction: 'left'
                        })
                    }}
                    text="HOME"
                    position="right"
                    />
                </div>
            </m.div>
    )
}

export default SolarSystem;