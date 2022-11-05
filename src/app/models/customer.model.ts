export interface Customer {
  customer_id: number;
  firstname: string;
  lastname: string;
  telefon: string;
}



export interface Reservation {
  reservation_id: number;
  room_id: number;
  customer_id: number;
  firstname: string;
  lastname: string;
  telefon: string;
  res_date: string;
  start_time: string;
  end_time: string;
  roomname: string;
  additionalroom: boolean;
}
