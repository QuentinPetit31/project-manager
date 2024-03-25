import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ExerciceComponent } from './page/exercice/exercice.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exercice', component: ExerciceComponent },
  //   { path: '*', redirectTo: '' },
];
