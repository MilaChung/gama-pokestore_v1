import React from 'react';

const PokemonItem = ({ pokemon, onPokemonSelect }) => {
    return (
        <div className="poke-item item">
            <img
                className="ui image"
                alt={pokemon.name}
                src={pokemon.sprites.front_default}
            />

            <div className="content">
                <div className="header"> {pokemon.name} </div>
            </div>
        </div>
    );
}

export default PokemonItem;