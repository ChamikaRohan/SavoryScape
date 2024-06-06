package com.server.server.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.server.server.models.Recipe;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, String>{
    List<Recipe> findByCategory(String category);
}
