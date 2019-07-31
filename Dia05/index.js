const request = require("request");

const getName = (num) =>{

    return new Promise((resolve,reject)=>{

        request.get(`https://swapi.co/api/films/${num}/`,( error, response,body)=>{

                    const character = JSON.parse(body);
                    response.statusCode === 200
                    ? resolve (character)
                    : reject(`Error en la peticion: ${response.statusCode}`)
        });

    });
}

getName(1).then(data =>{
    console.log(data)
});
