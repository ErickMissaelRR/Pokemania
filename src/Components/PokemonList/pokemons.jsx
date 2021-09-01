import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getPokemons, getPokemon } from '../../Store/Actions/pokemonActions'

class pokemons extends Component {

    componentDidMount(){
        this.props.getPokemons()
    }

    render() { 

        const {pokemons} = this.props.pokemons;
        console.log(this.props.pokemons)

    return (
        <div>
            { pokemons.map( r => 
                <li key = {r.name} >
                    {r.name}
                </li> 
            )}
        </div>
        )
    }
    }

    const mapStateToProps = (state) => (
        {
            pokemons:state.pokemons
        }
    )

    export default connect(mapStateToProps, {getPokemons})(pokemons)
    
