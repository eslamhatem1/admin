import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiservsesService } from './apiservses.service';

@Injectable({
  providedIn: 'root'
})
export class AdminregisterService {

  constructor(private servse:ApiservsesService) { }

  get():Observable<any>{
    return this.servse.getall("/api/GetLogin/getLoginTable")
   }
}
