import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product ={
    id: '1',
    title: 'Moto Pulsar Ns 160 Fi',
    price: 9099000,
    images: [],
    description: '3',
    category: {
      id: -1,
      name: 'Vehiculo',
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){

  }

}
