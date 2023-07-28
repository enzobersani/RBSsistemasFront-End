import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './componentes/user/user.component';
import { ProductsComponent } from './componentes/products/products.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'product', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
