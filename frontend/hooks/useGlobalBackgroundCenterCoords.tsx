import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { WrapperProps } from '../lib/commonTypes';

const GlobalBackgroundCoordsContext = createContext<[[number, number], Dispatch<SetStateAction<[number, number]>>] | undefined>(undefined);

export const GlobalBackgroundCoordsProvider = ({ children }: WrapperProps) => {
    const [backgroundCoords, setBackgroundCoords] = useState<[number, number]>([
        50,
        50
    ]);

    return <GlobalBackgroundCoordsContext.Provider value={[backgroundCoords, setBackgroundCoords]}>{children}</GlobalBackgroundCoordsContext.Provider>
}

export const useGlobalBackgroundCoords = () => {
    const backgroundContext = useContext(GlobalBackgroundCoordsContext);
    if (backgroundContext === undefined) throw new Error('useGlobalBackgroundCoords must be used inside a GlobalBackgroundCoordsProvider');
    return backgroundContext;
}