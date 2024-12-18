import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';


@Component({
  selector: 'dbz-lista',
  standalone:false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  @Input()//El input lo hace desde main-page.components.ts
  public listaPersonajes:Personaje[]=[{
    nombre: '',
    fuerza: 0
  }]

  @Output()//El output lo hace desde main-page.components.html
  public onDeletePersonaje: EventEmitter<number>=new EventEmitter();

  public deletePersonaje(indice:number):void{
    this.onDeletePersonaje.emit(indice);
  }

}
