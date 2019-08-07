// const arreglo =["mazda","audi","honda"];

// const numeros = [2,4,6,8];

// let autos = arreglo.map(elemento =>"Auto "+elemento);
// console.log(autos);


// let  divNum = numeros.map(elemento =>numeros/2);
// console.log(divNum);

// Funciones
const getPokemon = (name) => {
    let options = {
        method: 'GET',
        uri: `https://pokeapi.co/api/v2/pokemon/${name}/`,
        body: {
            some: 'payload'
        },
        json: true
    };
    const json = rp(options);
    return json;
}

console.log(getPokemon);