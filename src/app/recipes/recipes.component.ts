import { Component, OnInit } from "@angular/core";
import { RecipeApiService } from "../recipe-api.service";
@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  constructor(public recipeAPI: RecipeApiService) {}

  ngOnInit() {
    this.recipeAPI.getRecipes();
  }
}
