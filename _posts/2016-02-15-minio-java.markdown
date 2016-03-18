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
	import io.minio.messages.Bucket;
	import io.minio.errors.MinioException;
	import java.util.Iterator;
	import java.util.List;
	import java.io.IOException;
	import java.security.NoSuchAlgorithmException;
	import java.security.InvalidKeyException;
	import org.xmlpull.v1.XmlPullParserException;

	public class HelloListBuckets {
	    public static void main(String[] args) throws NoSuchAlgorithmException, IOException, InvalidKeyException,  XmlPullParserException, MinioException {

	        // Create a minioClient with the Minio Server name, Port, ACCESS KEY and SECRET KEY
	        MinioClient minioClient = new MinioClient("play.minio.io",9002, "Q3AM3UQ867SPQQA43P2F", "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG");

	        // list buckets
	        List<Bucket> bucketList = minioClient.listBuckets();
	        Iterator<Bucket> bucketIterator = bucketList.iterator();

	        while (bucketIterator.hasNext()) {
	            Bucket bucket = bucketIterator.next();
	            System.out.println(bucket.name());
	        }
	    }
	}
	~

#### Running the above example

 
<!-- Rushan : Please format. It looks really bad right now. -->
	  
Compile the above snippet by typing in your terminal 
	  
	   javac -cp "minio-1.0.1-all.jar"  HelloListBuckets.java

Run the above snipper by typing in your terminal 

	   java HelloListBuckets
	 
Results should look like this :
			
				> java HelloListBuckets
           productimages-bucket
           marketingimages-bucket
           testbucket
	       logfiles-bucket
				 
		 

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
 				  <a href="minio-java-recipes.html" class="btn btn-primary"> Recipes </a>
 			  </td>
 	   	</tr>	
		
 	   	<tr>
 		      <td> Full Examples </td>
 		      <td>	  
 				  <p> These are full blown examples for you to get started </p>	 
				  
 			  </td>
 			  <td>
 				  <a href="minio-java-fulleg.html" class="btn btn-primary" > Full Examples </a>
 			  </td>
 	   	</tr>
		
 	   	<tr>
 		      <td> API Reference </td>
 		      <td>	  
 				  <p>Full List of Minio's API methods </p>	 
				   
 			  </td>
 			  <td>
 				  <a href="minio-java-apis.html" class="btn btn-primary">  API Reference </a>
 			  </td>
 	   	</tr>
		     
 	   </tbody>
 </table>