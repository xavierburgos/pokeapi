import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient) { }

  public getData(pokemon: string):Observable<any>{
    return this.http.get<any>(this.urlApi+pokemon);
  }
}
