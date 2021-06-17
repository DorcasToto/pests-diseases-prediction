import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: AuthService,private router:Router) { }


  ngOnInit(): void {
  }

  login(){
    this.service.doLogin(this.service.login_form.value).subscribe((data:any)=>{
      console.log(this.service.login_form.value);
    if(data['accessToken']){
        localStorage.setItem('accessToken', data['accessToken'])
        console.log(data['accessToken']);
        
       alert('Login Successful')
       this.router.navigate(['/pests'])
    
    }else{
      console.log('error');
      
    }
    localStorage.setItem('username', this.service.login_form.value['username']);
    
    })
  }
}
