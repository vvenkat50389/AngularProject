import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { CustomerObject } from './CustomerObject';

@Component({
  selector: 'app-formbarebone',
  templateUrl: './formbarebone.component.html',
  styleUrls: ['./formbarebone.component.css']
})
export class FormbareboneComponent implements OnInit {

    @Input()
    firstName:String;

    @Input()
    lastName:String;

    @Input()
    email:String;

    @Input()
    phonenumber:Number;

    @Input()
    age:Number;

    @Input()
    DateOfBirth:Date;

    @Output("customerObject")
    eventEmitterObj : EventEmitter<CustomerObject> = new EventEmitter<CustomerObject>(); 

    customerObject : CustomerObject= new CustomerObject();
  
    constructor(private heroService: CustomerServiceService) { }

  ngOnInit() {
  }

  submitted(){
    this.customerObject.firstName = this.firstName;
    this.customerObject.lastName = this.lastName;
    this.customerObject.email = this.email;
    this.customerObject.phonenumber = this.phonenumber;
    this.customerObject.age = this.age;
    this.customerObject.DateOfBirth = this.DateOfBirth;
    this.eventEmitterObj.emit(this.customerObject);
    this.newMethod();
  }


  private newMethod() {
    console.log(this.customerObject);
  }
}
