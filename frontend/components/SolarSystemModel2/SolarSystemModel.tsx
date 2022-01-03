// inspired by and references https://codepen.io/juliangarnier/pen/idhuG
import { useState } from 'react';
import ElasticTabs from '../ElasticTabs/ElasticTabs';
import styles from './SolarSystemModel.module.scss';

type SystemObject = {
    name: string;
    order: string;
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

type SolarSystemModelProps = {
    tabs: boolean;
    orientation: string;
    children?: JSX.Element | JSX.Element[];
}

const SolarSystemModel = ({ tabs, orientation, children }: SolarSystemModelProps) => {
    const orientationType = orientation === '2d' ? 'd2' : 'd3'
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
            <div id={styles.solarSystem} className={`${styles[orientationType]}`}>
                {
                    systemObjects.map((object: SystemObject) =>
                        <div
                            key={object.name}
                            id={styles[object.name.toLowerCase()]}
                            className={styles.orbit}
                            style={selected === object.name && tabs ? selectedStyles.orbit : {}}
                        >
                            <div className={`${styles.pos} ${styles[orientationType]}`}>
                                <div className={`${styles.planet} ${styles[orientationType]}`}>
                                    {
                                        object.name === 'Saturn'
                                            ?
                                            <div className={`${styles.ring} ${styles[orientationType]}`}>
                                            </div>
                                            :
                                            ""
                                    }
                                    <dl
                                        className={styles.info}
                                        style={selected === object.name && tabs ? selectedStyles.dl : {}}
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
                <div id={styles.sun} className={styles[orientationType]}>
                </div>
                {children}
            </div>
            {tabs ?
                <ElasticTabs tabs={systemObjects.map(object => object.name)} selected={selected} setSelected={setSelected} />
                :
                null}
        </div>
    )
}

export default SolarSystemModel;