import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatButton],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
