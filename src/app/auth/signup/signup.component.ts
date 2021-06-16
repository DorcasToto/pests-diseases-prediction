import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service:AuthService) { }

  ngOnInit(): void {
  }
signup(){
  this.service.doSignup(this.service.signup_form.value).subscribe(data=>{
    console.log(data);
    
    console.log('User created successfully');
  })
}
}
