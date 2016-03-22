---
layout: post
title:  MINIO CLIENT
comments: true
categories : [minio, client, ruby, docs, examples]
permalink: minio-client 
sub: client 
page: Quick Start Guide
---

Minio Client (mc) provides a modern alternative to Unix commands like ls, cat, cp, sync, and diff. It supports POSIX compatible filesystems and Amazon S3 compatible cloud storage systems. It is entirely written in Golang.

mc implements the following commands

  ls        List files and folders.
  mb        Make a bucket or folder.
  cat       Display contents of a file.
  pipe      Write contents of stdin to one or more targets. When no target is specified, it writes to stdout.
  share     Generate URL for sharing.
  cp        Copy one or more objects to a target.
  mirror    Mirror folders recursively from a single source to many destinations.
  diff      Compute differences between two folders.
  rm        Remove file or bucket [WARNING: Use with care].
  access    Manage bucket access permissions.
  session   Manage saved sessions of cp and mirror operations.
  config    Manage configuration file.
  update    Check for a new software update.
  version   Print version.

## <span>1</span> Install

<ul class="list-unstyled list-inline btn-action">
    <li class="dropdown">
        <a href="" data-toggle="dropdown" class="ba-split dropdown-toggle"><i class="fa fa-download m-r-5"></i>Download</a>

        <ul class="dropdown-menu dm-alt">
            {% for item in site.minioDownload %}
                <li>
                    <a href={{ item.downloadmc }}><i class="fa fa-{{ item.icon }} m-r-5"></i>{{ item.title }}</a>
                </li>
            {% endfor %}
        </ul>
    </li>
    
    <li class="dropdown">
        <a href="" data-toggle="dropdown" class="ba-split dropdown-toggle"><i class="fa fa-question-circle"></i> Guide</a>

        <ul class="dropdown-menu dm-alt">
            {% assign item = site.minioGuide | sort: 'order' %}
            {% for p in item limit:6 %}
                <li>
                    <a href="#{{ p.tab }}" data-toggle="tab"><i class="fa fa-{{ p.icon }} m-r-5"></i>{{ p.title }}</a>
                </li>
            {% endfor %}
        </ul>
    </li>
</ul>

<div class="tab-content">
    <!-- GNU/Linux -->
    <div class="tab-pane fade" id="gnu-linux">
        <pre class="m-b-10"><code class="language-bash">$ chmod +x mc
$ ./mc --help</code></pre>
    </div>
    
    <!-- OSX -->
    <div class="tab-pane fade" id="mac-osx">
        <pre class="m-b-10"><code class="language-bash">$ chmod 755 mc
$ ./mc --help</code></pre>
    </div>
    
    <!-- Windows -->
    <div class="tab-pane fade" id="windows">
        <pre class="m-b-10"><code class="language-bash">C:\Users\Username\Downloads> mc.exe --help </code></pre>
    </div>
    
    <!-- Source -->
    <div class="tab-pane fade" id="source">
        <p>Source installation is intended for only developers and advanced users. <code>mc update</code> continuous delivery mechanism is not supported for <code>go get</code> based binary builds. Please download official releases from <a href="">https://minio.io/#mc</a></p>
            
        <pre class="m-b-10 m-t-10"><code class="language-bash">$ GO15VENDOREXPERIMENT=1 go get -u github.com/minio/mc</code></pre>
    </div>
</div> 


## <span>1</span> Example


  
- Get your AccessKeyID and SecretAccessKey by following AWS Credentials Guide.

- Once you have them update your ~/.mc/config.json configuration file.


How to use mc commands
----------------------

	>mc ls
	>mc mb
	>mc cat
	>mc rm

 >> (Same format as configure )
	
	
	
How to configure mc for Amazon S3   
---------------------------------


 
 		
		$ mc config host add <ALIAS> <YOUR-S3-ENDPOINT> <YOUR-ACCESS-KEY> <YOUR-SECRET-KEY> S3v4
			
Example

	$ mc config host add mys3 https://s3.amazonaws.com BKIKJAA5BMMU2RHO6IBB V7f1CwQqAcwo80UEIJEjc5gVQUSSx5ohQ9GSrr12

   >> output
   
NOTE: S3v4 is default if not specified.


How to mirror using mc
----------------------
		
>> Atul can you fill this out similar to above.


How to do a diff on my content using mc diff
---------------------------------------------
	
>> Atul can you fill this out similar to above.				 
 
## <span>3</span> Next Steps

 Minio Server : Minio is an open source object storage server that stores objects such as photos, videos, log files, backups, container / VM images and so on. Minio is best suited for storing blobs of information ranging from KBs to TBs each.  <a href="minio-sdk.html">Minio Server </a>
 
 Minio SDK : 

 Need to use Minio's functionality inside your programs? Please explore our available SDKs. <a href="minio-sdk.html">Minio SDK </a>

 