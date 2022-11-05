import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation, Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private readonly rootUrl = `${environment.apiBaseUrl}`


  constructor(private http: HttpClient) { }

  public getReservation(): Observable<Reservation[]> {
   return this.http.get<Reservation[]>(`${this.rootUrl}/reservations`);
  }

  public deleteCustomer(customer_id: number): Observable<any> {
   //console.log('Service', customer_id);
   console.log('deleteUrl', `${this.rootUrl}/customer/${customer_id}`);
   return this.http.delete(`${this.rootUrl}/customer/${customer_id}`);
  }
}
