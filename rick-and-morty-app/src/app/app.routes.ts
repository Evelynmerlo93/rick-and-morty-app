import { Routes } from '@angular/router';
import { ListCharacter } from './components/list-character/list-character';

export const routes: Routes = [
    { path: "", loadComponent: () => ListCharacter }
];
