import { NgModule } from "@angular/core";
import { ContadorComponent } from "./components/counter/contador.component";

//*ESTE MODULO TIENE COMO FINALIDAD AGRUPAR TODA LA FUNCIONALIDAD DEL 'CONTADOR'
//*ES POR ELLO QUE DENTRO DEL 'declarations' VAMOS A LLAMAR AL 'ContadorComponent' QUE ES EL A
@NgModule({
    declarations:[
        ContadorComponent
    ],
    //*Y PARA PODER UTILIZAR ESTE MODULO DE FORMA GLOBAL TENEMOS QUE EXPORTARLO, ES POR ELLO QUE ESTAMOS UTILIZANDO 'exports' Y DENTRO DE ESTE COLOCAMOS EL 'ContadorComponent'
    exports:[
        ContadorComponent
    ]
})
export class CounterModule{

}