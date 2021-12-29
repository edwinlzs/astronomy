// referenced https://codepen.io/malavigne/pen/grQGJd
import { CSSProperties } from 'react';
import styles from './ArrowButton.module.scss'

type ArrowButtonProps = {
    onClick: () => void;
    text: string,
    position: string;
}

const positionCSS: {
    [key: string]: {
        [key: string]: CSSProperties
    }
} = {
    'bottom': {
        content: {
            bottom: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
            flexDirection: 'column',
        },
        moreArrows: {
            transform: 'rotate(0deg)',
        }
    },
    'top': {
        content: {
            top: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
            flexDirection: 'column-reverse',
        },
        moreArrows: {
            transform: 'rotate(180deg)',
        }
    },
    'right': {
        content: {
            right: '5%',
            top: '50%',
            transform: 'translateY(-50%)',
            flexDirection: 'row'
        },
        moreArrows: {
            transform: 'rotate(270deg)',
        }
    },
    'left': {
        content: {
            left: '5%',
            top: '50%',
            transform: 'translateY(-50%)',
            flexDirection: 'row-reverse'
        },
        moreArrows: {
            transform: 'rotate(90deg)',
        }
    },
}

const ArrowButton = ({ onClick, text, position }: ArrowButtonProps) => {

    return (
        <div className={styles.content} onClick={onClick} style={positionCSS[position].content}>
            <p>{text}</p>
            <svg id={styles.moreArrows} style={positionCSS[position].moreArrows}>
                <polygon className={styles.arrowTop} points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
                <polygon className={styles.arrowMiddle} points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
                <polygon className={styles.arrowBottom} points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
            </svg>
        </div>
    )
}

export default ArrowButton;