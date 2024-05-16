import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ExerciceComponent } from './page/exercice/exercice.component';
import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { EnrollComponent } from './page/enroll/enroll.component';
import { ProjectListComponent } from './page/projet/list-project/list-project.component';
import { DetailProjectComponent } from './page/projet/detail-project/detail-project.component';
import { CreateUpdateProjectComponent } from './page/projet/create-update-project/create-update-project.component';
import { PersonListComponent } from './page/person/list-person/list-person.component';
import { DetailPersonComponent } from './page/person/detail-person/detail-person.component';
import { CreateUpdatePersonComponent } from './page/person/create-update-person/create-update-person.component';
import { JobListComponent } from './page/job/list-job/list-job.component';
import { CreateUpdateJobComponent } from './page/job/create-update-job/create-update-job.component';
import { DetailJobComponent } from './page/job/detail-job/detail-job.component';
import { jobResolver } from './resolver/job.resolver';
import { jobsResolver } from './resolver/jobs.resolver';
import { projectResolver } from './resolver/project.resolver';
import { projectsResolver } from './resolver/projects.resolver';
import { personsResolver } from './resolver/persons.resolver';
import { personResolver } from './resolver/person.resolver';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'enroll', component: EnrollComponent },
  { path: 'exercise', component: ExerciceComponent, canActivate: [AuthGuard] },

  {
    path: 'project',
    component: ProjectListComponent,
    canActivate: [AuthGuard],
    resolve: { projects: projectsResolver },
  },

  {
    path: 'project/create',
    component: CreateUpdateProjectComponent,
    resolve: { persons: personsResolver },
  }, // , canActivate: [AuthGuard]

  {
    path: 'project/:id',
    component: DetailProjectComponent,
    resolve: { project: projectResolver },
  }, // , canActivate: [AuthGuard]

  {
    path: 'project/:id/update',
    component: CreateUpdateProjectComponent,
    resolve: { project: projectResolver, persons: personsResolver }, //persons: personsResolver
  }, // , canActivate: [AuthGuard]

  {
    path: 'person',
    component: PersonListComponent,
    canActivate: [AuthGuard],
    resolve: { persons: personsResolver },
  },
  {
    path: 'person/create',
    component: CreateUpdatePersonComponent,
    resolve: { jobs: jobsResolver },
  }, // , canActivate: [AuthGuard]

  {
    path: 'person/:id',
    component: DetailPersonComponent,
    resolve: { person: personResolver },
  }, // , canActivate: [AuthGuard]

  {
    path: 'person/:id/update',
    component: CreateUpdatePersonComponent,
    resolve: { person: personResolver, jobs: jobsResolver },
  }, // , canActivate: [AuthGuard]

  {
    path: 'job',
    component: JobListComponent,
    resolve: { jobs: jobsResolver },
    canActivate: [AuthGuard],
  },
  { path: 'job/create', component: CreateUpdateJobComponent }, // , canActivate: [AuthGuard]
  {
    path: 'job/:id',
    component: DetailJobComponent,
    resolve: { job: jobResolver },
  }, // , canActivate: [AuthGuard]
  {
    path: 'job/:id/update',
    component: CreateUpdateJobComponent,
    resolve: { job: jobResolver },
  }, // , canActivate: [AuthGuard]

  { path: '**', redirectTo: '' },
];
