# PizzeriaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.
Front End
The application has 5 pages, 
1)	The Home Page
2)	Order Pizza Page
3)	Login Page
4)	Register Page
5)	Cart

The default page is the home page. Any unregistered user can browse the catalogue of pizzas, but cannot order without registering and logging in. 
Once logged in, the user can order any pizza with any topping. 
Once in the cart, the total bill is displayed. The entire cart can be cleared or any one of the cart items can also be individually deleted as well. The header is designed in a separate component

Backend
The Endpoints are:
Get Requests

•	/getallpizzas

•	/getpizzabyid/:id

•	/getpizzasincart/:user

•	/getalltoppings

•	/gettoppingbyid/:id

•	/gettoppingsincart/:user

•	/getpizzabyname

•	/gettoppingbyname

•	/getaccountwithloginid/:loginId


Post Requests

•	/addpizzatocart

•	/addtoppingstocart

•	/signup


Put Requests

•	/updatepizzaqty


Delete Requests

•	/clearcart/:user

•	/deletefromcart/:id



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
