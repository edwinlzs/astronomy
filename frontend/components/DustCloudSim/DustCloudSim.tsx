import styles from './DustCloudSim.module.scss';
import DustParticle from './DustParticle/DustParticle';

const DustCloudSim = () => {


    return (
        <div className={styles.container}>
            <DustParticle />
        </div>
    )
}

export default DustCloudSim;