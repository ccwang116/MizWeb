import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { from, BehaviorSubject } from 'rxjs'
import { map, filter, delay, mergeMap, debounceTime, distinctUntilChanged } from 'rxjs/operators'
//https://www.youtube.com/watch?v=Urv82SGIu_0
const getPokemonByName = async name => {
    const { results: allPokemons } = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=1000"
    ).then(res => res.json());
    // console.log(allPokemons);
    return allPokemons.filter(pokemon => pokemon.name.includes(name))
}
let searchSubject = new BehaviorSubject("")
let searchResultObservable = searchSubject.pipe(
    filter(val => val.length > 1),
    debounceTime(750),
    distinctUntilChanged(),
    mergeMap(val => from(getPokemonByName(val))),
)




function App() {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [urlRes,setUrlRes] = useState(null)
    const [imageUrl,setImageUrl] = useState("https://i0.wp.com/www.alphr.com/wp-content/uploads/2016/07/whos_that_pokemon.png")
    const useObservable = (observable, setter) => {
        useEffect(() => {
            let subscription = observable.subscribe(result => {
                setter(result);
                subscription.unsubscribe();
            })
            return () => subscription.unsubscribe();
        }, [observable, setter, search, results])
    }
    useObservable(searchResultObservable, setResults)
    const handleSearch = e => {
        const newValue = e.target.value;
        setSearch(newValue);
        searchSubject.next(newValue)
    }
    const getPokemonImg = async url => {
        await fetch(`${url}`).then(res => res.json()).then(
            data => {
                console.log(data);
                setImageUrl(data.sprites.front_default)
            });
        
        
    }
    return (

        <>
            <div>
                <input type="text" placeholder="Search" value={search}
                    onChange={handleSearch}
                /><button onClick={() => handleSearch}>search</button>
                <ul>
                    {results.map((value,idx) => (
                        <a key={idx} href="#" onClick={()=>getPokemonImg(value.url)}><li key={value.name}>{value.name}</li></a>
                    ))}
                </ul>
            </div>
            <div>
                <img style={{width:"320px",height:"320px"}} src={imageUrl} alt=""/>
            </div>
        </>
    )
}

export default App;