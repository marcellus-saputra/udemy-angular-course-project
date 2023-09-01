import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Lorem ipsum',
      'https://static01.nyt.com/images/2021/02/17/dining/17tootired-sesame-noodles/merlin_126109679_c4abf7f2-e900-4552-a09a-a5421d4cbe8f-superJumbo.jpg?quality=75&auto=webp'
      ),
    new Recipe(
      'Test Recipe',
      'Lorem ipsum',
      'https://static01.nyt.com/images/2021/02/17/dining/17tootired-sesame-noodles/merlin_126109679_c4abf7f2-e900-4552-a09a-a5421d4cbe8f-superJumbo.jpg?quality=75&auto=webp')
  ]

  constructor() {

  }

  ngOnInit() {

  }

}
