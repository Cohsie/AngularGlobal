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
  public onDeletePersonaje: EventEmitter<string>=new EventEmitter();

  public deletePersonaje(id:string):void{
    this.onDeletePersonaje.emit(id);
  }

}
