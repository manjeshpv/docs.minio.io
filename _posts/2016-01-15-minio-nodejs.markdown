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

Minio Node.js API can be installed with npm on the command line.

 <pre><code class="javascript">
	  $ npm install minio --save 
 </code></pre>
 	
   			 

##2. SetUp

 To use the Minio Node.js module in your application, just require the Node client library. Initialize an s3client object with the minio SDK to directly access your AWS S3 by setting up your keys like shown below.

     var Minio = require('minio'); 
     var s3client = new Minio({
     	endPoint:  's3.amazonaws.com',
     	accessKey: 'YOUR-ACCESSKEYID',
     	secretKey: 'YOUR-SECRETACCESSKEY'
     });

    					 

##3. List Buckets

 After you have initialized and setup your s3client with the minio SDK, you can use it get a list of all your S3 buckets with the listBuckets() API. Retrieve the list of your S3 buckets by attaching callbacks and handling the resulting events. We can retrieve the data by using the on() method.

      s3client.listBuckets(function(e, bucketStream) {
       if (e) {
         console.log(e)
         return
       }
       bucketStream.on('data', function(obj) {
         console.log(obj)
       });
       bucketStream.on('end', function() {
         console.log("End")
       });
       bucketStream.on('error', function(e) {
         console.log("Error", e)
       });
     });

    					 
#### Additional Bucket Operations

  >> Table here

## 4.Get Objects

 Once you have successfully initialized your s3client with the minio SDK, you can use it get a specific object from a specific bucket with the getObject() API. Retrieve your objects by attaching callbacks and handling the resulting events. We can retrieve the data by using the on() method. You can even compute the size.

     var size = 0;
     // Get a full object.
     s3Client.getObject('my-bucketname', 'my-objectname', function(e, dataStream) {
     if (e) {
     return console.log(e)
     }
     dataStream.on('data', function(chunk) {
     size += chunk.length
     });
     dataStream.on('end', function() {
     console.log("End. Total size = " + size)
     });
     dataStream.on('error', function(e) {
     console.log(e)
     });
     });  

     	   					 
#### Additional ways to Get an Object from S3

  >>Table here

##5. Put Objects

 Once you have successfully initialized your s3client with the minio sdk, you can use it to put an object to a specific bucket with the putObject() API. Stream your object by attaching callbacks and handling the resulting events.  .

     var Minio = require('minio')
     var Fs = require('fs')

     var s3Client = new Minio({
       endPoint: 's3.amazonaws.com',
       accessKey: 'YOUR-ACCESSKEYID',
       secretKey: 'YOUR-SECRETACCESSKEY'
     })

     var file = 'my-testfile.ogg'
     var fileStream = Fs.createReadStream(file)
     var fileStat = Fs.stat(file, function(e, stat) {
       if (e) {
         return console.log(e)
       }
       s3Client.putObject('my-bucketname', 'my-objectname.ogg', fileStream, stat.size, 'audio/ogg', function(e) {
         if (e) {
           return console.log(e)
         }
         console.log("Successfully uploaded the stream")
       })
     })

     				 
#### Additional ways to Put an Object into S3

  >> Table Here

## 6.Next Steps

 Once you have successfully initialized your s3client with the minio sdk, you can use it to put an object to a specific bucket with the putObject() API. Stream your object by attaching callbacks and handling the resulting events. 

 
 
 