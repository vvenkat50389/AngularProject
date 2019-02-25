import { Component, OnInit, Input } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { CustomerObject } from '../formbarebone/CustomerObject';

@Component({
  selector: 'app-viewmodel',
  templateUrl: './viewmodel.component.html',
  styleUrls: ['./viewmodel.component.css']
})
export class ViewmodelComponent implements OnInit {

  @Input()
  custObj : CustomerObject = new CustomerObject();

  constructor(private custServ:CustomerServiceService) { }

  ngOnInit() {
  }

}
