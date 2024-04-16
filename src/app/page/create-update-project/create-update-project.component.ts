import { Component, OnInit } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-create-update-project',
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
export class CreateUpdateProjectComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl<string>('Project test', [
      Validators.required,
      Validators.minLength(2),
    ]),
    personnes: new FormControl<string>('contributor, test , Anna', [
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
  projectNameAlreadyUsed = false;
  passwordError = false;

  project?: Project;

  // import project service
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const nameProject = this.route.snapshot.params['name'];
    console.log(nameProject);
    this.project = this.projectService.getProjectByName(nameProject);
    console.log(this.project);

    // this.form.controls.name.setValue()

    if (this.project) {
      this.form.setValue({
        name: this.project.name,
        personnes: this.project.personnes.toString(),
        endDate: this.project.endDate,
        startDate: this.project.startDate,
        description: this.project.description,
      });
    }
  }

  submitProject() {
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
        personnes: formValue.personnes ? formValue.personnes?.split(',') : [],
        description: formValue.description || '',
      };
      if (this.project) {
        // UPDATE
        const updateProjectSucces = this.projectService.updateProject(
          this.project.name,
          project
        );
        if (updateProjectSucces) {
          console.log('Le projet a été modifié avec succès.');
          this.router.navigate(['/project']);
        }
      } else {
        // CREATE
        // Appel de la méthode createProject du service
        const newProjectSucces = this.projectService.createProject(project);
        if (newProjectSucces) {
          console.log('Le projet a été ajouté avec succès.');
          this.router.navigate(['/project']);
        } else {
          console.log(
            "Échec de l'ajout du projet. Le nom du projet est déjà utilisé."
          );
          //afficher erreur en rouge sous le bouton
          //si erreur message sous bouton
          this.projectNameAlreadyUsed = true;
        }
      }
    }
  }
}
