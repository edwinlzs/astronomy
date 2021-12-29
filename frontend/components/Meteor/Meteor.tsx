import { useEffect, useState } from 'react';
import styles from './Meteor.module.scss';

const Meteor = () => {
    const [meteorStyles, setMeteorStyles] = useState({
        top: '',
        left: '',
    })

    useEffect(() => {
        setInterval(() => setMeteorStyles({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
        }), 2000)
            
    }, [])

    return <div className={styles.meteor} style={meteorStyles}/>
}

export default Meteor;