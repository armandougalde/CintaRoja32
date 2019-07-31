class Maestro{

    constructor(calificaciones){
        this.calificaciones = calificaciones;
    }

 carcularPromedio(){
     var noCalificaciones = this.calificaciones.length;
     var sumatoriaCalificaciones = 0;
     this.calificaciones.forEach(function(cal){
         sumatoriaCalificaciones+=cal;

     });
     return sumatoriaCalificaciones / noCalificaciones;
 }

}


class MaestroDeFisica extends Maestro{

    constructor(calificaciones, antiguedad){
        super(calificaciones);
        this.antiguedad = antiguedad;
        this.materia = "fisica";

    }

}

var mestro = new Maestro([9,8,7]);
var fisica = new MaestroDeFisica([9,3,2],45);

console.log(Maestro);
console.log()
