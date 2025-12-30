import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Entete } from './entete/entete';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Entete],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv_bootstrap');
}
