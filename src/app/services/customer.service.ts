import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customers = [
    { id: 1, name: 'Renato' },
    { id: 2, name: 'João' }
  ];

  getCustomers(): any {
    return this.customers;
  }

  getById(id: number): any {
    let found = this.customers.find((obj) => {
      return obj.id === id;
    });
    
    return found;
  }
}
