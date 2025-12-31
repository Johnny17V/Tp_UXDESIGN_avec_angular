import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Entete } from './entete/entete';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Entete, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv_bootstrap');
}
