import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ExerciceComponent } from './page/exercice/exercice.component';
import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { EnrollComponent } from './page/enroll/enroll.component';
import { ProjectComponent } from './page/project/project.component';
import { DetailProjectComponent } from './page/detail-project/detail-project.component';
import { CreateUpdateProjectComponent } from './page/create-update-project/create-update-project.component';
import { PersonComponent } from './page/person/person.component';
import { DetailPersonComponent } from './page/detail-person/detail-person.component';
import { CreateUpdatePersonComponent } from './page/create-update-person/create-update-person.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'enroll', component: EnrollComponent },
  { path: 'exercise', component: ExerciceComponent, canActivate: [AuthGuard] },

  { path: 'project', component: ProjectComponent, canActivate: [AuthGuard] },
  { path: 'project/create', component: CreateUpdateProjectComponent }, // , canActivate: [AuthGuard]
  { path: 'project/:name', component: DetailProjectComponent }, // , canActivate: [AuthGuard]
  { path: 'project/:name/update', component: CreateUpdateProjectComponent }, // , canActivate: [AuthGuard]

  { path: 'person', component: PersonComponent, canActivate: [AuthGuard] },
  { path: 'person/create', component: CreateUpdatePersonComponent }, // , canActivate: [AuthGuard]
  { path: 'person/:id', component: DetailPersonComponent }, // , canActivate: [AuthGuard]
  { path: 'person/:id/update', component: CreateUpdatePersonComponent }, // , canActivate: [AuthGuard]

  { path: '**', redirectTo: '' },
];
