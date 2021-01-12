import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OrderpizzaComponent } from './orderpizza/orderpizza.component';
import {PizzaService} from './pizza.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BuildpizzaComponent } from './buildpizza/buildpizza.component';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {CartService} from './cart.service';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OrderpizzaComponent,
    BuildpizzaComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatBadgeModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [PizzaService, CartService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
