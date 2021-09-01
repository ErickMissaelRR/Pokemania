import {GET_POKEMONS, POKEMONS_ERROR, GET_POKEMON_BY_NAME, POKEMON_ERROR} from '../types'
import axios from 'axios'

export const getPokemons = () => async dispatch => {
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`)
        
        dispatch({
            type: GET_POKEMONS,
            payload: response.data
        })

    }
    catch(error){
        dispatch({
            type: POKEMONS_ERROR,
            payload: console.log(error)
        })
    }
}

export const getPokemon = (pokemonName) => async dispatch => {
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        
        dispatch({
            type: GET_POKEMON_BY_NAME,
            payload: response.data
        })

    }
    catch(error){
        dispatch({
            type: POKEMON_ERROR,
            payload: console.log(error)
        })
    }
}