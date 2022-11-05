import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation, Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AddReservationsService {

  private readonly rootUrl = `${environment.apiBaseUrl}`


  constructor(private http: HttpClient) { }

  public getReservation(): Observable<Reservation[]> {
   return this.http.get<Reservation[]>(`${this.rootUrl}/reservations`);
  }
}
