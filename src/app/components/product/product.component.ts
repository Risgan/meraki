import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() showProduct = new EventEmitter<string>();

  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id: '',
      name: '' 
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){

  }

  showDetail(){
    this.showProduct.emit(this.product.id)
  }

}
