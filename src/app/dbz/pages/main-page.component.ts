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
    public dbzService: DbzService
   ){
        
   }

}