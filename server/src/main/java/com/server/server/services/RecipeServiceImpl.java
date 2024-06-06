package com.server.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.server.models.Recipe;
import com.server.server.repositories.RecipeRepository;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    private RecipeRepository recipeRepo;

    public void saveRecipe(Recipe recipe)
    {
        recipeRepo.save(recipe);
    }

    public List<Recipe> getAllRecipes()
    {
        List<Recipe> recipe = recipeRepo.findAll();
        return recipe;
    }

    public Optional<Recipe> getRecipe(String id)
    {
        Optional<Recipe> recipe = recipeRepo.findById(id);
        return recipe;
    }

    public List<Recipe> getByCategory(String category)
    {
        return recipeRepo.findByCategory(category);
    }

    public List<Recipe> getByStyle(String style)
    {
        return recipeRepo.findByStyle(style);
    }
}
