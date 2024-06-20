import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model"

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Lorem ipsum',
      'https://static01.nyt.com/images/2021/02/17/dining/17tootired-sesame-noodles/merlin_126109679_c4abf7f2-e900-4552-a09a-a5421d4cbe8f-superJumbo.jpg?quality=75&auto=webp'
      ),
    new Recipe(
      'Another Test Recipe',
      'Dolores sith Ahmed',
      'https://static01.nyt.com/images/2021/02/17/dining/17tootired-sesame-noodles/merlin_126109679_c4abf7f2-e900-4552-a09a-a5421d4cbe8f-superJumbo.jpg?quality=75&auto=webp')
    ]

  getRecipes() {
      return this.recipes.slice();
  }
}