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
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ResolveFn, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { JobService } from '../../../services/job.service';
import { Job } from '../../../services/job';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-create-update-job',
  templateUrl: 'create-update-job.component.html',
  standalone: true,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    provideNativeDateAdapter(),
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CreateUpdateJobComponent,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
})
export class CreateUpdateJobComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  jobNameAlreadyUsed = false;
  passwordError = false;

  job?: Job;

  // import project service
  constructor(
    private jobService: JobService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // const idJob = this.route.snapshot.params['id'];
    // console.log(idJob);
    // this.job = this.jobService.getJobById(idJob);
    // console.log(this.job);
    const data = this.activatedRoute.snapshot.data;
    this.job = data['job'];
    // this.form.controls.id.setValue()

    if (this.job) {
      this.form.setValue({
        name: this.job.name,
      });
    }
  }

  submitJob() {
    // récupère la valeur du form
    const formValue = this.form.getRawValue();
    console.log('-------------');
    if (this.form.valid && formValue.name) {
      console.log('createJob formValue = ', formValue);
      const job: Job = {
        name: formValue.name,
      };
      if (this.job) {
        // UPDATE
        job.id = this.job.id;
        console.log('update job=', job);
        this.jobService.updateJob(job).subscribe(() => {
          this.router.navigate(['/job']);
        });
      } else {
        // CREATE
        // Appel de la méthode createJob du service
        this.jobService.createJob(job).subscribe(() => {
          this.router.navigate(['/job']);
        });
      }
    }
  }
}
