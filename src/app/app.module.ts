import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

//Angular Material
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ButtonsModule, WavesModule, IconsModule, TableModule } from 'angular-bootstrap-md';
import { DropdownModule } from 'angular-bootstrap-md';

//Components
import { ReservationComponent } from './reservation/reservation.component';
import { HeaderComponent } from './header/header.component';
import { AddreservationComponent } from './addreservation/addreservation.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    HeaderComponent,
    AddreservationComponent,
    FooterComponent,
    SearchComponent,
    UpdateReservationComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    OverlayModule,
    CdkTreeModule,
    PortalModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    ButtonsModule,
    WavesModule,
    IconsModule,
    TableModule,
    DropdownModule.forRoot()



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
