import { useEffect, useState } from 'react';
import styles from './Meteor.module.scss';

const Meteor = () => {
    const animationDuration = Math.max(Math.random() * 10, 2);
    const [meteorStyles, setMeteorStyles] = useState({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${animationDuration}s`,
        width: `${Math.max(Math.round(Math.random() * 250), 20)}px`,
        height: `${Math.round(Math.random() * 5)}px`,
    })

    useEffect(() => {
        setInterval(() => setMeteorStyles({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${animationDuration}s`,
            width: `${Math.max(Math.round(Math.random() * 250), 20)}px`,
            height: `${Math.round(Math.random() * 5)}px`,
        }), animationDuration*1000)
            
    }, [])

    return <div className={styles.meteor} style={meteorStyles}/>
}

export default Meteor;