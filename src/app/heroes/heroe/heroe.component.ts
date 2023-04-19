import { Component } from '@angular/core';
@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'Iron Man';
    edad: number = 45;

    //AGREGAMOS UN GET PARA OBTENER EL NOMBRE EN MAYUSCULA
    //*SI QUEREMOS UTILIZAR ESTE 'GET' EN ALGUNA OTRA PARTE DEL CODIGO, AL MOMENTO DE LLAMARLO NOS APARECERÁ COMO SI FUERA UNA 'PROPIEDAD' Y NO COMO UNA FUNCION
    //!NOTA: SI LLAMAMOS AL 'GET' EN EL HTML, NO ES NECESARIO COLOCARLE LOS PARENTESIS '()' AL FINAL. ES DECIR, SOLO BASTA CON COLOCAR EL NOMBRE DEL 'get' QUE EN ESTE CASO ES'nombreCapitalizado'
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}` 
    }

    cambiarNombre(){
        this.nombre = 'Spiderman';
    }

    cambiarEdad(){
        this.edad = 19;
    }

    Reset(): void{
        this.nombre = 'Iron Man';
        this.edad = 45;
    }
}