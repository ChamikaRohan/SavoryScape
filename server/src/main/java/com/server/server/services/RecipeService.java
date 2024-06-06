package com.server.server.services;

import java.util.List;
import java.util.Optional;

import com.server.server.models.Recipe;

public interface RecipeService {
    public void saveRecipe(Recipe recipe);

    public List<Recipe> getAllRecipes();

    public Optional<Recipe> getRecipe(String id);

    public List<Recipe> getByCategory(String categroy);

    public List<Recipe> getByStyle(String style);
}
