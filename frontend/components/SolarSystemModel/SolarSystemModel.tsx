// inspired by and references https://codepen.io/juliangarnier/pen/idhuG
import { useState } from 'react';
import ElasticTabs from '../ElasticTabs/ElasticTabs';
import styles from './SolarSystemModel.module.scss';

type SystemObject = {
    name: string,
    order: string
}

const systemObjects: SystemObject[] = [
    {
        name: 'Mercury',
        order: '1st',
    },
    {
        name: 'Venus',
        order: '2nd',
    },
    {
        name: 'Earth',
        order: '3rd',
    },
    {
        name: 'Mars',
        order: '4th',
    },
    {
        name: 'Jupiter',
        order: '5th',
    },
    {
        name: 'Saturn',
        order: '6th',
    },
    {
        name: 'Uranus',
        order: '7th',
    },
    {
        name: 'Neptune',
        order: '8th',
    },
]

const SolarSystemModel = () => {
    const [selected, setSelected] = useState<string>('Earth');
    const selectedStyles = {
        orbit: {
            border: '3px solid rgba(255, 255, 255, 0.8)',
        },
        dl: {
            display: 'block',
            opacity: '1',
            transform: 'rotateX(0deg)',
        }
    }

    return (

        <div id={styles.container}>
            <div id={styles.solarSystem}>
                {
                    systemObjects.map((object: SystemObject) =>
                        <div
                            key={object.name}
                            id={styles[object.name.toLowerCase()]}
                            className={styles.orbit}
                            style={selected === object.name ? selectedStyles.orbit : {}}
                        >
                            <div className={styles.pos}>
                                <div className={styles.planet}>
                                    {
                                        object.name === 'Saturn'
                                            ?
                                            <div className={styles.ring}>
                                            </div>
                                            :
                                            ""
                                    }
                                    <dl
                                        className={styles.info}
                                        style={selected === object.name ? selectedStyles.dl : {}}
                                    >
                                        <dt>
                                            {object.order} {object.name}
                                        </dt>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div id={styles.sun}>
                </div>
            </div>
            <ElasticTabs tabs={systemObjects.map(object => object.name)} selected={selected} setSelected={setSelected}/>
        </div>
    )
}

export default SolarSystemModel;