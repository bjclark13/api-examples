import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Response {
  results: Movie[];
  page: number;
}

interface Movie {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

@Injectable({
  providedIn: "root",
})
export class MovieApiService {
  apiKey = "4e66c947aedb9486a2094909c53879c7";
  url = "https://api.themoviedb.org/3/discover/movie";
  movies: Movie[] = [];
  favorites: Movie[] = [
    {
      title: "My Movie",
    },
  ];

  constructor(private http: HttpClient) {}

  getMovies() {
    const requestUrl =
      this.getUrlWithAPIKey() + "&sort_by=release_date.desc&page=1"; // add whatever params you want from here: https://developers.themoviedb.org/3/discover/movie-discover

    this.http.get(requestUrl).subscribe(
      (response: Response) => {
        console.log(response.results);
        this.movies = response.results.slice(0, 3); // only first 3
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUrlWithAPIKey() {
    return `${this.url}?api_key=${this.apiKey}&language=en-US`;
  }
}
