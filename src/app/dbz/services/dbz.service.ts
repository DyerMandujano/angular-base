import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'


//*El decorador '@Injectable' LE DICE A ANGULAR QUE ES UN SERVICIO CUANDO COMPILE LA APLICACION
@Injectable({
    //!La propiedad 'providedIn: "root"' NOS SIMPLIFICA EL HECHO DE TENER QUE COLOCAR LOS SERVICIOS EN EL ARCHIVO 'app.module.ts' EN EL APARTADO DE 'providers'.
    //*Tambien gracias a esta propiedad nuestro servicio es un SINGLETON EN TODA LA APLICACIÓN.
    providedIn: 'root'
})
export class DbzService {
    //!PARA ENVIAR ESTE LISTADO DE PERSONAJES A OTRO COMPONENTE HIJO TENDREMOS QUE UTILIZAR LA ANOTACIÓN '@Input'. ESTA ANOTACIÓN DEBE SER COLOCADA EN EL COMPONENTE HIJO AL CUAL DESEAMOS PASARLE ESTA PROPIEDAD
    public characters: Character[] = [{
        id:uuid(),
        name:'Krilin',
        power:1000
    },{
        id:uuid(),
        name:'Goku',
        power:9500
    },{
        id:uuid(),
        name:'Vegeta',
        power:7500
    }];

 
    addNewCharacter(character: Character):void{

        const newCharacter: Character = {
            id : uuid(),
            //!Los 3 puntos significa que se esta utilizando el operador de propagración('...')
            //*Es decir, se está copiando todas las propiedades y valores del objeto 'character',que se encuentra en este caso como parametro, en el nuevo objeto 'newCharacter'.
            ...character
        };

    //*AÑADE UN OBJETO DE TIPO 'character' PROVENIENTE DEL COMPONENTE HIJO 'add-character.component.ts' MEDIANTE SU EVENTO '(onNewCharacter)' 
        this.characters.push(newCharacter);
    }

    //?ESTE METODO FUE DE PRUEBA PARA LA PRIMERA PARTE QUE SE HABIA ESTUDIADO, YA QUE NO ES RECOMENDABLE ELIMINAR LOS ELEMENTOS MEDIANTE SU INDICE
    // onDeleteCharacter(indice: number):void{
    //     //* ELIMINA UN OBJETO DEL ARRAY MEDIANTE EL INDICE PROVENIENTE DEL COMPONENTE HIJO 'list.component.ts' MEDIANTE SU EVENTO '(onDelete)'
    //     //! El metodo splice nos servira para eliminar un elemento del array dependiendo del indice que le pasemos.
    //     //?SINTAXIS: splice(posi_indice, num_de_elem_para_eliminar)
    //     //*DESPUES DE ESTOS DOS PARAMETROS, SE LE PUEDEN PASAR N PARAMETROS MÁS YA QUE SI SE DESEA QUE DESPUES DE ELIMINAR ESE ELEMENTO, ESTE SEA REEMPLAZADO POR OTRO.
    //     //!EN ESTE CASO NO SE COLOCO LOS OTROS PARAMETROS, PORQUE SOLO DESEO ELIMINAR EL ELEMENTO MAS NO REEMPLAZARLO POR OTRO.
    //     this.characters.splice(indice,1);
    // }

    deleteCharacterById(id:string):void{
        this.characters = this.characters.filter(character => character.id !== id)
    }
    
}