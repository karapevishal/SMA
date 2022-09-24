import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private rout:Router) { }
  setToken(token:any){
    sessionStorage.setItem('token',token)
  }
  getToken(){
    sessionStorage.getItem('token')
  }
  login(value:any){
    this.setToken(value)
    return true
  }
  isLoggedIn(){
    return this.getToken()!==null;
  }
  logOut(){
    this.rout.navigate(['login']);
    sessionStorage.clear();
    sessionStorage.removeItem('token')
  }
  
}
