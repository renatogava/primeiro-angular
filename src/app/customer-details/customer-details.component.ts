import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  customer: any;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.customer = this.customerService.getById(+id);
    }
  }
}
