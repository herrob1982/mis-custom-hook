
import React, { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

    const isMounted = useRef(true);

    useEffect(() => {
        
        return () => {
            isMounted.current = false;    //cuando se desmonta el componente
        }
    }, [])

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        
        setState({
            data: null,
            loading: true,
            error: null
        });


        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if(isMounted.current){
                        setState( {
                            loading: false,
                            error: null,
                            data: data
                        });    
                    }
                    else {
                        console.log('No se Monto');
                    }
                }, 1000);
                
            });

    }, [url])

    return state;

}

