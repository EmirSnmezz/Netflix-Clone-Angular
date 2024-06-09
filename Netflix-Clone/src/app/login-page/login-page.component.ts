import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import { MatButton } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Footer2Component } from '../footer2/footer2.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,FormsModule } from '@angular/forms';
import { Users } from '../Model/user-data.const';
import { LoginServiceService } from '../login-service.service';
import { User } from '../Model/user-model.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatButton,MatCheckboxModule, Footer2Component,ReactiveFormsModule,FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  ngOnInit()
  {
    if(this._loginService.isLoggedIn())
      {
        this._router.navigateByUrl("/browse")
      }

  }

  constructor(private _loginService: LoginServiceService, private _router:Router){}
  userData = Users


loginFormGroup = new FormGroup(
  {
    email: new FormControl("", [Validators.email,Validators.required]),
    password: new FormControl("",[Validators.required])
  }
)



// register()
// {
//   this._loginService.register(this.loginFormGroup.value)
//   this.userData.forEach(element => {
//     alert(element.email)
//   });
// }

login()
{

this._loginService.login(this.loginFormGroup.value)

}

}
