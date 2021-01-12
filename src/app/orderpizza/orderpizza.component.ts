import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})
export class OrderpizzaComponent implements OnInit {

    constructor(private pizzaService: PizzaService, private cartService: CartService) { }

    pizzaList;
    qty=1;
    ngOnInit(): void {
        this.pizzaService.getPizzaDetails().subscribe(result => {
            this.pizzaList = result;
        })
    }

    addToCart(event, pizza){
        //console.log(pizza);
        //console.log(localStorage.getItem("loginId"));
        if(localStorage.getItem("loginId") != null){
            this.cartService.addPizzaToCart(pizza, this.qty);
            //console.log(this.qty);
            this.qty=1;
        }
        else{
            alert("Please Login First")
        }
    }

}
