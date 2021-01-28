import { Component, Input, OnInit } from "@angular/core";

import { MovieApiService } from "../movie-api.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"],
})
export class FavoritesComponent implements OnInit {

  constructor(public movieService: MovieApiService) {}
  removeFavorite(index: number) {
    this.movieService.favorites.splice(index, 1);
  }
  ngOnInit() {}
}
