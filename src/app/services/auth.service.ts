import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  signup_form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    usertype: new FormControl('USER'),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirm_password: new FormControl('', Validators.required),
   
  });

  login_form:FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })


  signup_url = environment.signup_url;
  login_url = environment.login_url;

  doSignup(signupDetails:any){
    return this.http.post(this.signup_url,signupDetails)
  }
  doLogin(loginDetails:any){
    return this.http.post(this.login_url,loginDetails)
  }
}
