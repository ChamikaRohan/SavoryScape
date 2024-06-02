package com.server.server.services;

import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mongodb.client.gridfs.model.GridFSFile;

import org.springframework.data.mongodb.core.query.Query;

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

    public byte[] getRecipeImage(String id) throws IOException {
        ObjectId fileId = new ObjectId(id);
        GridFSFile file = gridfstemplate.findOne(new Query(Criteria.where("_id").is(fileId)));
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        gridfstemplate.getResource(file).getInputStream().transferTo(outputStream);
        return outputStream.toByteArray();
        }
}