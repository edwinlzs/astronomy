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
                <div id={styles.sun}>

                </div>
            </div>
        </div>
    )
}

export default SolarSystemModel;