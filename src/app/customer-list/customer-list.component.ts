import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  constructor(private customerService: CustomerService) {

  }

  customers: any;

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }
}
