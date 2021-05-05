import React, { useState, useEffect, useRef } from 'react';
// TODO
function useInterval(callback, delay) {
    const savedCallback = useRef<any | null>(null);

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        return undefined;
    }, [delay]);
}

export default useInterval;
