import { Component } from '@angular/core';
import { CustomerObject } from './formbarebone/CustomerObject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vignesh-FormsExample';
  custObj1: CustomerObject = new CustomerObject();
  catchEvent  (d){
    //console.log(d.CustomerObject);
    this.custObj1 = d.CustomerObject;
  }
}
