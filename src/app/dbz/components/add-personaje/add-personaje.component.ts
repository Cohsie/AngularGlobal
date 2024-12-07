import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  standalone: false,
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {
  @Output()
  public onNewPersonaje: EventEmitter<Personaje>=new EventEmitter();


  public personaje:Personaje={
    nombre: '',
    fuerza: 0
  };

  // Creacion del metodo
  public addPersonaje():void{
    console.log(this.personaje);

    if (this.personaje.nombre.length === 0) return;//Pasar valores por referencia o por valor

    this.onNewPersonaje.emit(this.personaje)

    // Inicializamos los valores
    this.personaje ={
      nombre: '',
      fuerza: 0,
    }


    /*this.personaje.nombre = '';
    this.personaje.fuerza = 0;*/
  }

}
