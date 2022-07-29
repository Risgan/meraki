import { PrimengModule } from './primeng.module';
import { BoostrapModule } from './boostrap.module';
import { MaterialUiModule } from './material-ui.module';
import { MaterialModule } from './material.module';
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
