import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FavoritesComponent } from "./favorites/favorites.component";
import { MoviesComponent } from "./movies/movies.component";

const routes: Routes = [
  {
    path: "favorites",
    component: FavoritesComponent,
  },
  {
    path: "movies",
    component: MoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
