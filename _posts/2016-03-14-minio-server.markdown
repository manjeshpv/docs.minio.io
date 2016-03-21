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

## <span>2</span> Example

Start Minio Server by doing: 

<pre class="m-b-10"><code class="language-bash">$ minio server ~/<dir-name>
AccessKey: WLGDGYAQYIGI833EV05A  
SecretKey: BYvgJM101sHngl2uzjXS/OBF/aMxAN06JrJ3qJlF  
Region: us-east-1</code></pre>
		
 
## <span>3</span> Next Steps

  