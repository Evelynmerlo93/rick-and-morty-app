import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CharacterResponse } from '../interface/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  http = inject(HttpClient);
  apiUrl =  'https://rickandmortyapi.com/api/character';

  getCharacters(): Observable<CharacterResponse> {
  return this.http.get<CharacterResponse>(this.apiUrl);
}
}