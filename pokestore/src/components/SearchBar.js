import React, { useState } from 'react';
import pokeapi from '../pokeapi';
import './SearchBar.css';

export default function SearchBar(props) {
    const [ pokemon, setPokemon ] = useState('');
    const [ erro, setErro ] = useState(false);

    function Search() {

        pokeapi.get(`${pokemon}`)
            .then(response => {
                const repositories = response.data;
                const repositoriesName = [];

                console.log(response.data);
                
                repositoriesName.push(repositories.name);

                localStorage.setItem('repositories.Name', JSON.stringify(repositoriesName));

                setErro(false);
            })
            .catch(error => {
                setErro(true);
            });
    }

    return (
        <div className="searchbar">
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label> Pokémon Search </label>

                        <input
                            type="text"
                            placeholder="pokémon"
                            value={pokemon}
                            onChange={e => setPokemon(e.target.value)}
                        />

                        <button type="button" onClick= {Search} className="ui icon button">
                        <i className="search icon"></i>
                        </button>
                    </div>    
                </form>
            </div>
        
            { erro ? <span className="error">Ocorreu um erro. Tente novamente.</span> : '' }
        </div>
        
    );
}