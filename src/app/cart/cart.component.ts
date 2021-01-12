import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';
import {Router} from '@angular/router';
import {CartService} from '../cart.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor(private cartService: CartService, private userService: UserService) { }

    pizzas;
    toppings;
    total: number = 0;
    discount = 0;
    ngOnInit(): void {
        this.cartService.getPizzasInCart().subscribe((response) => {
            this.pizzas = response;
            this.cartService.getToppingsInCart().subscribe(response => {
                this.toppings = response;

                for(let p of this.pizzas) {
                    this.total += parseInt(p.details.price) * parseInt(p.qty);
                }

                for(let t of this.toppings){
                    this.total += parseInt(t.details.price);
                }

                let loginId = localStorage.getItem('loginId');
                this.userService.checkUserType(loginId).subscribe(response => {
                    if(response[0].userType == "prime"){
                        this.discount = this.total * 10/100;
                        this.total -= this.discount;
                    }
                })
            })
        })
    }

    order() {
        this.cartService.clearCart().subscribe((response) => {
            alert("Your Order has been Placed!");
            window.location.reload();
        });
    }

    clear(){
        console.log(localStorage.getItem("loginId"));
        this.cartService.clearCart().subscribe((response) => {
            alert("Cleared Cart!");
            window.location.reload();
        });
        //window.location.reload();
    }

    changeQty(event, pizza){
        if(event.target.value <= 5 && event.target.value > 0){
            let pizzaObj = {
                id: pizza._id,
                qty: event.target.value
            }
            console.log(pizzaObj);
            this.cartService.updatePizzaQty(pizzaObj).subscribe((response) => {
                console.log(response);
                window.location.reload();
            })
        }
        else if(event.target.value == 0){
            alert("Min Order Qty is 1");
            window.location.reload();
        }
        else if(event.target.value > 5){
            alert("Max Order Qty is 5");
            window.location.reload();
        }
    }

    delete(event, pizza){
        console.log(pizza._id);
        this.cartService.deletePizzaFromCart(pizza._id).subscribe((response) => {
            window.location.reload();
            //console.log(response);
        })
    }
}
