package com.server.server.services;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface RecipeImageService {
    public String storeRecipeImage(MultipartFile mpf)throws IOException;
    public byte[] getRecipeImage(String id) throws IOException;
}
