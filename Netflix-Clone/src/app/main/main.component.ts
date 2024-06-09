import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { SSSData } from '../Model/SSS-data.const';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatButtonModule,MatInputModule,CdkAccordionModule,FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  sssData = SSSData;

  constructor(private _router:Router,private _loginService:LoginServiceService){}


  ngOnInit()
  {
    if(this._loginService.isLoggedIn())
      {
        this._router.navigateByUrl("/browse")
      }

  }

  buttonRoute()
    {
      this._router.navigateByUrl("login");
    }
}
