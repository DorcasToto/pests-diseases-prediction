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
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    phoneno: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirm_password: new FormControl('', Validators.required)
  });

  signup_url = environment.signup_url

  doSignup(signupDetails:any){
    return this.http.post(this.signup_url,signupDetails)
  }
}
