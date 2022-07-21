import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[]=[
    {
      name: 'product 1',
      image: 'https://picsum.photos/id/1/800/800',
      price: 100,
      id: '1'
    },
    {
      name: 'product 2',
      image: 'https://picsum.photos/id/2/800/800',
      price: 800,
      id: '2'
    },
    {
      name: 'product 1',
      image: 'https://picsum.photos/id/1/800/800',
      price: 100,
      id: '1'
    },
    {
      name: 'product 2',
      image: 'https://picsum.photos/id/2/800/800',
      price: 800,
      id: '2'
    },
    {
      name: 'product 1',
      image: 'https://picsum.photos/id/1/800/800',
      price: 100,
      id: '1'
    },
    {
      name: 'product 2',
      image: 'https://picsum.photos/id/2/800/800',
      price: 800,
      id: '2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
