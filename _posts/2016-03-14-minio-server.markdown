---
layout: post
title:  Minio Server Documentation
comments: true
categories : [minio, server, ruby, docs, examples]
tags: minio docs ruby
css: css/poole
permalink: minio-server 
---

 
# Minio Server Quick Start
Minio is an open source object storage server released under Apache License V2. It is compatible with Amazon S3 cloud storage service. Minio follows a minimalist design philosophy. Minio is light enough to be bundled with the application stack. It sits on the side of NodeJS, Redis, MySQL and the likes. Unlike databases, Minio stores objects such as photos, videos, log files, backups, container / VM images and so on. Minio is best suited for storing blobs of information ranging from KBs to TBs each. In a simplistic sense, it is like a FTP server with a simple get / put API over HTTP.
 
##1. Install

### GNU / Linux
 Download minio for:

 * 64-bit Intel from https://dl.minio.io/server/minio/release/linux-amd64/minio
 * 32-bit Intel from https://dl.minio.io/server/minio/release/linux-386/minio
 * 32-bit ARM from https://dl.minio.io/server/minio/release/linux-arm/minio
 
 		
		$ chmod +x minio
		$ ./minio --help
 
 
### OS X

Download minio from : https://dl.minio.io/server/minio/release/darwin-amd64/minio

		$ chmod 755 minio
		$ ./minio --help



### Windows 
 Download minio for:

 * 64-bit from https://dl.minio.io/server/minio/release/windows-amd64/minio.exe
 * 32-bit from https://dl.minio.io/server/minio/release/windows-386/minio.exe
 
 			
			C:\Users\Username\Downloads> minio.exe --help 
			
### Docker Container
Download minio for docker.

			$ docker pull minio/minio
 
### From Source
Source installation is intended for only developers and advanced users. For general use, please download official releases from https://minio.io/download.

If you do not have a working Golang environment, please follow <a href="https://github.com/minio/minio/blob/master/INSTALLGO.md"> Install Golang. </a>

		$ go get -d github.com/minio/minio
		$ cd $GOPATH/src/github.com/minio/minio
		$ make
   					 
					 
##2. Example

Start Minio Server By doing : 

		$ minio server ~/<dir-name>
		AccessKey: WLGDGYAQYIGI833EV05A  SecretKey: BYvgJM101sHngl2uzjXS/OBF/aMxAN06JrJ3qJlF  Region: us-east-1
		
 
## 4.Next Steps

  