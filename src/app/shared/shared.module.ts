import { PrimengModule } from './modules/primeng.module';
import { BoostrapModule } from './modules/boostrap.module';
import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const modules=[
  MaterialModule,
  BoostrapModule,
  PrimengModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports:[
    modules
  ]
})
export class SharedModule { }
