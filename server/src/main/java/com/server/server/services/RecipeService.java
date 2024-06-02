package com.server.server.services;

import java.util.List;

import com.server.server.models.Recipe;

public interface RecipeService {
    public void saveRecipe(Recipe recipe);

    public List<Recipe> getAllRecipes();
}
