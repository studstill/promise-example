'use strict';

const request = require('superagent');
const pokedex = {
  1: 'Not-yet-caught'
};

const pokeRequest = () => {
  return new Promise((resolve, reject) => {
    request
      .get('http://pokeapi.co/api/v2/pokemon/1')
      .end(function(err, res){
        try {
          if (res.error) reject(res.error);
          let caughtPokemon = JSON.parse(res.text);
          pokedex[caughtPokemon.id];
          resolve(caughtPokemon);
        } catch(err) {
          reject(err);
        }
      });
  });
};

const printPokemon = (data) => {
  console.log('Our pokedex contains', data.name, 'ID:', data.id);
};
const handleError = (err) => {
  console.log('Error:', err.status)
}

pokeRequest().then(printPokemon).catch(handleError);
