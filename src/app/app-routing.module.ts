import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OrderpizzaComponent} from './orderpizza/orderpizza.component';
import {BuildpizzaComponent} from './buildpizza/buildpizza.component';
import {CartComponent} from './cart/cart.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'orderpizza', component: OrderpizzaComponent},
    {path: 'buildpizza', component: BuildpizzaComponent},
    {path: 'cart', component: CartComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
