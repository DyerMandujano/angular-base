import { Component,EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //EL 'EventEmitter<T>' ES FLEXIBLE YA QUE PUEDE EMITIR STRINGS, NUMBERS,ETC. PORQUE ES DE TIPO GENERICO '<T>'
  //Utilizamos la interfaz 'EventEmitter' PORQUE VA A EMITIR OBJETOS DE TIPO 'Character' ES POR ELLO Q COLOCAMOS DENTRO DE LOS '<>'.
  //LUEGO LA VARIABLE 'onNewCharacter' SERÁ IGUALADA A UNA NUEVA INSTANCIA DEL 'EventEmitter'
  //*COLOCAMOS EL DECORADOR ' @Output()' PARA QUE EL MAIN-PAGE PUEDA CONECTARSE Y ESCUCHAR LA VARIABLE 'onNewCharacter'
  //!NOTA: DENTRO DE LOS PARENTESIS DEL DECORADOR DEL 'Output', LE PODEMOS CAMBIAR DE NOMBRE A LA PROPIEDAD ESTABLECIDA. SIN EMBARGO, SI NO SE LE COLOCA NADA EN LOS PARENTESIS, VA A TOMAR POR DEFAULT EL NOMBRE DE LA PROPIEDAD YA DEFINIDA.
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character={
    name : '',
    power : 0,
  };

  emitCharacter():void{

    //SI EL CAMPO NOMBRE ESTA VACIO
    if(this.character.name == "") 
    {
      //*el código ejecuta return, lo que significa que finaliza su ejecución en ese punto y no se ejecutará el resto del código después de esta línea.
      return
    };
    //SI NO ENTRA AL IF, REALIZA ESTAS LINEAS DE CODIGO.
    //*la variable 'onNewCharacter' utiliza la funcion 'emit' el cual se utiliza para enviar un evento a los oyentes (listeners), que en este caso el oyente seria el Main-Page. Y como parametro del emit le estamos pasando el objeto character.
    //*Es decir, esta línea de código emite un evento 'onNewCharacter' y mediante la funcion 'emit' le colocamos como parametro el objeto 'character' . Esto permite que los listeners del evento puedan acceder a la información de 'character'.
    this.onNewCharacter.emit(this.character);
    console.log(this.character);
    this.character = {
      name : "",
      power:0
    };
  }

}
