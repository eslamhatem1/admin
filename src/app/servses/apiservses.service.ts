import { sendticket } from './../models/senddata';
import { ticket } from './../models/ticket';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiservsesService {

  constructor(private hhtp: HttpClient) { }

  getall(url: string): Observable<any> {
    return this.hhtp.get(`${environment.baseUrl}${url}`)
  }

  getid(url: string): Observable<any> {
    return this.hhtp.get<any>(`${environment.baseUrl}${url}`)
  }

  create(url: string, register: sendticket): Observable<any> {
    return this.hhtp.post<any>(`${environment.baseUrl}${url}`, register)
      .pipe(map((res: any) => {

        return res
      }))
  }

  update(url: string, register: any): Observable<any> {
    return this.hhtp.put<any>(`${environment.baseUrl}${url}`, register)
  }

  delete(url: string): Observable<any> {
    return this.delete(`${environment.baseUrl}${url}`)
  }

}
