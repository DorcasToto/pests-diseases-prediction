import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Home } from '../classes/home';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  home!: Home;
  homes : any = []

  constructor(private http: HttpClient) {
    this.home = new Home('', '', '', '', '', '',)
  }

  pestDiseaseRequest() {
    interface PestsResponse {
      name: string,
      description: string,
      image: string,
      prevention: string,
      signsSymptoms: string,
      causes: string
    }
 
    let pest_disease_url = environment.pest_disease_url;
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<PestsResponse>(pest_disease_url).toPromise().then((response: { [x: string]: any }) => {
     
        console.log(response['data']);
        
        for(let i = 0; i < response['data'].length;i++){
          let name = response['data'][i]['name']
          let description = response['data'][i]['description']
          let image = response['data'][i]['image']
          let prevention = response['data'][i]['prevention']
          let signsSymptoms = response['data'][i]['signsSymptoms']
          let causes = response['data'][i]['causes']
          console.log(response['data'][i]['name']);
          
        
          
          let home = new Home(name,description,image,prevention,signsSymptoms,causes)
          this.homes.push(home)
        }
      
        
        resolve()
      },(error)=>{
        reject(error)
      })
    })
    return promise
  }

}
