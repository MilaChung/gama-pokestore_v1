import React from 'react';

const PokemonList = ({ pokemon, pokemonSelect }) => {
    const renderList = pokemon.map(poke => {
        return <PokemonItem/>;
    });

    return <div className="ui relaxed divided list"> {renderList} </div>;
}

export default PokemonList;