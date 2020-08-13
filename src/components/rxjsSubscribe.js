import {from} from 'rxjs'
import {map, filter} from 'rxjs/operators'

let numbersObservable = from([1, 2, 3, 4, 5]);
let squaredNumbers = numbersObservable.pipe(
    filter(val => val > 2),
    map(val=> val * val)
);

let subscription = squaredNumbers.subscribe(result =>{
    console.log(result);
    subscription.unsubscribe();
})
//if keep subscribe > 9 16 25
//if unsubscribe >  9 
document.getElementById("app").innerHTML = `<h1>hello</h1>`