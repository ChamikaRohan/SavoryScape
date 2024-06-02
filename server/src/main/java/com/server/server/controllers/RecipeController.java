package com.server.server.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.server.server.DTOs.RecipewithimgRequest;
import com.server.server.models.Recipe;
import com.server.server.services.RecipeImageService;
import com.server.server.services.RecipeService;

@RestController
@RequestMapping("/api/recipe")
public class RecipeController {
    @Autowired
    RecipeService recipeService;

    @GetMapping("/getalltrecipes")
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

    @GetMapping("/getrecipe")
    public Optional<Recipe> getrecipe(@RequestParam String id)
    {
        return recipeService.getRecipe(id);
    }
}
