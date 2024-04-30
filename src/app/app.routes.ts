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

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'enroll', component: EnrollComponent },
  { path: 'exercise', component: ExerciceComponent, canActivate: [AuthGuard] },

  {
    path: 'project',
    component: ProjectListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'project/create', component: CreateUpdateProjectComponent }, // , canActivate: [AuthGuard]
  { path: 'project/:id', component: DetailProjectComponent }, // , canActivate: [AuthGuard]
  { path: 'project/:id/update', component: CreateUpdateProjectComponent }, // , canActivate: [AuthGuard]

  { path: 'person', component: PersonListComponent, canActivate: [AuthGuard] },
  { path: 'person/create', component: CreateUpdatePersonComponent }, // , canActivate: [AuthGuard]
  { path: 'person/:id', component: DetailPersonComponent }, // , canActivate: [AuthGuard]
  { path: 'person/:id/update', component: CreateUpdatePersonComponent }, // , canActivate: [AuthGuard]

  { path: 'job', component: JobListComponent, canActivate: [AuthGuard] },
  { path: 'job/create', component: CreateUpdateJobComponent }, // , canActivate: [AuthGuard]
  { path: 'job/:id', component: DetailJobComponent }, // , canActivate: [AuthGuard]
  { path: 'job/:id/update', component: CreateUpdateJobComponent }, // , canActivate: [AuthGuard]

  { path: '**', redirectTo: '' },
];
