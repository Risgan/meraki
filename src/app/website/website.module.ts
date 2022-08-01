import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    NavComponent,
    FooterComponent,
    NotFoundComponent,
    CategoriasComponent,
    SobreNosotrosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ]
})
export class WebsiteModule { }
