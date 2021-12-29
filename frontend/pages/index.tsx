import { Dispatch, SetStateAction, useState } from 'react';
import type { NextPage } from 'next';
import { AnimatePresence, Variants } from 'framer-motion';

import { useGlobalMouseMove } from '../hooks/useGlobalMouseMove';
import { useGlobalBackgroundCoords } from '../hooks/useGlobalBackgroundCenterCoords';
import styles from '../styles/Home.module.scss';
import { slideBackground } from '../lib/animations';
import { variants } from '../lib/framerAnimations';

import StartNav from './indexSections/StartNav/StartNav';
import BlackHoles from './indexSections/BlackHoles/BlackHoles';
import SolarSystem from './indexSections/SolarSystem/SolarSystem';
import Galaxies from './indexSections/Galaxies/Galaxies';
import Meteors from './indexSections/Meteors/Meteors';

export type sectionProps = {
  setActiveSection: Dispatch<SetStateAction<string>>;
  handleTransition: (direction: string) => void;
  transitionDirection: string;
  transitionProps: {[key:string]: string};
  variants: Variants;
}

const Home: NextPage = () => {
  const [mouseX, mouseY] = useGlobalMouseMove();
  const [backgroundCoords, setBackgroundCoords] = useGlobalBackgroundCoords();
  const [activeSection, setActiveSection] = useState<string>('StartNav');
  const [transitionDirection, setTransitionDirection] = useState<string>('slideUp');
  const transitionProps = {duration: '0.5'};

  const pageSections: { [key: string]: (props: sectionProps) => JSX.Element } = {
    StartNav: (props) => StartNav(props),
    BlackHoles: (props) => BlackHoles(props),
    SolarSystem: (props) => SolarSystem(props),
    Galaxies: (props) => Galaxies(props),
    Meteors: (props) => Meteors(props),
  }

  const backgroundX = backgroundCoords[0] - 8 * mouseX;
  const backgroundY = backgroundCoords[1] - 8 * mouseY;

  const handleTransition = (direction: string) => {
    setTransitionDirection(direction);
    slideBackground({
      backgroundCoords,
      setBackgroundCoords,
      direction
    });
  }

  return (
    <main className={`${styles.main} appBackground`}
      style={{
        backgroundPosition: `${backgroundX}% ${backgroundY}%`
      }}
    >
      <AnimatePresence exitBeforeEnter={true} custom={transitionDirection}>
        {pageSections[activeSection]({
          setActiveSection,
          handleTransition,
          transitionDirection,
          transitionProps,
          variants
        })}
      </AnimatePresence>
    </main>
  )
}

export default Home
