import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tmdDb } from './constants/config';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  constructor(private _http: HttpClient) { }

httpService = inject(HttpClient)


getPopularMovies()
{
  const header = this.getHeaders();
  return this.httpService.get("https://api.themoviedb.org/3/movie/popular",{
      headers:this.getHeaders()
    });
}

getHeaders()
{
  let headers = new HttpHeaders();
  headers = headers.append("accept","application/json");
  headers = headers.append("Authorization","Bearer"+tmdDb.accesstoken);
  return headers;
}

}
