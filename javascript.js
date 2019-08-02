let criatura;
class pokemon {
    constructor(nombre, id, imagen, mov1, mov2, mov3, mov4) {
        this.nombre = nombre;
        this.id = id;
        this.imagen = imagen;
        this.mov1 = mov1;
        this.mov2 = mov2;
        this.mov3 = mov3;
        this.mov4 = mov4;


    }
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
                    Swal.fire({
                        title: 'Alert!',
                        text: 'You must type a pokemon name',
                        type: 'warning',
                        confirmButtonText: 'Aceptar'
        
                    })
                } else {
                    Swal.fire({
                        position: 'top-center',
                        type: 'success',
                        title: 'Your pokemon has been localizated ',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    
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

                let nombre = document.createElement("h1");
                let id = document.createElement("h5");
                let imagen = document.createElement("img");
                imagen.src = data.sprites.front_default;             
                let mov1 = document.createElement("h4");
                let mov2 = document.createElement("h4");
                let mov3 = document.createElement("h4");
                let mov4 = document.createElement("h4");
                

              
                document.getElementById("nombre").appendChild(nombre);
                document.getElementById("id").appendChild(id);                
                document.getElementById("imagen").appendChild(imagen);                      
                document.getElementById("poderes").appendChild(mov1);
                document.getElementById("poderes").appendChild(mov2);
                document.getElementById("poderes").appendChild(mov3);
                document.getElementById("poderes").appendChild(mov4);
                
                
                nombre.innerHTML = data.name;
                id.innerHTML = data.id;
                imagen.innerHTML = data.sprites.front_default;
                mov1.innerHTML = data.moves[0].move.name;
                mov2.innerHTML = data.moves[1].move.name;
                mov3.innerHTML = data.moves[2].move.name;
                mov4.innerHTML = data.moves[3].move.name;

                 //document.getElementById("menu").innerHTML = data.moves.move.name[0];
                // document.getElementById("menu").innerHTML = data.moves.move.name[1];
                // document.getElementById("menu").innerHTML = data.moves.move.name[2];
                // document.getElementById("menu").innerHTML = data.moves.move.name[3];

                document.getElementById("findText").value = "";
                
                
                     
            });

           
            clean();
        }

        else {
            Swal.fire({
                title: 'Error!',
                text: 'Pokemon was not found!!!',
                type: 'error',
                confirmButtonText: 'Aceptar'

            })
            document.getElementById("findText").value = "";
            
        }

        

    });



    setTimeout(() => {

    }, 3000);



}

let clean = () => {
    document.getElementById('nombre').innerHTML = '';
    document.getElementById('id').innerHTML = '';
    document.getElementById('imagen').innerHTML = '';
    document.getElementById('poderes').innerHTML = '';
    
  }













