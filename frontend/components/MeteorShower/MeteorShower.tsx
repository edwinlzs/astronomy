import styles from './MeteorShower.module.scss';
import Meteor from '../Meteor/Meteor';

const MeteorShower = () => {
    return (
        <>
            {
                [...Array(20)].map((e, i) => <Meteor key={i} />)
            }
        </>
    )
}

export default MeteorShower;