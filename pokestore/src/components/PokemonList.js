import React, { useState, useEffect } from 'react';
//import PokemonItem from './PokemonItem';
import SearchBar from './SearchBar'
import pokeapi from '../pokeapi';

export default function PokemonList () {
    const [ repositores, setRepositories ] = useState([]);
    const [ pokemon, setPokemon ] = useState('');

    useEffect(() => { 
    //   let repositoriesName = localStorage.getItem('repositoriesName');
  
    //   if (repositoriesName !== null) {
    //     repositoriesName = JSON.parse(repositoriesName);
  
    //     setRepositories(repositoriesName);
    //     localStorage.clear();
    //   }
    // }, []

        pokeapi.get(`${pokemon}`)
            .then(response => {
                setRepositories(response.data.name);
                console.log("resultado", repositores);
            })
    });

    return(
        <div>
            <h1> pokemon </h1>

            <ul>                
                {/* {repositories.map(repository => {
                        return (
                        <li> {repository.name} </li>
                        ); 
                })} */}
            </ul>
        </div>
    );
    
}

              

// const PokemonList = ({ repositores }) => {
//     const renderList = repositores.map(poke => {
//         return <PokemonItem
//                     key={poke.id}
//                     poke = {poke}
//                 />;
//     });

//     return <div className="ui relaxed divided list"> {renderList} </div>;
// }
//export default PokemonList;