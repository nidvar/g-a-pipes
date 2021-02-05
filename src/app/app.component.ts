import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  name:string;
  date:string
  payment:number;
  miles:number;

  onNameChange(value:string){
    this.name = value
  }

  onDateChange(value:string){
    this.date = value
  }

  onPaymentChange(value:string){
    this.payment = parseFloat(value)
  }

  showMiles(value:string){
    this.miles = parseFloat(value)
  }





}
