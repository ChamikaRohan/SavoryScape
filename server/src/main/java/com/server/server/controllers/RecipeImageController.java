package com.server.server.controllers;

import java.io.IOException;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
                return recipeimgservice.storeRecipeImage(file);
                // return "Recipe saved successfully!";
            }
            catch(IOException e)
            {
                e.printStackTrace(); // or log the exception
                return "Error occurred while uploading image.";
            }
        }
        @GetMapping("/getrecipeimg")
        public ResponseEntity<byte[]> getrecipeimg(@RequestParam("fileId") String fileId)
        {
            try {
                byte[] imageBytes = recipeimgservice.getRecipeImage(fileId);

                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.IMAGE_JPEG);
                headers.setContentLength(imageBytes.length);

                return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
            } catch (IOException e) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
}