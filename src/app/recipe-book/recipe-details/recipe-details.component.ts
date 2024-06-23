import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
    @Input() recipe: Recipe;

    constructor(
        //private shoppingListService: ShoppingListService
        private recipeService: RecipeService) {}
    
    onToShoppingListClicked() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
        // this.recipe.ingredients.forEach(
        //     (ingredient: Ingredient) => {
        //         this.shoppingListService.addIngredient(ingredient);
        //     }
        // )
    }
}