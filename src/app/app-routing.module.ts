import { LoginComponent } from './servses/component/login/login.component';
import { EditticketComponent } from './component/editticket/editticket.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddticketComponent } from './component/addticket/addticket.component';
import { MainCURDComponent } from './component/main-curd/main-curd.component';
import { DelteticketComponent } from './component/delteticket/delteticket.component';
import { TicketreservationComponent } from './component/ticketreservation/ticketreservation.component';

const routes: Routes = [

  {path:'addticket',component:AddticketComponent},
  {path:'edit/:id',component:EditticketComponent},
  {path:'delete/:id',component:DelteticketComponent},
  {path:'ticketreservation',component:TicketreservationComponent},
  {path:'main',component:MainCURDComponent},
  {path:'main/:id',component:MainCURDComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'',component:MainCURDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
