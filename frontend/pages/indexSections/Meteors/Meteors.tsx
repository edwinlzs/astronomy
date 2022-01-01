import Image from 'next/image';
import { m } from 'framer-motion';

import ArrowButton from '../../../components/ArrowButton/ArrowButton';
import MeteorShower from '../../../components/MeteorShower/MeteorShower';
import DustCloudSim from '../../../components/DustCloudSim/DustCloudSim';

import styles from './Meteors.module.scss';
import commonStyles from '../commonStyles.module.scss';
import { sectionProps } from '../../index';

const Meteors = ({
    setActiveSection,
    handleTransition,
    transitionDirection,
    transitionProps,
    variants
}: sectionProps) => {

    return (
        <m.div
            key="meteors"
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
                    handleTransition('slideLeft');
                }}
                text="HOME"
                position="right"
            />
            <div className={commonStyles.page}>
                <MeteorShower />
                <DustCloudSim />
                {/* <div className={styles.meteor1}/>
                <div className={styles.meteor2}/>
                <div className={styles.meteor3}/>
                <div className={styles.meteor4}/>
                <div className={styles.meteor5}/> */}
            </div>

        </m.div>
    )
}

export default Meteors;