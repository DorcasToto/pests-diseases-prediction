import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DiseasesComponent } from './pages/diseases/diseases.component';
import { PestDetailComponent } from './pages/pest-detail/pest-detail.component';
import { DiseaseDetailComponent } from './pages/disease-detail/disease-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NotfoundComponent,
    DiseasesComponent,
    PestDetailComponent,
    DiseaseDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
