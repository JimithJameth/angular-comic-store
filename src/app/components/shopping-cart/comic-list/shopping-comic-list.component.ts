import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-shopping-comic-list',
  templateUrl: './shopping-comic-list.component.html',
  styleUrls: ['./shopping-comic-list.component.css']
})
export class ShoppingComicListComponent implements OnInit {

  productList: Product[] = []

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
  this.productList = this.ProductService.getProducts()
  }

}
