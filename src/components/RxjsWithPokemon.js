import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { from, BehaviorSubject } from 'rxjs'
import { map, filter, delay, mergeMap } from 'rxjs/operators'
//https://www.youtube.com/watch?v=Urv82SGIu_0
const getPokemonByName = async name => {
    const { results: allPokemons } = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=1000"
    ).then(res => res.json());
    console.log(allPokemons);
    return allPokemons.filter(pokemon => pokemon.name.includes(name))
}
let searchSubject = new BehaviorSubject("")
let searchResultObservable = searchSubject.pipe(
    filter(val => val.length > 1),
    debounceTime(750),
    distinctUntilChanged(),
    mergeMap(val => from(getPokemonByName(val))),
)
const useObservable = (observable, setter) => {
    useEffect(() => {
        let subscription = observable.subscribe(result => {
            setter(result);
            subscription.unsubscribe();
        })
        return () => subscription.unsubscribe();
    }, [observable, setter])
}


function App() {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    useObservable(searchResultObservable, setResults)
    const handleSearch = e => {
        const newValue = e.target.value;
        setSearch(newValue);
        searchSubject.next(newValue)
    }
    return (

        <>
            <div>
                <input type="text" placeholder="Search" value={search}
                    onChange={handleSearch}
                />
                {results.map((value) => (
                    <div key={value.name}>{value.name}</div>
                ))}
            </div>
        </>
    )
}

export default App;