import { NgModule } from '@angular/core';
//*PARA ESTE MODULO NECESITAMOS IMPORTAR LA CLASE 'CommonModule', YA QUE HACEMOS USO DE LAS DIRECTIVAS *ngIf - *ngFor EN LOS COMPONENTES DE 'Heroe' y 'listado'
//!NOTA: SE DEBE IMPORTAR LA CLASE 'CommonModule' EN EL MODULO EN EL CUAL SUS COMPONENTENTES HAGAN USO DE LAS DIRECTIVAS *ngIf - *ngFor. 
//!NOTA2: EN EL 'app.module.ts' NO ES NECESARIO AÑADIR ESTA CLASE 'CommonModule' YA QUE VIENE INCLUIDO IMPLICITAMENTE.
//!NOTA3: ESTA CLASE 'CommonModule' LA DEBEMOS COLOCAR EN EL APARTADO DE 'imports'

import {CommonModule} from '@angular/common'

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//*EL OBJETIVO DE UTILIZAR LOS MODULOS, ES QUE ESTÉN ENCAPSULADOS Y PROTEGIDOS TANTO DE INTERACCIONES EXTERNAS COMO INTERNAS.


@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        HeroeComponent,
        ListadoComponent 
    ],imports:[
        CommonModule
    ]
})
export class HeroesModule{

}