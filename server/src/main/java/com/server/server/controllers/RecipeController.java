package com.server.server.controllers;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.server.server.models.Recipe;
import com.server.server.services.RecipeService;

@CrossOrigin
@RestController
@RequestMapping("/api/recipe")
public class RecipeController {
    @Autowired
    RecipeService recipeService;

    @GetMapping("/getalltrecipes")
    public ResponseEntity<List<Recipe>> getallrecipes(){
    try 
    {
        List<Recipe> recipes = recipeService.getAllRecipes();
        if (recipes.isEmpty()) {return ResponseEntity.noContent().build(); }
        return ResponseEntity.ok(recipes); 
    } 
    catch(Exception e) 
    {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
    }

    @PostMapping("/createrecipe")
    public ResponseEntity<String> saverecipe(@RequestBody Recipe recipe)
    {
        try
        {
            recipeService.saveRecipe(recipe);
            return ResponseEntity.ok("{\"message\": \"Recipe saved successfully!\"}");
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"message\": \"An error occurred while saving the recipe.\"}");
        }
    }

    @GetMapping("/getrecipe")
    public ResponseEntity<Optional<Recipe>> getrecipe(@RequestParam String id)
    {
        try {
            Optional<Recipe> recipe = recipeService.getRecipe(id);
            if(recipe.isEmpty()) {return ResponseEntity.noContent().build(); }
            return ResponseEntity.ok(recipe);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getbycategory/{category}")
    public ResponseEntity<List<Recipe>> getbycategory(@PathVariable String category)
    {
        try{
            List<Recipe> recipesbycategory = recipeService.getByCategory(category);
            if (recipesbycategory.isEmpty()) {return ResponseEntity.noContent().build(); }
            return ResponseEntity.ok(recipesbycategory); 
        }
        catch(Exception e)
        {
            e.fillInStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getbystyle/{style}")
    public ResponseEntity<List<Recipe>> getbystyle(@PathVariable String style)
    {
        try{
            List<Recipe> recipesbystyle = recipeService.getByStyle(style);
            if (recipesbystyle.isEmpty()) {return ResponseEntity.noContent().build(); }
            return ResponseEntity.ok(recipesbystyle); 
        }
        catch(Exception e)
        {
            e.fillInStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
