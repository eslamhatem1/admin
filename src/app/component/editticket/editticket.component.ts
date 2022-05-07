import { ticket } from './../../models/ticket';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/servses/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editticket',
  templateUrl: './editticket.component.html',
  styleUrls: ['./editticket.component.scss']
})
export class EditticketComponent implements OnInit {
  theflight=new ticket();
  constructor(
    private sevises:CrudService,
    private active:ActivatedRoute,
    private fb:FormBuilder,
    private router:Router,
  ) { }

  lodingorm=this.fb.group({

    ticketNum:['',[Validators.required]],
    Dateavailable:['',[Validators.required]],
    DateFlight:['',[Validators.required]],
    Timedeparture:['',[Validators.required]],
    TimeLand:['',[Validators.required]],
    Destination:['',[Validators.required]],
    priceticket:['',[Validators.required]],
    typeticket:['',[Validators.required]],
    detailsTicket:['',[Validators.required]],
    airPort:['',[Validators.required]],
    terminal:['',[Validators.required]],


  })


  theid:number=0
  ngOnInit(): void {
    this.active.paramMap.subscribe(param=>

      {

        let id=Number(param.get('id'));

        this.sevises.getid(id).subscribe(
          (Response:any)=>{
            this.theflight=Response
            this.lodingorm.patchValue({


              ticketNum:this.theflight.ticketNum,
              Dateavailable:this.theflight.dateAvailable.slice(0,10),
              DateFlight:this.theflight.dateFlight.slice(0,10),
              Timedeparture:this.theflight.timeDeparture,
              TimeLand:this.theflight.timeLand,
              Destination:this.theflight.destination,
              priceticket:this.theflight.priceTicket,
              typeticket:this.theflight.typeTicket,
              detailsTicket:this.theflight.detailsTicket,
              airPort:this.theflight.airPort,
              terminal:this.theflight.terminal,

            })

          }
        )
      })




  }

  edit(){

    this.active.paramMap.subscribe(param=>

      {

        let id=Number(param.get('id'));
        console.log(this.lodingorm.value)
         console.log(id)
        this.sevises.updateTicket(id,this.lodingorm.value).subscribe(
          (Response:any)=>{
            alert('done')
            this.router.navigateByUrl('/main')
          }
        )
      })


  }







}
