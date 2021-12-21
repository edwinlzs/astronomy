import Image from 'next/image';
import { m } from 'framer-motion';

import ArrowButton from '../../components/ArrowButton/ArrowButton';
import FlipCard from '../../components/FlipCard/FlipCard';

import styles from './sectionStyles/BlackHoles.module.scss';
import commonStyles from './sectionStyles/commonStyles.module.scss';
import { sectionProps } from '../index';

import svgBlackHole from '../../assets/svgBlackHole.svg';
import albertEinstein from '../../assets/albertEinstein.jpg';
import stephenHawking from '../../assets/stephenHawking.jpeg';

const BlackHoles = ({
    setActiveSection,
    handleTransition,
    animation
}: sectionProps) => {
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
                    <Image src={svgBlackHole} alt="" width={160} height={160} />
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
                        overlay="How did we discover Black Holes?"
                        front={albertEinstein}
                        back={
                            <>World</>
                        }
                    />
                    <FlipCard
                        overlay="Do Black Holes live forever?"
                        front={stephenHawking}
                        back={
                            <>World</>
                        }
                    />
                </div>

                <ArrowButton
                    onClick={() => {
                        setActiveSection('StartNav')
                        handleTransition('slideDown');
                    }}
                    text="HOME"
                    position="top"
                />
            </div>
        </m.div>
    )
}

export default BlackHoles;