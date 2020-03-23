import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
product: Product={
  name: "Item 1",
  price: 100,
  desc:  "Nội dung mô tả sản phẩm",
  img:'http://placehold.it/700x400',
  status: false
}
changeStatus(){
  this.product.status = true;
}
changeTitle(e){
  this.product.name=e.target.value;
}
}
