import { Component, Input, inject } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { MovideCardComponent } from '../movide-card/movide-card.component';

@Component({
  selector: 'app-movie-category',
  standalone: true,
  imports: [MovideCardComponent],
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.scss'
})
export class MovieCategoryComponent {
@Input() title = "";
@Input() movieList = [];

movieService = inject(MovieServiceService)

ngOnInit()
{
  this.movieService.getPopularMovies().subscribe((result)=>
    {
      console.log(JSON.stringify(result))
    })
  
}
}
