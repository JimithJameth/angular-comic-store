import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService} from 'src/app/services/messenger.service'
@Component({
  selector: 'app-comic-item',
  templateUrl: './comic-item.component.html',
  styleUrls: ['./comic-item.component.css']
})
export class ComicItemComponent implements OnInit {


  @Input() productItem: Product

  constructor(private msg: MessengerService) { }

  ngOnInit() {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
  }
}
