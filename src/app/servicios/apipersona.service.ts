import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class APIPersonaService {
  baseURL = 'http://localhost:5000/'
  
  constructor(private http: HttpClient) { }
  getPersonas(){
    return this.http.get(this.baseURL+'getaAll');
  }

  nuevaPerona(nombre: string, apellido: string){
    var persona = JSON.parse('{"name":"' +nombre +'","lastname":"' +apellido +'" }');
    this.http.post(this.baseURL+'insertar',JSON.stringify(persona),{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe((data)=>{
      console.log(data)
    });
  }
}
