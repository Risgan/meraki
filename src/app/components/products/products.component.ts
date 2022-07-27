import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product, CreateProductDTO, UpdateProductDTO } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[]=[]
  showProductDetail = false;
  productChosen: Product = {
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

  limit=10;
  offset=0;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getAllProducts(this.limit,this.offset).subscribe(data =>{
      this.products=data;
      this.offset+=this.limit;
    })
  }

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail
    console.log(this.showProductDetail);
    
  }

  onShowDetail(id: string){
    console.log(id);
    this.productsService.getProduct(id).subscribe(data =>{
      console.log(data);
      this.productChosen = data;
      this.toggleProductDetail();
    })
  }

  createNewProduct(){
    const product: CreateProductDTO={
      title: 'test',
      description: 'bla',
      categoryId: 2,
      price: 10,
      images: ['']
    }
    this.productsService.create(product).subscribe(data=>{
      console.log(data);
      this.products.unshift(data)
    })
  }

  updateProduct(){
    const changes: UpdateProductDTO = {
      title: 'Nuevo titulo',
    }
    const id = this.productChosen.id
    this.productsService.update(id, changes).subscribe(data=>{
      console.log(data);
      const product = this.products.findIndex(item => item.id==this.productChosen.id)
      this.products[product]=data
    })
  }

  deleteProduct(){
    const id = this.productChosen.id
    this.productsService.delete(id).subscribe(data=>{
      console.log(data);
      const product = this.products.findIndex(item => item.id==this.productChosen.id)
      this.products.splice(product,1)
      this.showProductDetail = false;
    })
  }

  loadMore(){
    this.productsService.getAllProducts(this.limit,this.offset).subscribe(data =>{
      this.products=this.products.concat(data);
      this.offset+=this.limit;
    })
  }

}
