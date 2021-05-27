import { useState } from 'react';

export const useRecord = (x) => {
    const [before, setBefore] = useState([]);
    const [current, setCurrent] = useState(x);
    const [after, setAfter] = useState([]);

    const undo = () => {
        setAfter(after => [current, ...after]);
        setCurrent(before[before.length - 1]);
        setBefore(before => before.slice(0, -1));
    }
    const redo = () => {
        setBefore(before => [...before, current]);
        setCurrent(after[0]);
        setAfter(after => after.slice(1));
    }

    const record = value => {
        setBefore(before => [...before, current]);
        setCurrent(value);
    }

    return {
        undo,
        redo,
        record,
        current
    }
}