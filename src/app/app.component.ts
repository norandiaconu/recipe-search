import { Component } from '@angular/core';
import { z } from 'zod';
import { environment } from '../environments/environment';

const zodIngredients = z.object({
    name: z.string(),
    components: z.array(
        z.object({
            raw_text: z.string()
        })
    )
});
type Ingredients = z.infer<typeof zodIngredients>;

const zodInstructions = z.object({
    display_text: z.string()
});
type Instructions = z.infer<typeof zodInstructions>;

const zodRecipe = z.object({
    name: z.string(),
    sections: z.array(zodIngredients),
    instructions: z.array(zodInstructions),
    slug: z.string()
});
type Recipe = z.infer<typeof zodRecipe>;

interface Result {
    count: number;
    results: Recipe[];
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true
})
export class AppComponent {
    title = 'recipe-search';
    recipes: Recipe[] = [];
    recipeName = '';
    ingredients: Ingredients[] = [];
    instructions: Instructions[] = [];
    slug = '';

    async searchTasty(ingredient1: string, ingredient2: string, ingredient3: string): Promise<void> {
        console.log(ingredient1, ingredient2, ingredient3);
        const ingredientList: string[] = [];
        ingredientList.push(ingredient1);
        ingredientList.push(ingredient2);
        ingredientList.push(ingredient3);
        let url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=';
        ingredientList.forEach((ingredient) => {
            if (ingredient) {
                url = url + ingredient + ',';
            }
        });
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': environment.apiKey,
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = (await response.json()) as Result;
            this.recipes = result.results;
            console.log(result.results);
        } catch (error) {
            console.error(error);
        }
    }

    display(recipe: Recipe): void {
        console.log(recipe);
        this.recipeName = recipe.name;
        this.ingredients = recipe.sections;
        this.instructions = recipe.instructions;
        this.slug = recipe.slug;
        setTimeout(() => {
            window.scrollTo({
                top: 500,
                behavior: 'smooth'
            });
        }, 100);
    }
}
