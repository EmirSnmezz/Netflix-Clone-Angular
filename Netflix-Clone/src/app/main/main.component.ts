import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { SSSData } from '../Model/SSS-data.const';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatButtonModule,MatInputModule,CdkAccordionModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  sssData = SSSData;
}
