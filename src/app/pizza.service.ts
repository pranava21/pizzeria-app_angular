import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
	constructor(private http: HttpClient) { }
	getPizzaDetails(){
		return this.http.get<Object>('http://localhost:3000/getallpizzas');
	}


    getAllToppings(){
	    return this.http.get<Object>('http://localhost:3000/getalltoppings');
    }

}
