import React from 'react';

const PokemonItem = ({ repositories }) => {
    return (
        <div className="poke-item item">
            <img
                className="ui image"
                alt={repositories.data.name}
                src={repositories.data.sprites.front_default}
            />

            <div className="content">
                <div className="header"> {repositories.name} </div>
            </div>
        </div>
    );
}

export default PokemonItem;