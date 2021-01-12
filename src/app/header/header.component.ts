import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private route: Router, private cartService: CartService) { }

    loginId;
    c1;
    c2;
    noOfItemsInCart = 0;
    ngOnInit(): void {
        this.loginId = localStorage.getItem("loginId");

        this.cartService.getPizzasInCart().subscribe((response) => {
            if(response == 0){
                this.cartService.getToppingsInCart().subscribe((response) => {
                    if(response == 0){
                        this.noOfItemsInCart = 0;
                    }
                    else{
                        this.c2 = response;
                        this.noOfItemsInCart = this.c2.length;
                    }
                })
            }
            else {
                this.c1 = response;
                this.cartService.getToppingsInCart().subscribe((response) => {
                    if(response == 0) {
                        //this.noOfItemsInCart = this.c1.length;
                        for(let p of this.c1){
                            console.log(p.qty);
                            this.noOfItemsInCart += parseInt(p.qty);
                        }
                    }
                    else{
                        this.c2 = response;
                        for(let p of this.c1){
                            this.noOfItemsInCart += parseInt(p.qty);
                        }
                        this.noOfItemsInCart += this.c2.length;
                    }
                })
            }
        })
    }

    signOut(){
        console.log(localStorage.getItem("loginId"));
        localStorage.clear();
        this.loginId = null;
        this.route.navigate(['']);
    }
}
