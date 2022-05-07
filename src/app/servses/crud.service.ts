import { sendticket } from './../models/senddata';
import { ticket } from './../models/ticket';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiservsesService } from './apiservses.service';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private servises: ApiservsesService) { }

  get(): Observable<any> {
    return this.servises.getall('/api/GetTicketData/getTicketDataController');
  }
  getid(id: number): Observable<any> {
    return this.servises.getid(
      `/api/GetTicketData/getTicketDataControllerid?id=${id}`
    );
  }

  createTicket(task: ticket): Observable<any> {
    return this.servises.create('/api/GetTicketData/saveticket', task);
  }

  updateTicket(id: number, task: ticket): Observable<any> {
    return this.servises.update(
      `/api/GetTicketData/updateticket?id=${id}`,
      task
    );
  }

  updateTicketcheckbox(id: number, task: ticket): Observable<any> {
    return this.servises.update(
      `/api/GetTicketData/updateticketcheckbox?id=${id}`,
      task
    );
  }

  deleteTicket(id: number): Observable<any> {
    return this.servises.delete(`/api/GetTicketData/deleteticket/id=${id}`);
  }
}
