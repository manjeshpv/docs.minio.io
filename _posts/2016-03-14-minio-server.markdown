---
layout: post
title:  MINIO CLOUD STORAGE SERVER
comments: true
categories : [minio, server, ruby, docs, examples]
permalink: minio-server
sub: server
page: Quick Start Guide
---

Minio is an object storage server released under Apache License v2, compatible with Amazon S3 cloud storage service. It is best suited for storing unstructured data such as photos, videos, log files, backups, container / VM images etc. Size of an object can range from a few KBs to a maximum of 5TB.

## <span>1</span> Install

<p class="m-b-20">Minio server is light enough to be bundled with application stack, similar to NodeJS, Redis and MySQL.</p>

<ul class="list-unstyled list-inline d-tabs dt-ms">
    {% for item in site.minioGuide limit:5 %}
        <li class="{% if item.title == 'GNU/Linux' %}active{% endif %}">
            <a data-toggle="tab" href="#{{ item.tab }}"><i class="fa fa-{{ item.icon }} m-r-5"></i>{{ item.title }}</a>
        </li>
    {% endfor %}
</ul>

<div class="tab-content tc-alt m-t-30">
    <!-- GNU/Linux -->
    <div class="tab-pane fade active in" id="linux-amd64">  
        <ul class="list-unstyled list-inline btn-action">
            <li>
                <a href="https://dl.minio.io/server/minio/release/linux-amd64/minio"><i class="fa fa-download m-r-5"></i>Download x64</a>
            </li>
            <li>
                <a href="https://dl.minio.io/server/minio/release/linux-386/minio"><i class="fa fa-download m-r-5"></i>Download x32</a>
            </li>
            <li>
                <a href="https://dl.minio.io/server/minio/release/linux-arm/minio"><i class="fa fa-download m-r-5"></i>Download A32</a>
            </li>
        </ul>
          
        {{ site.msInstallInfo }}
           
        <pre class="code-toolbar pre-alt"><code class="language-bash">$ chmod +x minio
$ ./minio --help
$ minio server ~/Photos

AccessKey: WLGDGYAQYIGI833EV05A  SecretKey: BYvgJM101sHngl2uzjXS/OBF/aMxAN06JrJ3qJlF  Region: us-east-1

Minio Object Storage:
     http://127.0.0.1:9000
     http://10.0.0.3:9000

Minio Browser:
     http://127.0.0.1:9000
     http://10.0.0.3:9000

To configure Minio Client:
    $ wget https://dl.minio.io/client/mc/release/linux-amd64/mc
    $ chmod 755 mc
    $ ./mc config host add myminio http://localhost:9000 WLGDGYAQYIGI833EV05A BYvgJM101sHngl2uzjXS/OBF/aMxAN06JrJ3qJlF</code></pre>
</div>

    <!-- OSX -->
    <div class="tab-pane fade" id="darwin-amd64">
        <ul class="list-unstyled list-inline btn-action">
            <li>
                <a href="https://dl.minio.io/server/minio/release/darwin-amd64/minio"><i class="fa fa-download m-r-5"></i>Download x64</a>
            </li>
        </ul>
          
        {{ site.msInstallInfo }}
                
        <pre class="code-toolbar pre-alt"><code class="language-bash">$ chmod 755 minio
$ ./minio --help
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
</code></pre>
    </div>

    <!-- Windows -->
    <div class="tab-pane fade" id="windows-amd64">
        <ul class="list-unstyled list-inline btn-action">
            <li>
                <a href="https://dl.minio.io/server/minio/release/windows-amd64/minio.exe"><i class="fa fa-download m-r-5"></i>Download x64</a>
            </li>
            <li>
                <a href="https://dl.minio.io/server/minio/release/windows-386/minio.exe"><i class="fa fa-download m-r-5"></i>Download x32</a>
            </li>
        </ul>
          
        {{ site.msInstallInfo }}
    
        <pre class="code-toolbar pre-alt"><code class="language-bash">C:\Users\Username\Downloads> minio.exe --help
C:\Users\Username\Downloads> minio.exe server D:\Photos

AccessKey: WLGDGYAQYIGI833EV05A  SecretKey: BYvgJM101sHngl2uzjXS/OBF/aMxAN06JrJ3qJlF  Region: us-east-1

Minio Object Storage:
	 http://127.0.0.1:9000
	 http://10.0.0.3:9000

Minio Browser:
	 http://127.0.0.1:9000
	 http://10.0.0.3:9000

To configure Minio Client:
    Download "mc" from https://dl.minio.io/client/mc/release/windows-amd64/mc
    > mc.exe config host add myminio http://localhost:9000 WLGDGYAQYIGI833EV05A BYvgJM101sHngl2uzjXS/OBF/aMxAN06JrJ3qJlF
</code></pre>
    </div>

    <!-- Docker -->
    <div class="tab-pane fade" id="docker">
        {{ site.msInstallInfo }} 
    
        <pre class="code-toolbar pre-alt"><code class="language-bash">$ docker pull minio/minio
$ docker run -p 9000:9000 minio/minio</code></pre>
    </div>

    <!-- Source -->
    <div class="tab-pane fade" id="source">
        <p class="m-b-30">Source installation is intended for only developers and advanced users. For typical use, please download official releases from <a href="https://minio.io/download">https://minio.io/download</a>. If you do not have a working Golang environment, please follow <a href="https://github.com/minio/minio/blob/master/INSTALLGO.md"> Install Golang </a></p>

        <pre class="code-toolbar pre-alt"><code class="language-bash">$ go get -d github.com/minio/minio
$ cd $GOPATH/src/github.com/minio/minio
$ make</code></pre>
    </div>
</div>

## <span>2</span> Examples

<!--We agreed in our meeting that we will leave this here temporarily. Move it to Recipes (How Tos) in the next release -->
<!-- Replace this with How to use Minio Browser in another release-->

<div class="panel-group" id="accordion">
    <div class="accordion">
       
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Using Minio Cloud Storage Server with AWS CLI</a>
        
        <div id="collapseOne" class="panel-collapse collapse">
            <div class="panel-body">
                <ul class="list-alt m-b-0">
                
                    <li>To install aws-cli, please visit <a href="https://aws.amazon.com/cli/">https://aws.amazon.com/cli/</a> </li>
                
                    <li>To configure aws-cli, type aws configure and follow below steps.             
<pre class="code-toolbar m-b-10"><code class="language-bash">$ aws configure
AWS Access Key ID [None]: YOUR_ACCESS_KEY_HERE
AWS Secret Access Key [None]: YOUR_SECRET_KEY_HERE
Default region name [None]: us-east-1
Default output format [None]: ENTER
</code></pre> 
                    </li>
                
                    <li>Additionally enable aws-cli to use AWS Signature Version '4' for Minio server.
<pre class="code-toolbar m-b-10"><code class="language-bash">$ aws configure set default.s3.signature_version s3v4
</code></pre>
                    </li>
                    
                    <li>To list your buckets.
<pre class="code-toolbar m-b-10"><code class="language-bash">$ aws --endpoint-url http://localhost:9000 s3 ls
2016-01-07 16:38:23 testbucket
</code></pre>
                    </li>
                    <li>To list contents inside bucket.
<pre class="code-toolbar"><code class="language-bash">$ aws --endpoint-url http://localhost:9000 s3 ls s3://testbucket
PRE test/
2015-12-17 08:46:41   12232928 vim
2016-01-07 16:38:23   32232928 emacs
2015-12-09 08:05:24     138504 s3cmd
</code></pre>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="accordion">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Using Minio Cloud Storage Server with aws-sdk-go</a>
        
        <div id="collapseTwo" class="panel-collapse collapse">
            <div class="panel-body">
                Please follow the documentation here: <a href="https://github.com/minio/minio/blob/master/AWS-SDK-GO.md">Using aws-sdk-go with Minio server</a> </li>
            </div>
        </div>
    </div>
    
    <div class="accordion">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Using Minio Cloud Storage Server with s3cmd</a>
        
        <div id="collapseThree" class="panel-collapse collapse">
            <div class="panel-body">
                <ul class="list-alt m-b-0">
                    <li>To install 3cmd, please visit <a href="http://s3tools.org/s3cmd">http://s3tools.org/s3cmd</a> </li>
                
                    <li>Edit the following fields in your s3cmd configuration file ~/.s3cfg .
<pre class="m-b-10"><code class="language-bash">host_base = localhost:9000
host_bucket = localhost:9000
access_key = YOUR_ACCESS_KEY_HERE
secret_key = YOUR_SECRET_KEY_HERE
signature_v2 = False
</code></pre>
                    </li>
                
                    <li>To make a bucket                
<pre class="code-toolbar m-b-10"><code class="language-bash">$ s3cmd mb s3://mybucket
Bucket 's3://mybucket/' created
</code></pre>
                    </li>
                    
                    <li>To list buckets
<pre class="code-toolbar m-b-10"><code class="language-bash">$ s3cmd ls s3://
2015-12-09 16:12  s3://testbbucket
</code></pre>
                    </li>
                    
                    <li>To list contents inside bucket
<pre class="code-toolbar m-b-10"><code class="language-bash">$ s3cmd ls s3://testbucket/
DIR   s3://testbucket/test/
2015-12-09 16:05    138504   s3://testbucket/newfile
</code></pre>
                    </li>
                    
                    <li>To copy an object to bucket
<pre class="code-toolbar m-b-10"><code class="language-bash">$ s3cmd put newfile.txt s3://testbucket
upload: 'newfile' -> 's3://testbucket/newfile'
</code></pre>
                    </li>
                    
                    <li>Delete an object from bucket
<pre class="code-toolbar m-b-10"><code class="language-bash">$ s3cmd del s3://testbucket/newfile
delete: 's3://testbucket/newfile'
</code></pre>
                    </li>
                    <li>Delete a bucket
<pre class="code-toolbar"><code class="language-bash">$ s3cmd rb s3://testbucket
Bucket 's3://testbucket/' removed
</code></pre>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

## <span>3</span> Next Steps - Explore Further

Need tools to work with filesystems or Amazon S3 compatible cloud storge? <a href="minio-client.html"> Go to Minio Client</a>

Need access to Minio functionality inside your programs? <a href="minio-sdk.html"> Go to Minio SDK</a>
