import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shopingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(){
    return this.shopingCartService.items
  }

  total(): number
  {
    return this.shopingCartService.total()
  }

  clear(){
    console.log('ta funfando')
    this.shopingCartService.clear()
  }

  removeitem(item: any)
  {
    this.shopingCartService.removeItem(item)
  }

  addItem(item: any)
  {
    this.shopingCartService.addItem(item)
  }
}
