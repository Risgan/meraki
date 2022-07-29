import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ]
})
export class WebsiteModule { }
