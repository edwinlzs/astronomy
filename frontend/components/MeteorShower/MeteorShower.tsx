import styles from './MeteorShower.module.scss';
import Meteor from '../Meteor/Meteor';

const MeteorShower = () => {
    return (
        <div className={styles.container}>
            {
                [...Array(10)].map((e, i) => <Meteor key={i} />)
            }
        </div>
    )
}

export default MeteorShower;