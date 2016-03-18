---
layout: post
title:  Minio SDK Java Documentation
comments: true
categories : [minio, sdk, java, docs, examples]
tags: minio docs java
css: css/poole
permalink: minio-java
---
 
# Minio Java Quick Start

 
##1. Install

<!-- Rushan : All code blocks must be copyable and pasteable. Please use black screens for code blocks like prism.js (twilight) does? -->

###  From  maven

	<dependency>
	    <groupId>io.minio</groupId>
	    <artifactId>minio</artifactId>
	    <version>1.0.1</version>
	</dependency>


###  From  gradle

	dependencies {
    	compile 'io.minio:minio:1.0.1'
	}

###  From JAR

You can directly download the JAR file <a href="http://repo1.maven.org/maven2/io/minio/minio/1.0.1/">here</a> and include it in your java or android project.	 

 
						 
##2. Example  

 
	import io.minio.MinioClient;
	import io.minio.errors.ClientException;
	import io.minio.messages.ListAllMyBucketsResult;
	import org.xmlpull.v1.XmlPullParserException;

	import java.io.IOException;

	public class HelloListBuckets {
    	public static void main(String[] args) throws IOException, XmlPullParserException, ClientException {
        	// Set s3 endpoint, region is calculated automatically
        	Client minioClient = new MinioClient("play.minio.io:9000", "Q3AM3UQ867SPQQA43P2F", "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG");

        	// list buckets
        	Iterator<Bucket> bucketList = minioClient.listBuckets();
        	while (bucketList.hasNext()) {
            	Bucket bucket = bucketList.next();
            	System.out.println(bucket.getName());
        	}
    	}
	}

#### Running the above example

 

	  
Compile the above snippet by typing in your terminal 
	  
	  javac HelloListBuckets.java

Run the above snipper by typing in your terminal 

	 java HelloListBuckets
	 
Results should look like this :
			
				 TBD : drop them into go repl if Available. And show the output results.
		 

##3. Next Steps : Explore Further

 Now that you have run this example successfully, you can go look at all our other APIs in our API Guide or check out our full examples. You can also visit our Recipes sections to get answers to specific needs in your project. 

<!-- Rushan: Markdown Tables are looking Ugly! Let's go with HTML here Please Style. -->

<table class="table table-bordered table-striped table-info">
	 
 	<tbody>
 	   	<tr>
 		      <td> Recipes </td>
 		      <td>	  
 				  <p> These will help you small specific examples of code to speed up your development  </p>	 
				  
 			  </td>
 			  <td>
 				  <a href="minio-java-recipes.html"> Go to Recipes </a>
 			  </td>
 	   	</tr>	
		
 	   	<tr>
 		      <td> Full Examples </td>
 		      <td>	  
 				  <p> These are full blown examples for you to get started </p>	 
				  
 			  </td>
 			  <td>
 				  <a href="minio-java-fulleg.html"> Go to Full Examples </a>
 			  </td>
 	   	</tr>
		
 	   	<tr>
 		      <td> API Reference </td>
 		      <td>	  
 				  <p>Full List of Minio's API methods </p>	 
				   
 			  </td>
 			  <td>
 				  <a href="minio-java-apis.html"> Go to API Reference </a>
 			  </td>
 	   	</tr>
		     
 	   </tbody>
 </table>