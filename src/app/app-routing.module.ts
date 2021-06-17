import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/auth/login/login.component'
import { SignupComponent } from '../app/auth/signup/signup.component'
import { HomeComponent } from './pages/home/home.component';
import { DiseasesComponent } from './pages/diseases/diseases.component';
import { PestDetailComponent } from './pages/pest-detail/pest-detail.component';
import { DiseaseDetailComponent } from './pages/disease-detail/disease-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent },
  { path: 'diseases', component: DiseasesComponent },
  { path: 'pest-detail/:id', component: PestDetailComponent },
  { path: 'disease-detail', component: DiseaseDetailComponent },

  { path: '', redirectTo: '/pests', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
