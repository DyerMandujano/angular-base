import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    //!PARA ENVIAR ESTE LISTADO DE PERSONAJES A OTRO COMPONENTE HIJO TENDREMOS QUE UTILIZAR LA ANOTACIÓN '@Input'. ESTA ANOTACIÓN DEBE SER COLOCADA EN EL COMPONENTE HIJO AL CUAL DESEAMOS PASARLE ESTA PROPIEDAD
    public characters: Character[] = [{
        name:'Krilin',
        power:1000
    },{
        name:'Goku',
        power:9500
    },{
        name:'Vegeta',
        power:7500
    }];
}