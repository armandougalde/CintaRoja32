import React, { Component } from 'react'
import Pelicula from './Pelicula'
import axios from 'axios'

export class ListaPeliculas extends Component {
    state = {
        peliculas: [  ]
    } 
    //Métodos de ciclo de vida

    componentDidMount(){
        //console.log("DidMount");
        

    }

    componentWillMount(){
        console.log("WillMount");
        axios.get("https://cinta-roja32.herokuapp.com/api/v1/pelicula")
        .then(peliculas =>{
            console.log(peliculas.data)
            console.log(peliculas)
            this.setState({
                Peliculas: peliculas.data
            });
        }).catch(err=> console.log(err))
    }

    componentDidUpdate(){
        console.log("DidUpdate");
    }

    render() {
    //Buen lugar para asignar variables
        console.log("Render");
        const {peliculas} = this.state;
        return (
            <div className="container">
            <h1>Lista de Peliculas</h1>
            <div className="row">
            {peliculas.map(pelicula =>(
                
                    <Pelicula
                        key={pelicula.movieId}
                        pelicula={pelicula}
                    />
                    
                ))}
            </div>
                
            </div>
        )
    }
}

export default ListaPeliculas;
