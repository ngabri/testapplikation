import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-addreservation',
  templateUrl: './addreservation.component.html',
  styleUrls: ['./addreservation.component.css']
})


export class AddreservationComponent implements OnInit {

  public reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      telefon: ['', Validators.required],
      res_date: ['', Validators.required],
      start_time: ['', Validators.required],
      end_time: ['', Validators.required],
      additionalroom: false,
    });
   }


  ngOnInit(): void {


  }

  public onReservationSubmit(): void {
     console.log('ReservationForm', this.reservationForm.value);
  }


}


