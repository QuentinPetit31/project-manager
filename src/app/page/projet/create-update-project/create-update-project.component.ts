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
import { Project } from '../../../services/project';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { PersonService } from '../../../services/person.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { Person } from '../../../services/person';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-create-update-project',
  templateUrl: 'create-update-project.component.html',
  standalone: true,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    provideNativeDateAdapter(),
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CreateUpdateProjectComponent,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
})
export class CreateUpdateProjectComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl<string>('Project test', [
      Validators.required,
      Validators.minLength(2),
    ]),

    persons: new FormControl<Person[]>([], [Validators.required]),

    startDate: new FormControl<Date>(new Date(), [
      Validators.required,
      Validators.minLength(2),
    ]),

    endDate: new FormControl<Date>(new Date(), [
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

  get persons() {
    return this.personService.getAllPersons();
  }

  // import project service
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService
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
        persons: this.project.persons,
        // String to date
        startDate: new Date(this.project.startDate),
        endDate: new Date(this.project.endDate),
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
        // Date to string
        startDate: formValue.startDate?.toISOString() || '',
        endDate: formValue.endDate?.toISOString() || '',
        // if / else sur une ligne si ça alors, sinon tab vide
        persons: formValue.persons ? formValue.persons : [],
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
          this.router.navigate(['/project/']);
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
