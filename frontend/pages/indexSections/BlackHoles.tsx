import Image from 'next/image';
import { m } from 'framer-motion';

import ArrowButton from '../../components/ArrowButton/ArrowButton';
import FlipCard from '../../components/FlipCard/FlipCard';

import { useGlobalBackgroundCoords } from '../../hooks/useGlobalBackgroundCenterCoords';
import styles from './sectionStyles/BlackHoles.module.scss';
import commonStyles from './sectionStyles/commonStyles.module.scss';
import { sectionProps } from '../index';

import svgBlackHole from '../../assets/svgBlackHole.svg';
import webmBlackHoleMerger from '../../assets/webmBlackHoleMerger.webm'
import { slideBackground } from '../../lib/animations';

const BlackHoles = ({
    setActiveSection,
    setTransition,
    animation
}: sectionProps) => {
    const [backgroundCoords, setBackgroundCoords] = useGlobalBackgroundCoords();

    return (
        <m.div
            key="blackHoles"
            className={commonStyles.pageWrap}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
        >
            <div className={commonStyles.page}>

                <div className={commonStyles.pageTitle}>
                    <Image src={svgBlackHole} alt="" width={220} height={220} />
                    <div className={commonStyles.pageTitleText}>
                        Black Holes
                    </div>
                    <div className={commonStyles.pageSubtitleText}>
                        If you don&apos;t know what black holes are, don&apos;t worry;
                        scientists don&apos;t fully understand them, either.
                        They are some of the most mysterious objects in the universe, and though they
                        began as theoretical predictions, we have over time uncovered very
                        convincing evidence verifying the existence of these galactic monstrosities.
                    </div>
                </div>

                <div className={commonStyles.pageContent}>
                    <FlipCard
                        front={
                            <>Hello</>
                        }
                        back={
                            <>World</>
                        }
                    />
                </div>

                <ArrowButton
                    onClick={() => {
                        setActiveSection('StartNav')
                        setTransition('slideDown')
                        slideBackground({
                            backgroundCoords,
                            setBackgroundCoords,
                            direction: 'down'
                        })
                    }}
                    text="HOME"
                    position="top"
                />
            </div>
        </m.div>
    )
}

export default BlackHoles;