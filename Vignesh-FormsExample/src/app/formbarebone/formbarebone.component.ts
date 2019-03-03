import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { CustomerObject } from './CustomerObject';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formbarebone',
  templateUrl: './formbarebone.component.html',
  styleUrls: ['./formbarebone.component.css']
})
export class FormbareboneComponent implements OnInit {

    parentFormObj = new FormGroup({
      firstNameControl : new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      lastNameControl : new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      emailControl : new FormControl('',[
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      phonenumberControl : new FormControl('',[
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern(/^\d+$/),
        Validators.minLength(10)
        //this.numberValidator(/[0-9]+$/)
      ]),
      ageControl : new FormControl('',[
        Validators.required,
        Validators.pattern(/^\d{1,3}$/)
      ]),
      DateOfBirthControl : new FormControl('',[
        Validators.required,
        Validators.pattern(/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/)
      ])
      });

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

  TestData(e){
    e.preventDefault();
    this.parentFormObj.patchValue({
      firstNameControl: 'Vignesh',
      lastNameControl: 'Venkataraman',
      emailControl:'vigneshv@yahoo.com',
      phonenumberControl:9940181637,
      ageControl:26,
      DateOfBirthControl:'16-01-1992'
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if(this.parentFormObj.valid){
    console.warn(this.parentFormObj.value);
    }else{
      console.warn("Errors detected");
    }
    
  }

  get firstNameControl() { return this.parentFormObj.get('firstNameControl'); }
  get lastNameControl() { return this.parentFormObj.get('lastNameControl'); }
  get emailControl() { return this.parentFormObj.get('emailControl'); }
  get phonenumberControl() { return this.parentFormObj.get('phonenumberControl'); }
  get ageControl() { return this.parentFormObj.get('ageControl'); }
  get DateOfBirthControl() { return this.parentFormObj.get('DateOfBirthControl'); }
  
  /* validateAllFormFields(formGroup: FormGroup) {         
  Object.keys(formGroup.controls).forEach(field => {  
    const control = formGroup.get(field);             
    if (control instanceof FormControl) {             
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        
      this.validateAllFormFields(control);           
    }
   });
  } */

  numberValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = !nameRe.test(control.value);
      return forbidden ? {'invalid': {value: control.value}} : null;
    };
  }
}
