import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css']
})
export class BuildpizzaComponent implements OnInit {

  constructor(private pizzaService: PizzaService, private cartService: CartService) { }

  toppingList;
  totalCost: number = 0;
  selectedTopping = [];
  dis = true;
  ngOnInit(): void {
      this.pizzaService.getAllToppings().subscribe((result) => {
          this.toppingList = result;
      })
  }

    addOrRemoveTopping(event, topping){
        this.dis = false;
        if(event.target.checked) {
            this.selectedTopping.push(topping);
            this.totalCost += topping.price;
        }
        else{
            this.selectedTopping = this.selectedTopping.filter((t) =>
                t.tname != topping.tname
            )
            this.totalCost -= topping.price;
        }
    }

    addToCart(){
      if(localStorage.getItem("loginId")==null){
          alert("Please login");
      }
      else {
          this.cartService.addToppingsToCart(this.selectedTopping);
          //console.log(this.selectedTopping);
      }
    }
}
