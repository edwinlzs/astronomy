import Image from 'next/image';
import { m } from 'framer-motion';

import ArrowButton from '../../components/ArrowButton/ArrowButton';

import { useGlobalBackgroundCoords } from '../../hooks/useGlobalBackgroundCenterCoords';
import styles from './sectionStyles/Meteors.module.scss';
import commonStyles from './sectionStyles/commonStyles.module.scss';
import { sectionProps } from '../index';

import { slideBackground } from '../../lib/animations';

const Meteors = ({
    setActiveSection,
    setTransition,
    animation
}: sectionProps) => {
    const [backgroundCoords, setBackgroundCoords] = useGlobalBackgroundCoords();

    return (
            <m.div
                key="meteors"
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
                        setTransition('slideUp')
                        slideBackground({
                            backgroundCoords,
                            setBackgroundCoords,
                            direction: 'up'
                        })
                    }}
                    text="HOME"
                    position="bottom"
                    />
                </div>
            </m.div>
    )
}

export default Meteors;