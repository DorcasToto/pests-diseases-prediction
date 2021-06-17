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
     
        
        for(let i = 0; i < response['data'].length;i++){
          let name = response['data']['name']
          let description = response['data']['description']
          let image = response['data']['image']
          let prevention = response['data']['prevention']
          let signsSymptoms = response['data']['signsSymptoms']
          let causes = response['data']['causes']
          response['data']['name']
          
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
