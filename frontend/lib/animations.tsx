import { Dispatch, SetStateAction } from "react";

type BackgroundAnimationProps = {
    backgroundCoords: [number, number],
    setBackgroundCoords: Dispatch<SetStateAction<[number, number]>>,
    direction: string
}

export const slideBackground = ({
    backgroundCoords,
    setBackgroundCoords,
    direction
}: BackgroundAnimationProps) => {

    const directionValues: {
        [key: string]: {
            x: number,
            y: number
        }
    } = {
        up: {
            x: 0,
            y: 0.5
        },
        down: {
            x: 0,
            y: -0.5
        },
        right: {
            x: -0.5,
            y: 0
        },
        left: {
            x: 0.5,
            y: 0
        }
    }

    let transitioning = true;
    setInterval(() => {
        let timeElapsed: number = 0
        if (transitioning) {
            timeElapsed += 1;
            let newX = backgroundCoords[0] += directionValues[direction].x * timeElapsed;
            let newY = backgroundCoords[1] += directionValues[direction].y * timeElapsed;
            setBackgroundCoords([newX, newY]);
        }
        return;
    }, 5);
    setTimeout(() => transitioning = false, 1000)
}