import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
@Component({
  selector: 'app-comic-item',
  templateUrl: './comic-item.component.html',
  styleUrls: ['./comic-item.component.css']
})
export class ComicItemComponent implements OnInit {


  @Input() productItem: Product
  constructor() { }

  ngOnInit() {
  }

}
