import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

const modulos=[
  MatSliderModule,
  MatButtonModule,
  MatMenuModule
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
