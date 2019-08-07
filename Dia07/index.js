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


// importar clase pokemon

const {pokemon}=require('./pokemon');

app.get("/", (req, res) => {

    res.status(200).send({

        mensaje: "hola Mundo",

    });

});

app.get("/nombre", (req, res) => {

    res.status(200).send({

        nombre: "armando",
        cinta: "cinta roja"

    });

});

app.get("/prueba", (req, res) => {

    res.status(200).send({

        nombre: "pepe",
        cinta: "cinta negra"

    });

});


app.get("/pokemon:nombre", (req, res) => {

    const nombre = req.params;
    res.status(200).send();

});



//Query Parameters
app.get("/starwars", (req, res) => {

    console.log(req.query)

    res.status(200).send("funciona");

});


app.get("/suma", (req, res) => {

    const { num1, num2 } = req.query;
    let resultado = ((num1) + (num2))
    res.status(200).send({ resultado });
});


app.get("/mul", (req, res) => {

    const { num1, num2 } = req.query;
    let resultado = ((num1) * (num2))
    res.status(200).send({ resultado });
});

app.get("/div", (req, res) => {

    const { num1, num2 } = req.query;
    let resultado = ((num1) / (num2))
    res.status(200).send({ resultado });
});




app.get("/pokemon:nombre", (req, res) => {

    res.status(200).send(url);
});


//sytanxis

getPOkemon().then.().catch()





//This line inizialized the server
app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});

