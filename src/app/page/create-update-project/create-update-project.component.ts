import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Project } from '../project/project';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../service/project.service';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-create-update-project',
  styleUrl: 'create-update-project.component.scss',
  templateUrl: 'create-update-project.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CreateUpdateProjectComponent,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class CreateUpdateProjectComponent {
  form = new FormGroup({
    name: new FormControl<string>('Project test', [
      Validators.required,
      Validators.minLength(2),
    ]),
    personnes: new FormControl<string>('contributor, test , anna', [
      Validators.required,
      Validators.minLength(2),
    ]),
    startDate: new FormControl<string>('01/01/2024', [
      Validators.required,
      Validators.minLength(2),
    ]),
    endDate: new FormControl<string>('01/01/2024', [
      Validators.required,
      Validators.minLength(2),
    ]),
    description: new FormControl<string>('Description test', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });
  asError = false;
  passwordError = false;

  // import porject service
  constructor(private projectService: ProjectService) {}

  // ng on init pour récuperer le param project
  // (nom du projet ciblé dans l'url comme dans détail)
  // regarder si projet correspond (getprojetbyname())
  // scénario d'erreur, pas de projet -> ramener vers parge tab projet
  // si il existe, préremplir champ du formulaire avec les valeurs du projet
  // store initial title - créer variable update title pour pouvoir valider
  // une modification faire un for chercher dans un tableau[i].length
  // trouver le bon, le modifier

  createProject() {
    console.log('-------------');
    if (this.form.valid) {
      // récupère la valeur du form
      const formValue = this.form.getRawValue();
      console.log('createProject formValue = ', formValue);
      const project: Project = {
        name: formValue.name || '',
        startDate: formValue.startDate || '',
        endDate: formValue.endDate || '',
        // if / else sur une ligne si ça alors, sinon tab vide
        personnes: formValue.personnes ? formValue.personnes?.split(', ') : [],
        description: formValue.description || '',
      };
      // Appel de la méthode createProject du service
      const newProjectSucces = this.projectService.createProject(project);
      if (newProjectSucces) {
        console.log('Le projet a été ajouté avec succès.');
      } else {
        console.log(
          "Échec de l'ajout du projet. Le nom du projet est déjà utilisé."
        );
      }
    }
  }
}
