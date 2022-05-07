import { ticket } from './../../models/ticket';
import { CrudService } from './../../servses/crud.service';
import { Component, OnInit } from '@angular/core';
import { ApiservsesService } from 'src/app/servses/apiservses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-curd',
  templateUrl: './main-curd.component.html',
  styleUrls: ['./main-curd.component.scss'],
})
export class MainCURDComponent implements OnInit {
  data: ticket[] = [];
  constructor(
    private servse: CrudService,
    private route: Router,
    private fb: FormBuilder,
    private active: ActivatedRoute
  ) { }

  lodingorm = this.fb.group({
    ticketNum: ['', [Validators.required]],
    Dateavailable: ['', [Validators.required]],
    DateFlight: ['', [Validators.required]],
    Timedeparture: ['', [Validators.required]],
    TimeLand: ['', [Validators.required]],
    Destination: ['', [Validators.required]],
    priceticket: ['', [Validators.required]],
    typeticket: ['', [Validators.required]],
    detailsTicket: ['', [Validators.required]],
    airPort: ['', [Validators.required]],
    terminal: ['', [Validators.required]],
    isshow: [''],
  });

  theflight = new ticket();

  ngOnInit(): void {
    this.servse.get().subscribe((Response: any) => {
      this.data = Response;
    });


  }

  eventCheck(value: any) {


    this.active.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));


      this.servse.updateTicketcheckbox(id, value).subscribe((Response: any) => {
        alert('done');
      });
    });
  }
}
