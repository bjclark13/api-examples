import { Component, OnInit } from "@angular/core";
import { MovieApiService } from "../movie-api.service";
import { Movie } from "../IMovie";
@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  public selectedMovie: Movie;

  constructor(public movieService: MovieApiService) {}

  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

  favorite(movie: Movie) {
    console.log(movie);
    this.movieService.favorites.push(movie);
    console.log(this.movieService.favorites);
  }

  unFavorite(movie: Movie) {

  }

  ngOnInit() {
    this.movieService.getMovies();
  }
}
