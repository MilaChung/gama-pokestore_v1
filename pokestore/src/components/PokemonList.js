import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemon, onPokemonSelect }) => {
    const renderList = pokemon.map(poke => {
        return <PokemonItem
                    key={pokemon.id}
                    poke = {poke}
                />;
    });

    return <div className="ui relaxed divided list"> {renderList} </div>;
}

export default PokemonList;