import { Injectable } from '@angular/core';
import { CustomerObject } from './formbarebone/CustomerObject';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  public custObj = new CustomerObject();
  constructor() { }

  

}
