import { Component, OnInit } from '@angular/core';
import {MovieApiService} from '../movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(public movieService: MovieApiService) { }

  ngOnInit() {
    this.movieService.getMovies();
  }

}
