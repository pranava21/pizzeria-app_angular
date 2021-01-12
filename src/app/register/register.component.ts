import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit(): void {
    }
    registerForm = new FormGroup({
        userName: new FormControl('', [Validators.required]),
        userAge: new FormControl('', [Validators.required]),
        loginId: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        userType: new FormControl('', [Validators.required]),
    });

    signUp(){
        this.userService.registerUser(this.registerForm.value);
    }
}
