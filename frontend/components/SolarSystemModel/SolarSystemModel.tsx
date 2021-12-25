import styles from './SolarSystemModel.module.scss';

const SolarSystemModel = () => {
    return (
        <div id={styles.container}>
            <div id={styles.solarSystem}>
                <div id={styles.mercury} className={styles.orbit}>

                </div>
                <div id={styles.sun}>
                    
                </div>
            </div>
        </div>
    )
}

export default SolarSystemModel;