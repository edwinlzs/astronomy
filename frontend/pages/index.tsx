import { Dispatch, SetStateAction, useState } from 'react';
import type { NextPage } from 'next';
import { AnimatePresence } from 'framer-motion';

import { useGlobalMouseMove } from '../hooks/useGlobalMouseMove';
import { useGlobalBackgroundCoords } from '../hooks/useGlobalBackgroundCenterCoords';
import styles from '../styles/Home.module.scss';
import { FramerAnimation, framerAnimations } from '../lib/framerAnimations';
import { slideBackground } from '../lib/animations';

import StartNav from './indexSections/StartNav';
import BlackHoles from './indexSections/BlackHoles';
import SolarSystem from './indexSections/SolarSystem';
import Galaxies from './indexSections/Galaxies';
import Meteors from './indexSections/Meteors';

export type sectionProps = {
  setActiveSection: Dispatch<SetStateAction<string>>;
  handleTransition: (direction: string) => void;
  animation: FramerAnimation;
}

const Home: NextPage = () => {
  const [mouseX, mouseY] = useGlobalMouseMove();
  const [backgroundCoords, setBackgroundCoords] = useGlobalBackgroundCoords();
  const [activeSection, setActiveSection] = useState<string>('StartNav');
  const [transition, setTransition] = useState<string>('slideUp');

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
    setTransition(direction);
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
      <AnimatePresence exitBeforeEnter={true}>
        {pageSections[activeSection]({
          setActiveSection,
          handleTransition,
          animation: framerAnimations[transition]
        })}
      </AnimatePresence>
    </main>
  )
}

export default Home
