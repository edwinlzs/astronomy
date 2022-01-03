// referenced https://community.facer.io/t/tutorial-elliptical-motion/12614
import { useEffect, useState } from 'react';
import styles from './DustParticle.module.scss';

type DustParticleProps ={
    startX: number;
    startY: number;
    rangeX: number;
    rangeY: number;
    startAngle: number;
    speed: number;
}

const DustParticle = ({
    startX,
    startY,
    rangeX,
    rangeY,
    startAngle,
    speed,
}: DustParticleProps) => {
    const rotateAngle = 0.785398; // 45 deg radians
    const [angle, setAngle] = useState<number>(startAngle);
    const [coords, setCoords] = useState<{x: number, y: number}>({
        x: startX,
        y: startY,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCoords({
                x: coords.x + (rangeX * Math.cos(angle)*Math.cos(rotateAngle) - rangeY * Math.sin(angle)*Math.sin(rotateAngle)),
                y: coords.y + (rangeX * Math.cos(angle)*Math.sin(rotateAngle) + rangeY * Math.sin(angle)*Math.cos(rotateAngle)),
            })
            setAngle(angle + speed);
        }, 20);
        return () => clearInterval(interval);
    });

        
    return <div
    className={styles.particle}
    style={{
        top: `${coords.x}%`,
        left: `${coords.y}%`
    }} 
    />
}

export default DustParticle;