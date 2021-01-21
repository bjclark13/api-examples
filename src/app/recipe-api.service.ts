import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {
  apiKey = "ADD YOUR API KEY HERE";
  appId = "ADD YOUR APP KEY HERE";
  url = "https://api.edamam.com/search";
  recipes: any[];
  constructor(private http: HttpClient) {}

  getRecipes() {
    const requestUrl =
      this.getUrlWithAPIKey() + "&q=pizza"; // add whatever params you want from here: https://developers.themoviedb.org/3/discover/movie-discover

    this.http.get(requestUrl).subscribe(
      (response: any) => {
        this.recipes = response.hits;

      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUrlWithAPIKey() {
    return `${this.url}?app_id=${this.appId}&app_key=${this.apiKey}`;
  }
}
