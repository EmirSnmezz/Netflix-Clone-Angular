import { Injectable } from '@angular/core';
import { Users } from './Model/user-data.const';
import { User } from './Model/user-model.interface';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor() 
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
}
