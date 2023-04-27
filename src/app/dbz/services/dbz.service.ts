import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  // Definimos un arreglo de characteres
  public character: Character[] = [{
    // Creamos los personajes Krillin y Goku
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {

    const newCharacter: Character = {id: uuid(), ...character}
    this.character.push(newCharacter);

  }

 deleteCharacterById(id: string) {
    //this.character.splice(index, 1)
    this.character = this.character.filter(character => character.id !== id);
  }

  constructor() { }
}
