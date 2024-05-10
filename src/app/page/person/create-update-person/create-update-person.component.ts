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
import { Person } from '../../../services/person';
import { CommonModule } from '@angular/common';
import { PersonService } from '../../../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { Job } from '../../../services/job';
import { JobService } from '../../../services/job.service';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-create-update-person',
  templateUrl: 'create-update-person.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CreateUpdatePersonComponent,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
  ],
})
export class CreateUpdatePersonComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl<string>('FirstName', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl<string>('LastName', [
      Validators.required,
      Validators.minLength(2),
    ]),
    job: new FormControl<Job | undefined>(undefined, [
      Validators.required,
      Validators.minLength(2),
    ]),
  });
  jobs?: Job[];
  personIdAlreadyUsed = false;
  passwordError = false;

  person?: Person;

  // import person service
  constructor(
    private personService: PersonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    jobService: JobService
  ) {
    jobService
      .getAllJobs()
      .toPromise()
      .then(jobs => {
        if (jobs) {
          this.jobs = jobs;
        }
      });
  }

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data;
    this.person = data['person'];

    if (this.person) {
      this.form.setValue({
        firstName: this.person.firstName,
        lastName: this.person.lastName,
        job: this.person.job,
      });
    }
  }

  submitPerson() {
    console.log('-------------');
    // récupère la valeur du form
    const formValue = this.form.getRawValue();
    if (
      this.form.valid &&
      formValue.firstName &&
      formValue.lastName &&
      formValue.job
    ) {
      console.log('createPerson formValue = ', formValue);
      const person: Person = {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        // if / else sur une ligne si ça alors, sinon tab vide
        job: formValue.job,
      };
      if (this.person) {
        person.id = this.person.id;
        // UPDATE
        this.personService.updatePerson(person).subscribe(sucess => {
          if (sucess) {
            console.log('modification de person finalisée');
            this.router.navigate(['/person']);
          } else {
            // ERROR
          }
        });
      } else {
        // CREATE
        // Appel de la méthode createProject du service
        const newPersonSucces = this.personService.createPerson(person);
        if (newPersonSucces) {
          console.log('La personne a été ajoutée avec succès.');
          this.router.navigate(['/person']);
        } else {
          console.log(
            "Échec de l'ajout du projet. Le nom du projet est déjà utilisé."
          );
          //afficher erreur en rouge sous le bouton
          //si erreur message sous bouton
          this.personIdAlreadyUsed = true;
        }
      }
    }
  }
}
