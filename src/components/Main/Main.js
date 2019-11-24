import React, { useState, useCallback, useMemo } from 'react';
import { Button, Header, CountButton } from '../../components';

const Main = () => {
    const [count, setCount] = useState(1)
    const [calculationCount, setCalculationCount] = useState(1)

    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)

    const increment2 = () => setCount2(c => c + 1)
    const increment1 = () => setCount1(c => c + 1)
    const someMethod = (a, b) => {
        console.log('someMethod',a + b)
    }
    const setC = useCallback(() => setCount(state => state + 1), [])
    const setD = useCallback(() => {
        return setCalculationCount(state => state + count)
    }, [count])
    const c1 = useMemo(() => '#'+(Math.random()*0xFFFFFF<<0).toString(16), [count]);
    const c2 = useMemo(() => '#'+(Math.random()*0xFFFFFF<<0).toString(16), [calculationCount]);
    return (
        <div>
            <Header someMethod={someMethod} />
            <p>{count}</p>
            <p>{calculationCount}</p>
            <Button color={c1} callback={setC}>COunt</Button>
            <Button color={c2} callback={setD}>Calculation count</Button>
            <CountButton
                onClick={increment1}
                count={count1}
            />
            <CountButton
                onClick={increment2}
                count={count2}
            />
        </div>
    )
}

export default Main;
