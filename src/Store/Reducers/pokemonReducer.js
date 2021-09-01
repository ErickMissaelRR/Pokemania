import {GET_POKEMONS} from '../types'
import {GET_POKEMON_BY_NAME} from '../types'

const initialState = {
    pokemons: [],
    loading: true
}

export default function reducerPok(state = initialState, action){

    switch(action.type){
        
        case GET_POKEMONS: 
            return{
                ...state, 
                pokemons: action.payload.results,
                loading: false
            }
            default: return state
    }
};

export function reducerSetPok(state = initialState, action){
    switch(action.type){
        
        case GET_POKEMON_BY_NAME: 
            return{
                ...state, 
                pokemon: action.payload.results,
                loading: false
            }
            default: return state
    }
}