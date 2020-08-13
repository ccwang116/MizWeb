import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { from } from 'rxjs'
import { map, filter, delay, mergeMap } from 'rxjs/operators'

let numbersObservable = from([1, 2, 3, 4, 5]);
let squaredNumbers = numbersObservable.pipe(
    filter(val => val > 2),
    mergeMap(val => from([val]).pipe(delay(1000 * val))),
    map(val => val * val)
);

const useObservable = (observable, setter) => {
    useEffect(() => {
        let subscription = observable.subscribe(result => {
            setter(result);
            subscription.unsubscribe();
        }) 
        return ()=> subscription.unsubscribe();
    },[observable,setter])
}


function App() {
    const [currentNumber, setCurrentNumber] = useState(0)
    useObservable(squaredNumbers,setCurrentNumber)
    return (

        <>
        <div>
             <h1>{currentNumber}</h1>
        </div>
        </>
    )
}

export default App;