import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit(): void {
    }
    loginForm = new FormGroup({
        loginId: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    })

    signIn(){
        this.userService.login(this.loginForm.value);
        //console.log(localStorage.getItem("loginId"));
    }
}
