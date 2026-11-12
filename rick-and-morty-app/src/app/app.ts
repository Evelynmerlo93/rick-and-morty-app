import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListCharacter } from './components/list-character/list-character';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListCharacter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rick-and-morty-app');
}
