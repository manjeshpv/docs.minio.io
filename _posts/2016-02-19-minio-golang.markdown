---
layout: post
title:  Minio SDK Golang Documentation
comments: true
categories : [minio, sdk, golang, docs, examples]
tags: minio docs nodejs
css: css/poole
permalink: minio-golang 
---
 
 
# Minio Golang Quick Start


 
##1. Install
<!-- Rushan : All code blocks must be copyable and pasteable. Please use black screens for code blocks like prism.js (twilight) does? -->
 
	$ go get github.com/minio/minio-go
 				 

##2. Example

 
	package main

    import (
     "log"
     "github.com/minio/minio-go"
    )

    func main() {
     // Requests are always secure (HTTPS) by default. Set insecure=true to enable insecure (HTTP) access.
     // This boolean value is the last argument for New().

     // New returns an Amazon S3 compatible client object. API copatibality (v2 or v4) is automatically
     // determined based on the Endpoint value.
     minioClient, err := minio.New("play.minio.io:9000", "Q3AM3UQ867SPQQA43P2F", "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG", false)
     if err != nil {
         log.Fatalln(err)
     }
     buckets, err := minioClient.ListBuckets()
     if err != nil {
         log.Fatalln(err)
     }
     for _, bucket := range buckets {
         log.Println(bucket)
     }
    }

#### Running the above example

							 TBD : drop them into go repl. And show the output results.
 
## 3.Next Steps : Explore Further

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
 				  <a href="minio-golang-recipes.html"> Go to Recipes </a>
 			  </td>
 	   	</tr>	
		
 	   	<tr>
 		      <td> Full Examples </td>
 		      <td>	  
 				  <p> These are full blown examples for you to get started </p>	 
				  
 			  </td>
 			  <td>
 				  <a href="minio-golang-fulleg.html"> Go to Full Examples </a>
 			  </td>
 	   	</tr>
		
 	   	<tr>
 		      <td> API Reference </td>
 		      <td>	  
 				  <p>Full List of Minio's API methods </p>	 
				   
 			  </td>
 			  <td>
 				  <a href="minio-golang-apis.html"> Go to API Reference </a>
 			  </td>
 	   	</tr>
		     
 	   </tbody>
 </table>  