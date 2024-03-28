import {useRef} from "react";

function useDebounce(callback, delay) {
    const timerIdRef= useRef(null);

    function debounceCallback(...args) {
        clearTimeout(timerIdRef.current);

        timerIdRef.current= setTimeout(() => {
            callback(...args);
        }, delay)
    }
    return debounceCallback;
}

export default useDebounce;