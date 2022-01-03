import { getRandomArbitrary } from '../../lib/randomNumberGeneration';
import SolarSystemModel from '../SolarSystemModel2/SolarSystemModel';
import styles from './DustCloudSim.module.scss';
import DustParticle from './DustParticle/DustParticle';

const DustCloudSim = () => {

    return (
        <div className={styles.container}>
            <SolarSystemModel
                tabs={false}
                orientation='2d'
            >
                {/* <DustParticle
                    startX={75}
                    startY={60}
                    speed={0.005}
                    rangeX={0.15}
                    rangeY={0.04}
                    startAngle={0}
                    /> */}
                {
                    
                    [...Array(2)].map((i) => 
                        <DustParticle 
                            key={i}
                            startX={75}
                            startY={60}
                            speed={getRandomArbitrary(0.004, 0.006)}
                            rangeX={getRandomArbitrary(0.145, 0.155)}
                            rangeY={getRandomArbitrary(0.035, 0.045)}
                            startAngle={0}
                        />
                    )
                }
            </SolarSystemModel>
            
        </div>
    )
}

export default DustCloudSim;