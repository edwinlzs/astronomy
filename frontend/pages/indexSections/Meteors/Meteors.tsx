import Image from 'next/image';
import { m } from 'framer-motion';

import ArrowButton from '../../../components/ArrowButton/ArrowButton';
import MeteorShower from '../../../components/MeteorShower/MeteorShower';

import styles from './Meteors.module.scss';
import commonStyles from '../commonStyles.module.scss';
import { sectionProps } from '../../index';
import GlassCard from '../../../components/GlassCard/GlassCard';
import Meteor1 from '/assets/meteor/Meteor1.png';
import Meteor5 from '/assets/meteor/Meteor5.png';

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
                <GlassCard
                    img={Meteor5}
                    title="What is a Meteor?"
                    animationDuration={10}
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis odio accusamus reiciendis temporibus. Molestias reiciendis assumenda iste numquam eveniet?"
                />
                <GlassCard
                    img={Meteor1}
                    title="What are Meteor Showers?"
                    animationDuration={8}
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis odio accusamus reiciendis temporibus. Molestias reiciendis assumenda iste numquam eveniet?"
                />
                <MeteorShower />
            </div>

        </m.div>
    )
}

export default Meteors;