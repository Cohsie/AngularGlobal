import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface'
import {v4 as uuid} from 'uuid';1

@Injectable({providedIn: 'root'})
export class DbzService { //Aquí poner el nombre del servicio
  constructor() { }
  public personajes:Personaje[]=[{
    id: uuid(),
    nombre:'Goku',
    fuerza:1500
  },{
    id: uuid(),
    nombre: 'Mi padre',
    fuerza: 9999
  }];

  public onNewPersonaje(personaje:Personaje):void{
    const newPersonaje: Personaje = {...personaje}
    this.personajes.push(newPersonaje)
  }

//Esta función ha sido cambiada para el ejercicio 5.4 ELiminar por ID
  /*public onDeletePersonaje(indice:number):void{
    let eliminado = this.personajes.splice(indice, 1)
    console.log(eliminado)
  }*/

  public onDeletePersonaje(id:string) {
    this.personajes = this.personajes.filter(personaje => personaje.id !== id);
    console.log(id);

  }
}
