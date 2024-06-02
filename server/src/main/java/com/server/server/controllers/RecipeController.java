package com.server.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.server.models.Recipe;
import com.server.server.services.RecipeService;

@RestController
@RequestMapping("/api/recipe")
public class RecipeController {
    @Autowired
    RecipeService recipeService;

    @GetMapping("/gealltrecipes")
    public List<Recipe> getallrecipes()
    {
        return recipeService.getAllRecipes();
    }

    @PostMapping("/createrecipe")
    public String saverecipe(@RequestBody Recipe recipe)
    {
        recipeService.saveRecipe(recipe);
        return "Recipe saved successfully!";
    }
    
}
