package com.server.server.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.server.server.models.Recipe;
import com.server.server.services.RecipeImageService;

@RestController
@RequestMapping("/api/recipe")
public class RecipeImageController {
    
    @Autowired
    RecipeImageService recipeimgservice;

   @PostMapping("/createrecipeimg")
   public String saverecipeimg(@RequestParam("file") MultipartFile file)
    {
        try{
            recipeimgservice.storeRecipeImage(file);
            return "Recipe saved successfully!";
        }
        catch(IOException e)
        {
            e.printStackTrace(); // or log the exception
            return "Error occurred while uploading image.";
        }
    }
}
