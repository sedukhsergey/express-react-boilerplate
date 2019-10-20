import React, { useState, useCallback, useMemo } from 'react';
import { Button } from '../../components';

const Main = () => {
    const [count, setCount] = useState(1)
    const [calculationCount, setCalculationCount] = useState(1)
    const setC = useCallback(() => setCount(state => state + 1), [])
    const setD = useCallback(() => setCalculationCount(state => state + count), [])
    const c1 = useMemo(() => '#'+(Math.random()*0xFFFFFF<<0).toString(16), [count]);
    const c2 = useMemo(() => '#'+(Math.random()*0xFFFFFF<<0).toString(16), [calculationCount]);
    return (
        <div>
            <p>{count}</p>
            <p>{calculationCount}</p>
            <Button color={c1} callback={setC}>COunt</Button>
            <Button color={c2} callback={setD}>Calculation count</Button>
        </div>
    )
}

export default Main;
