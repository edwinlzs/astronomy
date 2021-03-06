import Image from 'next/image';
import { m } from 'framer-motion';

import ArrowButton from '../../../components/ArrowButton/ArrowButton';
import Carousel from '../../../components/Carousel/Carousel';

import styles from './BlackHoles.module.scss';
import commonStyles from '../commonStyles.module.scss';
import { sectionProps } from '../../index';

import svgBlackHole from '/assets/svgBlackHole.svg';
import albertEinstein from '/assets/albertEinstein.jpg';
import stephenHawking from '/assets/stephenHawking.jpeg';

const CarouselSlides = [
    {
        image: albertEinstein,
        title: "What are Black Holes?",
        content: `Black Holes are a region of space where gravity is so incredibly strong that NOTHING that enters it can escape,
        not even light (the fastest moving object in the universe).
        The idea was that since no light from within this region can ever reach our eyes,
        it will appear completely dark to us, hence the name "Black Hole".`
    },
    {
        image: stephenHawking,
        title: "Do Black Holes live forever?",
        content: `Since inside a Black Hole can ever escape,
        does that mean they can never grow smaller and thus live forever?
        
        Surprisingly, no! Stephen Hawking famously discovered that Black Holes naturally
        lose mass by emitting what we call 'Hawking Radiation'. They will shrink
        in size and eventually die out if they do not absorb new matter.`
    }
]

const BlackHoles = ({
    setActiveSection,
    handleTransition,
    transitionDirection,
    transitionProps,
    variants
}: sectionProps) => {
    return (
        <m.div
            key="blackHoles"
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
                    handleTransition('slideDown');
                }}
                text="HOME"
                position="top"
            />
            <div className={`${commonStyles.page}  ${styles.page}`}>
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
                    <Carousel carouselSlides={CarouselSlides} />
                </div>
            </div>
        </m.div>
    )
}

export default BlackHoles;