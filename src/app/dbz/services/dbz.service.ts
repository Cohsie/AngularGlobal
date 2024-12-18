import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface'

@Injectable({providedIn: 'root'})
export class DbzService { //Aquí poner el nombre del servicio
  constructor() { }
  public personajes:Personaje[]=[{
    nombre:'Goku',
    fuerza:1500
  },{
    nombre: 'Mi padre',
    fuerza: 9999
  }];

public onNewPersonaje(personaje:Personaje):void{
  console.log('MainPage')
  console.log(personaje)
}

public onDeletePersonaje(indice:number):void{
  let eliminado = this.personajes.splice(indice, 1)
  console.log(eliminado)

}
}
