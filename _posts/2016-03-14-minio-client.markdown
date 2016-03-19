---
layout: post
title:  Minio Client Documentation
comments: true
categories : [minio, client, ruby, docs, examples]
tags: minio docs ruby
css: css/poole
permalink: minio-client 
---

 
# Minio Client Quick Start

Minio Client (mc) provides a modern alternative to Unix commands like ls, cat, cp, sync, and diff. It supports POSIX compatible filesystems and Amazon S3 compatible cloud storage systems. It is entirely written in Golang.

 
##1. Install

We have got a minio client for every OS. 

### OS X

Download mc from  : https://dl.minio.io/client/mc/release/darwin-amd64/mc

Do : 		

			$ chmod 755 mc
			$ ./mc --help
			
### GNU/Linux	

Download mc for:

* 64-bit Intel from https://dl.minio.io/client/mc/release/linux-amd64/mc
* 32-bit Intel from https://dl.minio.io/client/mc/release/linux-386/mc
* 32-bit ARM from https://dl.minio.io/client/mc/release/linux-arm/mc

Do :
		
		$ chmod +x mc
		$ ./mc --help

### Microsoft Windows				 

Download mc for:

* 64-bit from https://dl.minio.io/client/mc/release/windows-amd64/mc.exe
* 32-bit from https://dl.minio.io/client/mc/release/windows-386/mc.exe
 
Do : 
	 	
		C:\Users\Username\Downloads> mc.exe --help
		
### Solaris/Illumos
	
Download mc from https://dl.minio.io/client/mc/release/solaris-amd64/mc	

Do : 
		
		$ chmod 755 mc
		$ ./mc --help

### FreeBSD

Download mc from https://dl.minio.io/client/mc/release/freebsd-amd64/mc

	$ chmod 755 mc
	$ ./mc --help

### From Source

Source installation is intended for only developers and advanced users. ‘mc update’ continuous delivery mechanism is not supported for ‘go get’ based binary builds. Please download official releases from https://minio.io/#mc.


	$ GO15VENDOREXPERIMENT=1 go get -u github.com/minio/mc

##2. Example

  
 
  
    					 
 
## 3.Next Steps : Explore Further

  