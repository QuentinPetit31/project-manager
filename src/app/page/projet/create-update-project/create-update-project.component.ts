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

  persons!: Person[];

  // import project service
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data;
    this.project = data['project'];
    this.persons = data['persons'];

    if (this.project) {
      this.form.setValue({
        name: this.project.name,
        persons: this.project.persons,
        startDate: new Date(this.project.startDate),
        endDate: new Date(this.project.endDate),
        description: this.project.description,
      });
    }
  }

  //Sert a gerer la comparaison entre deux person pour afficher les persons d'un proj
  comparePerson(obj1: Person, obj2: Person) {
    return obj1.id === obj2.id;
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
        project.id = this.project.id;
        console.log('update person=', project);
        this.projectService.updateProject(project).subscribe(() => {
          this.router.navigate(['/project']);
        });
      } else {
        // CREATE
        // Appel de la méthode createProject du service
        this.projectService.createProject(project).subscribe(() => {
          this.router.navigate(['/project']);
        });
      }
    }
  }
}
