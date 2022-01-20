

import { useState } from 'react';

export const useCounter = (inicial = 100) => {

    const [counter, setcounter] = useState(inicial);

    const reset = () => {
        setcounter(inicial);
    };

    const incrementoValorUno = () => {
        setcounter(counter + 1);
    };


    const incremento = (factor) => {
        setcounter(counter + factor);
    };

    const decremento = (factor) => {
        setcounter(counter - factor);
    };

    return {
        counter,
        incremento,
        decremento,
        reset,
        incrementoValorUno
    };

}
