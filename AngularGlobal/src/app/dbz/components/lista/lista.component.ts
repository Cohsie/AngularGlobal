import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';


@Component({
  selector: 'dbz-lista',
  standalone:false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  @Input()
  public listaPersonajes:Personaje[]=[{
    nombre: '',
    fuerza: 0
  }]

  @Output()
  public onDeletePersonaje: EventEmitter<Personaje>=new EventEmitter();

  public deletePersonaje():void{
    this.listaPersonajes.splice(0, 1);
  }

}
