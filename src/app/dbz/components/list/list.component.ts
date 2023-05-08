import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //*EL DECORADOR 'Input' NOS PERMITE DEFINIR UNA PROPIEDAD QUE ES ENVIADA DESDE EL COMPONENTE PADRE AL COMPONENTE HIJO.
  //*ES DECIR, CON COLOCAR ESTE DECORADOR ENCIMA DE UNA PROPIEDAD, PUEDE RECIBIR UNA PROPERTY QUE CUMPLA CON LA MISMA ESTRUCTURA QUE TIENE DEFINIDA, ES DECIR DEBE SER UN ARRAY DE TIPO INTERFACE 'Character'
  //!NOTA: DENTRO DE LOS PARENTESIS DEL DECORADOR DEL 'INPUT', LE PODEMOS CAMBIAR DE NOMBRE A LA PROPIEDAD ESTABLECIDA. SIN EMBARGO, SI NO SE LE COLOCA NADA EN LOS PARENTESIS, VA A TOMAR POR DEFAULT EL NOMBRE DE LA PROPIEDAD YA DEFINIDA.
  @Input('listadoPersonajes')
  public characterList: Character[] =[
    {
    name:'',
    power:0
    }
  ]

  //EL 'EventEmitter<T>' ES FLEXIBLE YA QUE PUEDE EMITIR STRINGS, NUMBERS,ETC. PORQUE ES DE TIPO GENERICO '<T>'
  //Utilizamos la interfaz 'EventEmitter' PORQUE VA A EMITIR INDICES DE TIPO 'number' ES POR ELLO Q COLOCAMOS DENTRO DE LOS '<>'.
  //LUEGO LA VARIABLE 'onDelete' SERÁ IGUALADA A UNA NUEVA INSTANCIA DEL 'EventEmitter'
  //*COLOCAMOS EL DECORADOR ' @Output()' PARA QUE EL MAIN-PAGE PUEDA CONECTARSE Y ESCUCHAR LA VARIABLE 'onDelete'
  //!NOTA: DENTRO DE LOS PARENTESIS DEL DECORADOR DEL 'Output', LE PODEMOS CAMBIAR DE NOMBRE A LA PROPIEDAD ESTABLECIDA. SIN EMBARGO, SI NO SE LE COLOCA NADA EN LOS PARENTESIS, VA A TOMAR POR DEFAULT EL NOMBRE DE LA PROPIEDAD YA DEFINIDA.
  @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();

  public onDelete: EventEmitter<string> = new EventEmitter();


// onDeleteCharacter(indice:number):void{
//   //*Emitir el ID del Personaje
//   this.onDelete.emit(indice);
//   console.log({indice});
  

// }

onDeleteCharacter(id?:string):void{

  //?El símbolo de exclamación (!) se utiliza en este contexto para negar una expresión booleana.
  //!EN SINTESIS, SI LA CONDICIONAL TERMINA CON UN 'FALSE' FINALIZA LA EJECUCIÓN DEL METODO. EN CASO CONTRARIO TERMINA CON 'TRUE', SIGUE EJECUTANDO LAS DEMAS LINEAS DE CODIGO DE LA FUNCIÓN
  //Primera forma para la condicional
  //*SI EL 'id' es FALSY(es decir si su valor es null, undefined, false, 0 o una cadena de caracteres vacía ''), la expresión se evalúa como true. Luego el operador '!' niega esa expresión y la convierte en false. Dando como resultado el TERMINO DE LA EJECUCIÓN DE ESTE METODO gracias al 'return'
  if(!id) return;
  //segunda forma
  //*SI EL 'id' TIENE COMO VALOR 'undefined', EL METODO TERMINA LA EJECUCIÓN 
  if(id == undefined) return;

  //*Emitir el ID del Personaje
  this.onDelete.emit(id);
  console.log({id});
  

}


}
