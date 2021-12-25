import Image from 'next/image';
import { m } from 'framer-motion';

import ArrowButton from '../../components/ArrowButton/ArrowButton';

import styles from './sectionStyles/Meteors.module.scss';
import commonStyles from './sectionStyles/commonStyles.module.scss';
import { sectionProps } from '../index';

const Meteors = ({
    setActiveSection,
    handleTransition,
    animation
}: sectionProps) => {

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
            <ArrowButton
                onClick={() => {
                    setActiveSection('StartNav')
                    handleTransition('slideUp');
                }}
                text="HOME"
                position="bottom"
            />
            <div className={commonStyles.page}>
                THIS IS A PLACEHOLDER; THERE WILL BE MORE CONTENT HERE NEXT TIME!
            </div>

        </m.div>
    )
}

export default Meteors;