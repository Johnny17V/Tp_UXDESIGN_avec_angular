import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Entete } from './entete/entete';
import { Contact } from './contact/contact';
import {Competence} from './competence/competence'
import { Langue } from './langue/langue';
import { Experience } from './experience/experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Entete, Contact, Competence, Langue, Experience],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv_bootstrap');
}
