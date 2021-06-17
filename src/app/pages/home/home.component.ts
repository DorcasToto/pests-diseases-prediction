import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Home } from 'src/app/classes/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home!:any
  homes:any = []
  constructor(private service:HomeService) { }

  ngOnInit(): void {
    
    this.service.pestDiseaseRequest()
    this.service.home = this.home
    
  }
  
}
