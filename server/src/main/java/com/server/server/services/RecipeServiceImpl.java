package com.server.server.services;

import java.util.ArrayList;
import java.util.Arrays;
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

    public void addComment(String comment, String id)
    {
        Optional<Recipe> optionalRecipe = recipeRepo.findById(id);
        Recipe recipe = optionalRecipe.get();

        String[] existingComments  = recipe.getComments();

        if (existingComments  == null)
        {
            existingComments  = new String[0];   
        }

        String[] newComments = new String[existingComments .length + 1];
        System.arraycopy(existingComments , 0, newComments, 0, existingComments .length);
        newComments[newComments.length - 1] = comment;

        recipe.setComments(newComments);
        recipeRepo.save(recipe);
    }

    public String[] getComments(String id)
    {
        Optional<Recipe> optionalRecipe = recipeRepo.findById(id);
        Recipe recipe = optionalRecipe.get();

        String[] comments  = recipe.getComments();
        return comments;
    }

    public List<Recipe> searchRecipe(String name)
    {
        return recipeRepo.findByNameContainingIgnoreCase(name);
    }

    public List<Recipe> popularRecipes()
    {
        List<Recipe> allrecipes = recipeRepo.findAll(); 
        int max=0;
        Recipe maxRecipe = null;
        Recipe[] allrecipesarray = allrecipes.toArray(new Recipe[0]);
        for(int i = 0; i < allrecipesarray.length; i++)
        {
            if( max <allrecipesarray[i].getComments().length)
            {
                max = allrecipesarray[i].getComments().length;
                maxRecipe = allrecipesarray[i];
            }
        }

        int secondMax=0;
        Recipe secondMaxRecipe = null;

        for(int i = 0; i < allrecipesarray.length; i++)
        {
            if( secondMax < allrecipesarray[i].getComments().length)
            {
                if( max >  allrecipesarray[i].getComments().length)
                {
                    secondMax = allrecipesarray[i].getComments().length;
                    secondMaxRecipe = allrecipesarray[i];
                }
                else if (max == allrecipesarray[i].getComments().length)
                {
                    if (allrecipesarray[i].getId() != maxRecipe.getId())
                    {
                        secondMax = allrecipesarray[i].getComments().length;
                        secondMaxRecipe = allrecipesarray[i];
                    }
                }
            }
        }
        
        List<Recipe> maxList = Arrays.asList(maxRecipe);
        List<Recipe> secondMaxList = Arrays.asList(secondMaxRecipe);
        List<Recipe> combinedList = new ArrayList<>();
        combinedList.addAll(maxList);
        combinedList.addAll(secondMaxList);

        return combinedList;
    }
}
