import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiservsesService } from './apiservses.service';

@Injectable({
  providedIn: 'root'
})
export class TicketresevtionService {

  constructor(private servse:ApiservsesService) { }


  get():Observable<any>{
   return this.servse.getall("/api/GetReservation/getbooking")
  }

}
