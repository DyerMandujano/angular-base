import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes:string[] = ["Spiderman","Hulk","Thor","Ant-Man","Hawk eye"];
  heroedelete: string[] = []
  heroedelete2: string = ''
  mostrarBoton: boolean = true;
  rheroes: string[] = [];

  //ELEMENTO BORRADO ALMACENARLO EN UNA LISTA
  borrarHeroe(){
    //!NOTA: EL METODO 'shift' APARTE DE BORRAR EL PRIMER ELEMENTO DEL ARRAY, DEVUELVE O RETORNA ESE ELEMENTO ELIMINADO. PERO EN CASO DEVUELVA UN UNDEFINED , EN ESTA LINEA DE CODIGO LE COLOCAMOS ESTAS BARRAS '||' Y A LA DERECHA COMILLAS SIMPLES HACIENDO REFERENCIA A UN STRING VACIO, CON LA CUAL LE ESTAMOS DICIENDO QUE SI NOS DEVUELVE ESTE UNDEFINED QUE NOS DEVUELVA UN STRING VACIO.
    const heroeborrado = this.heroes.shift() || '';
    console.log(heroeborrado)
    this.heroedelete.push(heroeborrado)
  }

  //ELIMINAR EL ELEMENTO SIN ALMACENARLO EN LISTA
  deleteHeroe(){
    this.heroedelete2 = this.heroes.shift() || '';
    
    if(this.heroedelete2 != ''){
      this.rheroes.push(this.heroedelete2)
    }else{
      this.mostrarBoton = false;
    }
    
  }
  ResetHeroes(){
    this.rheroes;
    console.log(this.rheroes)
  }
}
