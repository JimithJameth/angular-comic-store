import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    //{ id:1, productId: 1, productName:'Test 1',qty:1, price: 100},
    //{ id:2, productId: 3, productName:'Test 3',qty:1, price: 50},
    //{ id:3, productId: 2, productName:'Test 2',qty:1, price: 25},
    //{ id:4, productId: 4, productName:'Test 4',qty:1, price: 300},
    //{ id:5, productd: 5, productName:'Test 5',qty:2, price: 200},
  ];

   cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit()  {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }
    
addProductToCart(product: Product) {

  let productExists = false

  for(let i in this.cartItems){
    if (this.cartItems[i].id === product.id) {
      this.cartItems[i].qty++
      productExists = true
      break;
     }
    }

  if(!productExists) {
    this.cartItems.push({
      productId: product.id,
        productName: product.name,
        qty:1,
        price: product.price
    })
  } 

  this.cartTotal = 0
  this.cartItems.forEach(item =>{
    this.cartTotal += (item.qty * item.price)
  })
 }
}


