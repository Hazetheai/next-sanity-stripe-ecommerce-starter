import React, { useEffect, useState } from 'react';
import { isBrowser } from '../utils/booleans';

function useWindowSize() {
    function getSize() {
        return {
            width: isBrowser ? window.innerWidth : 0,

            height: isBrowser ? window.innerHeight : 0,
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isBrowser) return;

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

export default useWindowSize;
