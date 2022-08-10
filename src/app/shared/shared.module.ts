import { PrimengModule } from './modules/primeng.module';
import { BoostrapModule } from './modules/boostrap.module';
import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';

const modules=[
  MaterialModule,
  BoostrapModule,
  PrimengModule,
  RouterModule
]

const components=[
  CarouselComponent,
  ImgComponent,
  ProductComponent,
  ProductsComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    modules
  ],
  exports:[
    modules,
    components
  ]
})
export class SharedModule { }
