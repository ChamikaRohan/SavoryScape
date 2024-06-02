package com.server.server.services;

import java.io.IOException;
import java.io.InputStream;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class RecipeImageServiceImpl implements RecipeImageService{
    
    @Autowired
    private GridFsTemplate gridfstemplate;
    
    public String storeRecipeImage(MultipartFile file) throws IOException
    {
        InputStream ips = file.getInputStream();
        ObjectId id =gridfstemplate.store(ips, file.getOriginalFilename(), file.getContentType());
        return id.toHexString();
    }

    // public byte[] getRecipeImage(String id) throws IOException 
    // {
    //     GridFsTemplate resource = gridfstemplate.getResource(gridfstemplate.findOne(query(where("_id").is(id))));
    //     return resource.getInputStream().readAllBytes();
    // }
}
