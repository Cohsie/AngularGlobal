import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  standalone:false,
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {
  @Output()
  public onNewPersonaje: EventEmitter<Personaje>=new EventEmitter();//Aquí se crea un EventEmitter de nombre "Personaje"


  public personaje:Personaje={//Estos son los datos del "Personaje"
    nombre: '',
    fuerza: 0
  };

  // Creacion del metodo
  public addPersonaje():void{ //Y este es el método que lo crea
    console.log(this.personaje);

    this.onNewPersonaje.emit(this.personaje)

    // Inicializamos los valores
    this.personaje.nombre = '';
    this.personaje.fuerza = 0;
  }

}
