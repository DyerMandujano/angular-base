import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
   constructor(
    //*Para inyectar las dependencias de un servicio, lo tenemos que colocar en los parametros del constructor de la clase en cuestion.
    //!En este caso, al parametro 'dbzService' le estamos inyectando las dependencias del servicio 'DbzService'.
    //?Gracias a esta inyeccion de dependencia, Se habilitará en todo el componente del 'MainPageComponent' TODA LA INFORMACIÓN QUE SE ENCUENTRE EN EL SERVICIO 'dbz.service.ts'
    //COLOCAMOS ESTE SERVICIO COMO PRIVADO POR SEGURIDAD, YA QUE MEDIANTE LA INSTANCIA DEL MAINPAGE SE PODRIA MODIFICAR LA DATA DE LOS SERVICIOS.
    private dbzService: DbzService
   ){
        
   }


   //!SIEMPRE LOS SERVICIOS SON PRIVADOS, POR LO CUAL PARA HACER USO DE SUS ATRIBUTOS O METODOS DEBEMOS CREAR GETTERS, SETTERS O METODOS CON LA MISMA CANTIDAD DE PARAMETROS Y TAMBIEN SI DEVUELVEN UN VALOR EN ESPECIFICO O ES VOID, EN EL ARCHIVO QUE DESEAMOS CONSUMIR ESOS SERVICIOS.

   //*Creamos un Getter 'characters' que va a regresar un arreglo de tipo 'Character' CON LA FINALIDAD DE OBTENER TODOS ESTOS PERSONAJES A TRAVES DE UN SERVICIO PRIVADO
   //Y PARA UTILIZAR ESTE METODO SOLO LO TENDREMOS QUE COLOCARLO EN EL HTML
   get characters(): Character[]
   {
    //EN ESTE CASO VAMOS A RETORNAR UNA COPIA DE LOS CHARACTERS YA QUE SE ESTA UTILIZANDO EL OPERADOR DE PROPAGACIÓN '(...)' 
        return [...this.dbzService.characters];
   }

   //Creacion del Metodo 'onDeleteCharacter' PARA CONSUMIR EL SERVICIO Y HACER USO DE LA FUNCION 'deleteCharacterById(id)'
    //Y PARA UTILIZAR ESTE METODO SOLO LO TENDREMOS QUE ASIGNARLO EN EL HTML A SU RESPECTIVO EVENTO
   onDeleteCharacter(id:string):void{
        this.dbzService.deleteCharacterById(id);
   }

   //Creacion del Metodo 'onNewCharacter' PARA CONSUMIR EL SERVICIO Y HACER USO DE LA FUNCION 'addNewCharacter(character)'
   //Y PARA UTILIZAR ESTE METODO SOLO LO TENDREMOS QUE ASIGNARLO EN EL HTML A SU RESPECTIVO EVENTO
   onNewPersonaje(character:Character):void{
        this.dbzService.addNewCharacter(character);
   }
}