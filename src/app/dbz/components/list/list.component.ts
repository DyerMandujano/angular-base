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
    name:'Trunks',
    power:50
    }
  ]

  //EL 'EventEmitter<T>' ES FLEXIBLE YA QUE PUEDE EMITIR STRINGS, NUMBERS,ETC. PORQUE ES DE TIPO GENERICO '<T>'
  //Utilizamos la interfaz 'EventEmitter' PORQUE VA A EMITIR INDICES DE TIPO 'number' ES POR ELLO Q COLOCAMOS DENTRO DE LOS '<>'.
  //LUEGO LA VARIABLE 'onDelete' SERÁ IGUALADA A UNA NUEVA INSTANCIA DEL 'EventEmitter'
  //*COLOCAMOS EL DECORADOR ' @Output()' PARA QUE EL MAIN-PAGE PUEDA CONECTARSE Y ESCUCHAR LA VARIABLE 'onDelete'
  //!NOTA: DENTRO DE LOS PARENTESIS DEL DECORADOR DEL 'Output', LE PODEMOS CAMBIAR DE NOMBRE A LA PROPIEDAD ESTABLECIDA. SIN EMBARGO, SI NO SE LE COLOCA NADA EN LOS PARENTESIS, VA A TOMAR POR DEFAULT EL NOMBRE DE LA PROPIEDAD YA DEFINIDA.
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


onDeleteCharacter(indice:number):void{
  //*Emitir el ID del Personaje
  this.onDelete.emit(indice);
  console.log({indice});
  

}


}
