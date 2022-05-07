import { ticket } from './../../models/ticket';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CrudService } from 'src/app/servses/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.scss']
})
export class AddticketComponent implements OnInit {

  data = new ticket()
  constructor(
    private sevises: CrudService,
    private fb: FormBuilder,

    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.active.paramMap.subscribe(param=>

    //   {

    //     let id=Number(param.get('id'));
    //     this.servises.getid(id).subscribe(
    //       (Response:any)=>{
    //         this.data=Response
    //       }
    //     )
    //   })
  }

  tigetform = this.fb.group({

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
    isshow: [true],

  })


  isloading = true

  sent() {

    console.log(this.tigetform.value)

    this.sevises.createTicket(this.tigetform.value).subscribe(

      (Response: any) => {
        console.log(this.tigetform.value)
        alert('done')
        this.tigetform.reset();
      }
    )



  }




}




