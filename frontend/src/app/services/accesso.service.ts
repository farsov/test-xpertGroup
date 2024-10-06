import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../settings/appsettings';

import { Observable } from 'rxjs';

import {Login} from "../interfaces/login";
import {ResponseAcceso} from "../interfaces/responseAcceso";


@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  private http = inject(HttpClient);
  private baseUrl: string = appsettings.apiUrl;

  constructor() { }

  // registrarse(objeto: Usuario): Observable<ResponseAcceso> {
  //   return this.http.post<ResponseAcceso>(`${this.baseUrl}Acceso/Registrarse`, objeto)
  // }

  login(objeto: Login): Observable<ResponseAcceso> {
    return this.http.post<ResponseAcceso>(`${this.baseUrl}users/login`, objeto)
  }

  validarToken(token: string): Observable<ResponseAcceso> {
    return this.http.get<ResponseAcceso>(`${this.baseUrl}Acceso/ValidarToken?token=${token}`)
  }
}
