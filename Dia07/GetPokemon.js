//dependencias que necesitamos 
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const rp = require("request-promise");
//declaramos instancia y puerto en el que correra el servidor
const app = express();
const port = 3000;

//interpreta el request que viene desde el cliente
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

class pokemon {
    constructor(nombre, imagen, id, mov1, mov2, mov3, mov4) {

        this.nombre = nombre;
        this.imagen = imagen;
        this.id = id;
        this.mov1 = [mov1,
            mov2,
            mov3,
            mov4];

    }
}

const getPokemon = (pok) => {
    let options = {
        method: 'GET',
        uri: `https://pokeapi.co/api/v2/pokemon/${pok}/`,
        body: {
            some: 'payload'
        },
        json: true // Automatically stringifies the body to JSON
    };
    const json = rp(options);
    return json;
    
}

let getData = function () {

    let finder = document.getElementById("button-addon2").value;
    let findText = document.getElementById("findText").value;
    let url = "https://pokeapi.co/api/v2/pokemon/";

    let completa = url + findText;

    fetch(completa).then(res => {

        if (res.status === 200) {
            console.log('Pokemon encontrado');
            res.json().then(data => {

                if (document.getElementById("findText").value ==="") {
                    console.log("si");
                } else {
                    console.log("nop");
                    
                }
                
                criatura = new pokemon(

                    data.name,
                    data.id,
                    data.sprites.front_default,
                    data.moves[0].move.name,
                    data.moves[1].move.name,
                    data.moves[2].move.name,
                    data.moves[3].move.name
                )

                

              
                
                
                     
            });

           
            clean();
        }

        else {
            console.log("no");
            
        }

        

    });



    setTimeout(() => {

    }, 3000);



}



console.log(getPokemon());












//This line inizialized the server
app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});

