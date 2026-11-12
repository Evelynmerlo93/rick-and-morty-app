import { Component, input } from '@angular/core';
 import { Character } from '../../interface/character';

@Component({
  selector: 'app-card-character',
  imports: [],
  templateUrl: './card-character.html',
  styleUrl: './card-character.css',
})
export class CardCharacter {
  oneCharacter = input.required<Character>()
}
