import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ExerciceComponent } from './page/exercice/exercice.component';
import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { EnrollComponent } from './page/enroll/enroll.component';
import { ProjectComponent } from './page/project/project.component';
import { DetailProjectComponent } from './page/detail-project/detail-project.component';

export const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'project', component: ProjectComponent },
  {
    path: 'project/toto',
    component: DetailProjectComponent,
    // canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'enroll', component: EnrollComponent },
  { path: 'exercise', component: ExerciceComponent },
  { path: '**', redirectTo: '' },
];
// create composant create updrate project le brancher a la route
// formulaire
// arriver a l'afficher s'inspirer du enroll dans route ** a la fin
