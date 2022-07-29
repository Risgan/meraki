import { PrimengModule } from './modules/primeng.module';
import { BoostrapModule } from './modules/boostrap.module';
import { MaterialUiModule } from './modules/material-ui.module';
import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const modules=[
  MaterialModule,
  MaterialUiModule,
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
