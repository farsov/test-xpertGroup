import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { Observable } from 'rxjs';
import {CatBreedResponse} from "../interfaces/beerds";


@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  private http = inject(HttpClient);
  private baseUrl: string = appsettings.apiUrl;

  constructor() {}

  getBreeds(): Observable<CatBreedResponse> {
    return this.http.get<CatBreedResponse>(`${this.baseUrl}cats/breeds`);
  }
}
