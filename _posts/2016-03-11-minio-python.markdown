---
layout: post
title:  Minio SDK Python Documentation
comments: true
categories : [minio, sdk, python, docs, examples]
permalink: minio-python 
---
 
 
# Minio Python Quick Start

 
##1. Install
<!-- Rushan : All code blocks must be copyable and pasteable. Please use black screens for code blocks like prism.js (twilight) does? -->

#### Install with pip
    
	$ pip install minio		 

##2. Example

	from minio import Minio

	# Instantiate a client
	minoClient = Minio('play.minio.io:9000',
	                access_key='Q3AM3UQ867SPQQA43P2F',
	                secret_key='zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG')

	# List buckets
	buckets = minioClient.list_buckets()
	for bucket in buckets:
	    print('bucket:', bucket.name, bucket.creation_date)
 

#### Running the above example

    		>> Drop them into a REPL and show output here
						     					 
 
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
 				  <a href="minio-python-recipes.html"> Go to Recipes </a>
 			  </td>
 	   	</tr>	
		
 	   	<tr>
 		      <td> Full Examples </td>
 		      <td>	  
 				  <p> These are full blown examples for you to get started </p>	 
				  
 			  </td>
 			  <td>
 				  <a href="minio-python-fulleg.html"> Go to Full Examples </a>
 			  </td>
 	   	</tr>
		
 	   	<tr>
 		      <td> API Reference </td>
 		      <td>	  
 				  <p>Full List of Minio's API methods </p>	 
				   
 			  </td>
 			  <td>
 				  <a href="minio-python-apis.html"> Go to API Reference </a>
 			  </td>
 	   	</tr>
		     
 	   </tbody>
 </table>
   