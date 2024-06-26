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

    public void addComment(String comment, String id);

    public String[] getComments(String id);

    public List<Recipe> searchRecipe(String name);

    public List<Recipe> popularRecipes();
}
