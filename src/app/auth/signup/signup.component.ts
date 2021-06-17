import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
signup(){
  this.service.doSignup(this.service.signup_form.value).subscribe(data=>{
    console.log(data);
    alert("Signup Successful!")
    this.router.navigate(['/login'] )
    // console.log('User created successfully');
  })
}
get firstName(){
    return this.service.signup_form.get('firstName')
}
}
