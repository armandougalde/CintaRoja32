const request = require("request");

const rp = require("request-promise");

const getFilm=(num)=>{

let options = {
    method: 'GET',
    uri: `https://swapi.co/api/films/${num}/`,
    body: {
        some: 'payload'
    },
    json: true 
};

const json = rp(options);
return json;
}



getName(1).then(personaje =>{
    console.log(personaje);
     personaje.films.array.forEach(film => {
         let options ={
             method: 'GET',
             uri:film,
             body:{
                 some: 'playload'
             },
             json: true
         }

         rp(options).then(film=>{
             console.log(film)
         });
     });
});


// getFilm(1).then(data =>{
//     console.log(data)
// });
