import { ticketres } from './../../models/reservvation';
import { ticket } from './../../models/ticket';
import { Component, OnInit } from '@angular/core';
import { TicketresevtionService } from 'src/app/servses/ticketresevtion.service';

@Component({
  selector: 'app-ticketreservation',
  templateUrl: './ticketreservation.component.html',
  styleUrls: ['./ticketreservation.component.scss']
})
export class TicketreservationComponent implements OnInit {

  constructor(private servse:TicketresevtionService) { }

  thedata:ticketres[]=[]
  ngOnInit(): void {

    this.servse.get().subscribe(
      (Response:any)=>{
        this.thedata=Response
      }
    )


  }

}
