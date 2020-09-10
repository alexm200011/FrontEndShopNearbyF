import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Propietario } from '../models/propietario';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PropietariosService {

  url : string = "https://localhost:44313/api/Propietarios";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  save(a:Propietario) : Observable<any> {
    let PropietarioBody = JSON.stringify(a);    
    if(a.idPropietario === undefined){      
      return this.http.post<any>(this.url, PropietarioBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, PropietarioBody, this.httpOptions);
  }

  retrieve(id:number): Observable<Propietario> {
    return this.http.get<Propietario>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  delete(a: Propietario) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + a.idPropietario, 
      this.httpOptions);
  }

  list(): Observable<Propietario[]> {
    return this.http.get<Propietario[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  search(criteria:string): Observable<Propietario[]> {
    return this.http.get<Propietario[]>(this.url.concat("?criteria=").concat(criteria), this.httpOptions)
      .pipe(
        retry(1)
      );
  } 
}
