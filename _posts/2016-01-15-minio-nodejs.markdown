---
layout: post
title:  Minio SDK Node.js Documentation
comments: true
categories : [minio, sdk, nodejs, docs, examples]
tags: minio docs nodejs
css: css/poole
permalink: minio-nodejs 
---
 
# Minio Node.js Quick Start

 
##1. Install

<!-- Rushan : All code blocks must be copyable and pasteable. Please use black screens for code blocks like prism.js (twilight) does? -->

###  From npm
Minio Node.js API can be installed with npm on the command line.

  
	  $ npm install minio --save 
 
 
### From source
 You may also install from our sources by doing : 
 	

			$ git clone https://github.com/minio/minio-js 
    $ cd minio-js
	$ npm install
	$ npm install -g
   			 

 
  
##2. Example

	   var Minio = require('minio')
	   
	   var minioClient = new Minio({
	     endPoint: 'play.minio.io:9000', 
	     accessKey: 'Q3AM3UQ867SPQQA43P2F', 
	     secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
	   });

	   minioClient.listBuckets(function(e, buckets) {
	    
		 if (e)
		 	 return console.log(e);
			 
	     console.log('buckets :', buckets);
	   });
 
 
 
#### Running the above example

		TBD. WE need to be able to do minioClient.public_url 
	 
	
		<!doctype html>
		<html>
		  <body>
		     <h1> Your URLS </h1>
			 {{#each urls}}
			 <p>
			  <a href="/url/{{id}}">{{url}}</a>
			  </p>
			 {{/each}}
		     
		  </body>
		</html>

 
##3. Next Steps : Explore Further

Now that you have run this example successfully, you can go look at all our other APIs in our API Guide or check out our full examples. You can also visit our Recipes sections to get answers to specific needs in your project. 

<!-- Markdown Tables are Ugly! Let's go with HTML here. Please style it Rushan -->

<table class="table table-bordered table-striped table-info">
	 
	<tbody>
	   	<tr>
		      <td> Recipes </td>
		      <td>	  
				  <p> These will help you small specific examples of code to speed up your development  </p>	 
				  
			  </td>
			  <td>
				  <a href="minio-nodejs-recipes.html"> Go to Recipes </a>
			  </td>
	   	</tr>	
		
	   	<tr>
		      <td> Full Examples </td>
		      <td>	  
				  <p> These are full blown examples for you to get started </p>	 
				  
			  </td>
			  <td>
				  <a href="minio-nodejs-fulleg.html"> Go to Full Examples </a>
			  </td>
	   	</tr>
		
	   	<tr>
		      <td> API Reference </td>
		      <td>	  
				  <p>Full List of Minio's API methods </p>	 
				   
			  </td>
			  <td>
				  <a href="minio-nodejs-apis.html"> Go to API Reference </a>
			  </td>
	   	</tr>
		     
	   </tbody>
</table>