import { Component, inject, signal } from '@angular/core';
import { CardCharacter } from '../card-character/card-character';
import { Character } from '../../interface/character';
import { CharacterService } from '../../services/character';
@Component({
  selector: 'app-list-character',
  imports: [CardCharacter],
  templateUrl: './list-character.html',
  styleUrl: './list-character.css',
})
export class ListCharacter {
  service = inject(CharacterService);
  characters = signal<Character[]>([]);

  constructor() {
    this.startCharacter();
  }

  startCharacter() {
    this.service.getCharacters()
      .subscribe((response) => {
        this.characters.set(response.results);
      })
  }
}
