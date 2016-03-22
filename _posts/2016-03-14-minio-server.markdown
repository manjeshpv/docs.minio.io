---
layout: post
title:  MINIO SERVER
comments: true
categories : [minio, server, ruby, docs, examples]
permalink: minio-server 
sub: server 
page: Quick Start Guide
---

Minio is an open source object storage server released under Apache License V2. It is compatible with Amazon S3 cloud storage service. Minio follows a minimalist design philosophy. Minio is light enough to be bundled with the application stack. It sits on the side of NodeJS, Redis, MySQL and the likes. Unlike databases, Minio stores objects such as photos, videos, log files, backups, container / VM images and so on. Minio is best suited for storing blobs of information ranging from KBs to TBs each. In a simplistic sense, it is like a FTP server with a simple get / put API over HTTP.
 
## <span>1</span> Install

<ul class="list-unstyled list-inline btn-action">
    <li class="dropdown">
        <a href="" data-toggle="dropdown" class="ba-split dropdown-toggle"><i class="fa fa-download m-r-5"></i>Download</a>

        <ul class="dropdown-menu dm-alt">
            {% for item in site.minioDownload limit:6 %}
                <li>
                    <a href={{ item.downloadms }}><i class="fa fa-{{ item.icon }} m-r-5"></i>{{ item.title }}</a>
                </li>
            {% endfor %}
        </ul>
    </li> 
    
    <li class="dropdown">
        <a href="" data-toggle="dropdown" class="ba-split dropdown-toggle"><i class="fa fa-question-circle m-r-5"></i>Guide</a>

        <ul class="dropdown-menu dm-alt">
            {% for item in site.minioGuide limit:5 %}
                <li>
                    <a href="#{{ item.tab }}" data-toggle="tab"><i class="fa fa-{{ item.icon }} m-r-5"></i>{{ item.title }}</a>
                </li>
            {% endfor %}
        </ul>
    </li>
</ul>

<div class="tab-content">
    <!-- GNU/Linux -->
    <div class="tab-pane fade" id="gnu-linux">
        <pre class="m-b-10"><code class="language-bash">$ chmod +x minio
$ ./minio --help</code></pre>
    </div>
    
    <!-- OSX -->
    <div class="tab-pane fade" id="mac-osx">
        <pre class="m-b-10"><code class="language-bash">$ chmod 755 minio
$ ./minio --help</code></pre>
    </div>
    
    <!-- Windows -->
    <div class="tab-pane fade" id="windows">
        <pre class="m-b-10"><code class="language-bash">C:\Users\Username\Downloads> minio.exe --help </code></pre>
    </div>
    
    <!-- Docker -->
    <div class="tab-pane fade" id="docker">
        <pre class="m-b-10"><code class="language-bash">$ docker pull minio/minio</code></pre>
    </div>
    
    <!-- Source -->
    <div class="tab-pane fade" id="source">
        <p>Source installation is intended for only developers and advanced users. For general use, please download official releases from https://minio.io/download. If you do not have a working Golang environment, please follow <a href="https://github.com/minio/minio/blob/master/INSTALLGO.md"> Install Golang </a></p>
    
        <pre class="m-b-10 m-t-10"><code class="language-bash">$ go get -d github.com/minio/minio
$ cd $GOPATH/src/github.com/minio/minio
$ make</code></pre>
    </div>
</div>

## <span>2</span> Examples

How to use Minio Server
-----------------------

NAME:
  minio server - Start Minio cloud storage server.

USAGE:
  minio server [OPTION VALUE] PATH

  OPTION = expiry        VALUE = NN[h|m|s] [DEFAULT=Unlimited]
  OPTION = min-free-disk VALUE = NN% [DEFAULT: 10%]

EXAMPLES:
  1. Start minio server on Linux.
        $ minio server /home/shared

  2. Start minio server on Windows.
        $ minio server C:\MyShare

  3. Start minio server bound to a specific IP:PORT, when you have multiple network interfaces.
        $ minio --address 192.168.1.101:9000 server /home/shared

  4. Start minio server with minimum free disk threshold to 5%
        $ minio server min-free-disk 5% /home/shared/Pictures

  5. Start minio server with minimum free disk threshold to 15% with auto expiration set to 1h
        $ minio server min-free-disk 15% expiry 1h /home/shared/Documents
		

Example :
---------

$ minio server ~/Photos
AccessKey: WLGDGYAQYIGI833EV05A  SecretKey: BYvgJM101sHngl2uzjXS/OBF/aMxAN06JrJ3qJlF  Region: us-east-1

Minio Object Storage:
    http://127.0.0.1:9000
    http://10.0.0.3:9000

Minio Browser:
    http://127.0.0.1:9000
    http://10.0.0.3:9000

To configure Minio Client:
    $ wget https://dl.minio.io/client/mc/release/darwin-amd64/mc
    $ chmod 755 mc
    $ ./mc config host add myminio http://localhost:9000 WLGDGYAQYIGI833EV05A BYvgJM101sHngl2uzjXS/OBF/aMxAN06JrJ3qJlF





How to use AWS CLI with Minio?
-----------------------------
<AB/ Garima i feel this should not be in the QS guide. Please guide me here.>

How to use AWS SDK with Minio?
-----------------------------


How to use s3cmd with Minio?
----------------------------




<pre class="m-b-10"><code class="language-bash">$ minio server ~/<dir-name>
AccessKey: WLGDGYAQYIGI833EV05A  
SecretKey: BYvgJM101sHngl2uzjXS/OBF/aMxAN06JrJ3qJlF  
Region: us-east-1</code></pre>
		
 
## <span>3</span> Next Steps

<!-- Table -->

Minio Client : mc provides minimal tools to work with Amazon S3 compatible cloud storage and filesystems. It has features like resumable uploads/downloads, progress bar, parallel copy. mc is written in golang and released under Apache license v2. 
<a href="minio-client.html"> Minio Client</a>



Minio SDK : 

Need to use Minio's functionality inside your programs? Please explore our available SDKs. <a href="minio-sdk.html">Minio SDK </a>

  