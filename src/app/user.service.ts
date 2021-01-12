import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient, private route: Router) { }

    registerUser(user){
        this.http.get<Object>('http://localhost:3000/getaccountwithloginid/' + user.loginId).subscribe((response) => {
            if(response == 0){
                this.http.post<any>('http://localhost:3000/signup', user).subscribe(() => {
                    alert("Success!")
                })
            }
            else{
                alert('User with ID ' + user.loginId + ' already exists');
            }
        })
    }

    login(userCreds){
        this.http.get<Object>('http://localhost:3000/getaccountwithloginid/' + userCreds.loginId).subscribe((response) => {
            if(response == 0){
                alert('Invalid/LoginId does not exist')
            }
            else{
                if(userCreds.password == response[0].password){
                    localStorage.setItem("loginId", userCreds.loginId);
                    this.route.navigate(['/orderpizza']).then(()=>{
                        window.location.reload();
                        alert("Logged In!")
                    });
                }
                else{
                    alert("Incorrect Password");
                }
            }
        })
    }

    checkUserType(loginId) {
        return this.http.get<Object>('http://localhost:3000/getaccountwithloginid/' + loginId);
    }
}
