// referenced https://github.com/townofdon/yt-react-parallax
import { createContext, useContext, useEffect, useState } from 'react';
import { WrapperProps } from '../lib/commonTypes';

const GlobalMourseCoordsContext = createContext<[number, number] | undefined>(undefined);

export const GlobalMouseMoveProvider = ({ children }: WrapperProps) => {
    const [mouseCoords, setMouseCoords] = useState<[number, number]>([
       0, // x
       0, // y
    ]);

    useEffect(() => {
        let currentMouseX = 0;
        let currentMouseY = 0;
        let currentWinWidth = window.innerWidth || 0;
        let currentWinHeight = window.innerHeight || 0;
        let prevMouseX = currentMouseX;
        let prevMouseY = currentMouseY;
        let prevWinWidth = currentWinWidth;
        let prevWinHeight = currentWinHeight;

        const onTick = () => {
            if (
                prevMouseX !== currentMouseX ||
                prevMouseY !== currentMouseY ||
                prevWinWidth !== currentWinWidth ||
                prevWinHeight !== currentWinHeight
            ) {
                setMouseCoords([
                    // horizontal distance from center of screen (1 left, 0 center, -1 right)
                    (currentWinWidth * 0.5 - currentMouseX) / (currentWinWidth * 0.5),
                    // vertical distance from center of screen (1 top, 0 center, -1 bottom)
                    (currentWinHeight * 0.5 - currentMouseY) / (currentWinHeight * 0.5),
                ]);
            }

            prevMouseX = currentMouseX;
            prevMouseY = currentMouseY;
            prevWinWidth = currentWinWidth;
            prevWinHeight = currentWinHeight;
            window.requestAnimationFrame(onTick);
        };
        onTick();

        const onMouseMove = (e: MouseEvent) => {
            currentMouseX = e.clientX;
            currentMouseY = e.clientY;
        };

        const onResize = () => {
            currentWinHeight = window.innerHeight || 0;
            currentWinWidth = window.innerWidth || 0;
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', onResize);
        return () => {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('resize', onResize);
        };
    }, [setMouseCoords]);

    return <GlobalMourseCoordsContext.Provider value={mouseCoords}>{children}</GlobalMourseCoordsContext.Provider>
};

export const useGlobalMouseMove = () => {
    const mouseCoords = useContext(GlobalMourseCoordsContext);
    if (mouseCoords === undefined) throw new Error('useGlobalMouseMove must be used inside a GlobalMouseMoveProvider');
    return mouseCoords;
}