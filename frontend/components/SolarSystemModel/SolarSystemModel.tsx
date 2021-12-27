import styles from './SolarSystemModel.module.scss';

const SolarSystemModel = () => {
    return (
        <div id={styles.container}>
            <div id={styles.solarSystem}>
                <div id={styles.mercury} className={styles.orbit}>
                    <div className={styles.pos}>
                        <div className={styles.planet}>
                        </div>
                    </div>
                </div>
                <div id={styles.venus} className={styles.orbit}>
                    <div className={styles.pos}>
                        <div className={styles.planet}>
                        </div>
                    </div>
                </div>
                <div id={styles.earth} className={styles.orbit}>
                    <div className={styles.pos}>
                        <div className={styles.planet}>
                        </div>
                    </div>
                </div>
                <div id={styles.mars} className={styles.orbit}>
                    <div className={styles.pos}>
                        <div className={styles.planet}>
                        </div>
                    </div>
                </div>
                <div id={styles.jupiter} className={styles.orbit}>
                    <div className={styles.pos}>
                        <div className={styles.planet}>
                        </div>
                    </div>
                </div>
                <div id={styles.saturn} className={styles.orbit}>
                    <div className={styles.pos}>
                        <div className={styles.planet}>
                            <div className={styles.ring}>

                            </div>
                        </div>
                    </div>
                </div>
                <div id={styles.uranus} className={styles.orbit}>
                    <div className={styles.pos}>
                        <div className={styles.planet}>
                        </div>
                    </div>
                </div>
                <div id={styles.neptune} className={styles.orbit}>
                    <div className={styles.pos}>
                        <div className={styles.planet}>
                        </div>
                    </div>
                </div>
                <div id={styles.sun}>
                </div>
            </div>
        </div>
    )
}

export default SolarSystemModel;