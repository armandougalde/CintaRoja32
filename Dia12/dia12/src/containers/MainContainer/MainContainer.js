import React, { Component } from 'react'
import axios from 'axios'
import Card from '../../components/Card/Card';


export class MainContainer extends Component {

    state = {

        pokemon: {}
    }
    findPokemon() {
        //     const name = this.setState.name
        // axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        //     .then(pokemon => {
        //         this.setState({ pokemon: pokemon.data })
        //     })
        const name = this.setState.name
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((pokemon) => {
                return pokemon.json()
            })
            .then((pokemon) => {
                this.setState({ pokemon: pokemon })
            })
    }


    handleChange(event) {

        this.setState({ name: event.target.value });


    }

    componentWillMount() {
        this.findPokemon("");

    }

    render() {
        return (
            <div >
                <div className="container">
                    <input type="text" onChange={this.handleChange.bind(this)} />
                    <button type="button" className="btn btn-primary" onClick={this.findPokemon}>Find</button>
                    <Card />

                </div>

            </div>
        )
    }
}

export default MainContainer
