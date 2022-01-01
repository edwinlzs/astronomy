// referenced https://community.facer.io/t/tutorial-elliptical-motion/12614
import { useEffect, useState } from 'react';
import styles from './DustParticle.module.scss';

type DustParticleProps ={
    startX: number;
    startY: number;
}

const DustParticle = ({
    startX,
    startY
}: DustParticleProps) => {
    const rotateRadians = 0.785398;
    const speed = 0.001;
    const rangeX = 0.5;
    const rangeY = 0.2;
    const [angle, setAngle] = useState<number>(0);
    const [coords, setCoords] = useState<{x: number, y: number}>({
        x: 1000,
        y: 1000,
    })

    useEffect(() => {
        setCoords({
            x: coords.x + (rangeX * Math.cos(angle)*Math.cos(rotateRadians) - rangeY * Math.sin(angle)*Math.sin(rotateRadians)),
            y: coords.y + (rangeX * Math.cos(angle)*Math.sin(rotateRadians) + rangeY * Math.sin(angle)*Math.cos(rotateRadians)),
        })
        setAngle(angle + speed);
    }, [coords, angle])

    return <div
    className={styles.particle}
    style={{
        top: `${coords.x}px`,
        left: `${coords.y}px`
    }}
    />
}

export default DustParticle;