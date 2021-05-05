import { useState, useEffect } from 'react';

// CHECK: https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
export default function useKeyPress(targetkey: number | string) {
    const [keyPressed, setKeyPressed] = useState(false);

    useEffect(() => {
        let prevkey = '';

        function downHandler({ key }) {
            if (prevkey === targetkey) return;

            if (key === targetkey) {
                setKeyPressed(true);
                prevkey = key;
            }
        }

        function upHandler({ key }) {
            if (key === targetkey) {
                setKeyPressed(false);
                prevkey = '';
            }
        }

        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, [targetkey]);

    return keyPressed;
}
