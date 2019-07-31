let criatura;

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


fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(pokemon => {

    if (pokemon.status === 200) {
        console.log('Pokemon encontrado');
        pokemon.json().then(data => {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success')
            // criatura = data;
            criatura = new pokemon(

                data.nombre,
                data.imagen.sprites: {},
                data.id.id,
                data.mov1.moves[0].move.name,
                data.mov1.moves[1].move.name,
                data.mov1.moves[2].move.name,
                data.mov1.moves[3].move.name
            )
        });

    }

    else {
        alert('pokemon no encontrado');
    }

});

setTimeout(() => {
    console.log(criatura)
}, 3000);

