package com.server.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.env.Environment;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		//SpringApplication.run(ServerApplication.class, args);

		ConfigurableApplicationContext context = SpringApplication.run(ServerApplication.class, args);
		Environment environment = context.getEnvironment();

        // Retrieving and printing the values of environment variables
        String mongoUri = environment.getProperty("SPRING_DATA_MONGODB_URI");

        System.out.println("MongoDB URI: " + mongoUri);
	}

}
