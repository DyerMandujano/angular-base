import {Component} from '@angular/core'
@Component({
    selector: 'app-contador',
    template: `<h1>Contador App</h1>
    <p>{{title}}</p>
    <!-- <button (click)="acumular(5)">+1</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-5)">-1</button> -->
    
    <button (click)="acumular(base)">+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">-{{base}}</button>
    ` 
})
export class ContadorComponent{
    title:string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    acumular( valor: number){
      this.numero += valor
    }
}