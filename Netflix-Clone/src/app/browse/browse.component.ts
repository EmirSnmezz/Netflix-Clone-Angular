import { Component, inject } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Route, Router } from '@angular/router';
import { MovieCategoryComponent } from '../movie-category/movie-category.component';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  MovieService = inject(MovieServiceService);
  popularMovie = [];
  constructor(private _loginService:LoginServiceService, private _router:Router) {}
  
  ngOnInit()
  {
    this.MovieService.getPopularMovies().subscribe((result:any) =>
    {
      console.log(result);
      this.popularMovie = result.results;
    })
  }
}
