import { Injectable } from '@angular/core';
import { Users } from './Model/user-data.const';
import { User } from './Model/user-model.interface';
import { Observable } from 'rxjs'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

   isAuthentication : boolean =false
  constructor(private _router:Router) 
  { }

  register(body:any)
  {
    var result;
    Users.forEach(element => {
      
      result = body.id
    });

    if(result==null)
      {
        Users.push(body)
        alert("kayıt işlemi başarılı!")
      }
      
      else
      {
        alert("Bu kullanıcı zaten var. Lütfen giriş yapın.")
      }
    
  }

  login(body:any)
  {
    var result = Users.find(x => x.email == body.email);

    if(body.email == null || body.password == null)
      {
        alert("Kullanıcı adı veya şifre anlanları boş geçilemez");
        return this.isAuthentication = false;
      }

  
    else if(result == null)
      {
        alert("Kullanıcı bulunamadı! Tekrar deneyiniz.");
        return this.isAuthentication = false;
      }
  
      else{
        alert("Kullanıcı girişi başarılı!")
        localStorage?.setItem("token",Math.random()+"");
        this._router.navigateByUrl("/browse")
      }

      return Error("x.")
      
  }

  isLoggedIn()
  {
    if(localStorage?.getItem("token"))
      {
        return true;
      }

      return true;
  }
}
