import { useState } from 'react';
import styles from './SolarSystemModel.module.scss';

const SolarSystemModel = () => {
    const [selected, setSelected] = useState<string>('earth');
    const systemObjects = [
        'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune',
    ]

    return (

        <div id={styles.container}>
            <div id={styles.solarSystem}>
                {
                    systemObjects.map((object: string) =>
                        <div
                        key={object}
                        id={styles[object]}
                        className={styles.orbit}
                        style={selected === object ? {border: '1px solid rgba(255, 255, 255, 0.8)'} : {}}
                        >
                            <div className={styles.pos}>
                                <div className={styles.planet}>
                                    {
                                        object === 'saturn'
                                            ?
                                            <div className={styles.ring}>
                                            </div>
                                            :
                                            ""
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
                <div id={styles.sun}>
                </div>
            </div>
        </div>
    )
}

export default SolarSystemModel;