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
        slideUp: {
            x: 0,
            y: 40
        },
        slideDown: {
            x: 0,
            y: -40
        },
        slideRight: {
            x: -40,
            y: 0
        },
        slideLeft: {
            x: 40,
            y: 0
        }
    }

    let newX = backgroundCoords[0] + directionValues[direction].x;
    let newY = backgroundCoords[1] + directionValues[direction].y;
    setBackgroundCoords([newX, newY])
}