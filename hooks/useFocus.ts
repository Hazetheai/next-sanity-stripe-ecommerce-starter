import React, { useRef } from 'react';
const useFocus = (): [React.MutableRefObject<HTMLElement | null>, () => void] => {
    const htmlElRef = useRef<HTMLElement | null>(null);
    function setFocus() {
        htmlElRef?.current?.focus();
    }

    return [htmlElRef, setFocus];
};

export default useFocus;
