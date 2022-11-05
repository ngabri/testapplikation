import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReservationsService } from '../services/reservations.service';
import { Observable, Subscription } from 'rxjs';
import { Customer, Reservation } from '../models/customer.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UpdateReservationComponent } from '../update-reservation/update-reservation.component';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit, OnDestroy {
  public reservations$: Observable<Reservation[]>;
  private reservationModalRef: NgbModalRef;
  private subscription: Subscription = new Subscription();

  constructor(private reservationService: ReservationsService, private modalService: NgbModal ) { }


  ngOnInit(): void {
    this.reservations$ = this.reservationService.getReservation();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public deleteItem(customer_id: number) {
    //  console.log('delete from component', customer_id);
     this.reservationService.deleteCustomer(customer_id).subscribe();
  };

  public onOpenModal(): void {
    this.reservationModalRef = this.modalService.open(
      UpdateReservationComponent,
      {centered: true, size: 'lg'}
    );
  }

}
