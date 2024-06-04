import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatButtonModule,MatInputModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
