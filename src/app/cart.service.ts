import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    constructor(private http: HttpClient) { }
    result: string;
    array: any[];
    addPizzaToCart(pizza, qty){
        let pizzaObj = {
            foodType: 'pizza',
            loginId: localStorage.getItem('loginId'),
            qty: qty,
            details: pizza
        }
        this.http.post<Object>('http://localhost:3000/addpizzatocart', pizzaObj).subscribe((response) => {
            alert("Added to Cart!");
            window.location.reload();
        });
    }

    deletePizzaFromCart(itemId){
        return this.http.delete('http://localhost:3000/deletefromcart/'+ itemId);
    }

    getPizzasInCart(){
        return this.http.get<Object>('http://localhost:3000/getpizzasincart/' + localStorage.getItem('loginId'));
    }

    getToppingsInCart(){
        return this.http.get<Object>('http://localhost:3000/gettoppingsincart/' + localStorage.getItem('loginId'));
    }

    addToppingsToCart(toppings){
        let toppingList = [];
        for(let t of toppings){
            toppingList.push({
                foodType: 'topping',
                loginId: localStorage.getItem('loginId'),
                details: t
            })
        }
        this.http.post<Object>('http://localhost:3000/addtoppingstocart', toppingList).subscribe((response) => {
            alert("Added to Cart!");
            window.location.reload();
        });
    }

    clearCart(){
        return this.http.delete('http://localhost:3000/clearcart/' + localStorage.getItem('loginId'))
    }

    updatePizzaQty(pizza){
        return this.http.put('http://localhost:3000/updatepizzaqty', pizza);
    }
}
