import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCURDComponent } from './component/main-curd/main-curd.component';
import { AddticketComponent } from './component/addticket/addticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditticketComponent } from './component/editticket/editticket.component';
import { DelteticketComponent } from './component/delteticket/delteticket.component';
import { TicketreservationComponent } from './component/ticketreservation/ticketreservation.component';
import { LoginComponent } from './servses/component/login/login.component';
import { SigninComponent } from './servses/component/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCURDComponent,
    AddticketComponent,
    EditticketComponent,
    DelteticketComponent,
    TicketreservationComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
