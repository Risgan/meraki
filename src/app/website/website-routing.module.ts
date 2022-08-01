import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'categorias',
        component: CategoriasComponent
      },
      {
        path: 'sobrenosotros',
        component: SobreNosotrosComponent
      },
      {
        path: 'contacto',
        component: ContactoComponent
      },
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
