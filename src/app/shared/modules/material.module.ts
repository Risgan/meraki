import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

const modulos=[
  MatSliderModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modulos
  ],
  exports:[
    modulos
  ]
})
export class MaterialModule { }
