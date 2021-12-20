// inspired by https://davidwalsh.name/css-flip
import styles from './FlipCard.module.scss';

type FlipCardProps = {
    front: JSX.Element;
    back: JSX.Element;
}

const FlipCard = ({ front, back }: FlipCardProps ) => {
    return (
        <div className={styles.container}>
            <div className={styles.flipper}>
                <div className={styles.front}>
                    {front}
                </div>
                <div className={styles.back}>
                    {back}
                </div>
            </div>
        </div>
    )
}

export default FlipCard;