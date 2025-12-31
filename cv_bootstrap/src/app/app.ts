import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Entete } from './entete/entete';
import { Contact } from './contact/contact';
import {Competence} from './competence/competence'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Entete, Contact, Competence],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv_bootstrap');
}
