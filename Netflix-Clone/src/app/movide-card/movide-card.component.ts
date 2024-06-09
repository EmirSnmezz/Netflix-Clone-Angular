import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movide-card',
  standalone: true,
  imports: [],
  templateUrl: './movide-card.component.html',
  styleUrl: './movide-card.component.scss'
})
export class MovideCardComponent {
@Input() movie = [] ;
}
