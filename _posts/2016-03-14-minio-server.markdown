---
layout: post
title:  MINIO CLOUD STORAGE SERVER
comments: true
categories : [minio, server, ruby, docs, examples]
permalink: minio-server 
sub: server 
page: Quick Start Guide
---

Minio is an open source object storage server released under Apache License v2.  It is best suited for storing unstructured data such as photos, videos, log files, backups, container / VM images etc. Size of a single object can range from few KBs to 5TB. It is compatible with Amazon S3 cloud storage service.

Minio Server follows a minimalist design philosophy. It is a single binary light enough to be bundled along application stack, similar to NodeJS, Redis, MySQL and the likes. Minio uses continous ... - TODO
 
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

#### Starting Minio Cloud Storage Server 

<ul style="list-style: none;">
	
 <li><i class="fa fa-caret-right"></i> Start the Minio Server on any folder and you should see the AccessKey and SecretKey printed as shown below.</li>
 <li><i class="fa fa-caret-right"></i> Your end point for object storage is shown below.</li>
 <li><i class="fa fa-caret-right"></i> You may also access the Minio Browser in your web browser at the same URLs. Use your AccessKey and SecretKey to login.</li>

<br>
<pre class="m-b-10"><code class="language-bash">$ minio server ~/Photos

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

</ul>
<!--We agreed in our meeting that we will leave this here temporarily. Move it to Recipes (How Tos) in the next release -->
<!-- Replace this with How to use Minio Browser in another release-->

#### Using Minio Cloud Storage Server with AWS CLI

<ul style="list-style: none;">
	 
  <li> <i class="fa fa-caret-right"></i> To install aws-cli, please visit <a href="https://aws.amazon.com/cli/">https://aws.amazon.com/cli/</a> </li>

  <li> <i class="fa fa-caret-right"></i> To configure aws-cli, type aws configure and follow below steps.

<pre class="m-b-10"><code class="language-bash">$ aws configure
AWS Access Key ID [None]: YOUR_ACCESS_KEY_HERE
AWS Secret Access Key [None]: YOUR_SECRET_KEY_HERE
Default region name [None]: us-east-1
Default output format [None]: ENTER
</code></pre> </li>

<li><i class="fa fa-caret-right"></i>
Additionally enable aws-cli to use AWS Signature Version '4' for Minio server.

<pre class="m-b-10"><code class="language-bash">$ aws configure set default.s3.signature_version s3v4
</code></pre>
</li>

<li><i class="fa fa-caret-right"></i>
To list your buckets.

<pre class="m-b-10"><code class="language-bash">$ aws --endpoint-url http://localhost:9000 s3 ls
2016-01-07 16:38:23 testbucket
</code></pre>
</li>
<li><i class="fa fa-caret-right"></i>
To list contents inside bucket.

<pre class="m-b-10"><code class="language-bash">$ aws --endpoint-url http://localhost:9000 s3 ls s3://testbucket
PRE test/
2015-12-17 08:46:41   12232928 vim
2016-01-07 16:38:23   32232928 emacs
2015-12-09 08:05:24     138504 s3cmd
</code></pre>
</li>
</ul>
#### Using Minio Cloud Storage Server with aws-sdk-go

<ul style="list-style: none;"> 
 <li><i class="fa fa-caret-right"></i>	
 Please follow the documentation here - <a href="https://github.com/minio/minio/blob/master/AWS-SDK-GO.md">Using aws-sdk-go with Minio server</a> </li>
</ul> 

#### Using Minio Cloud Storage Server with s3cmd

<ul style="list-style: none;">
	<li><i class="fa fa-caret-right"></i> To install 3cmd, please visit <a href="http://s3tools.org/s3cmd">http://s3tools.org/s3cmd</a> </li>

<li><i class="fa fa-caret-right"></i> Edit the following fields in your s3cmd configuration file ~/.s3cfg .
<pre class="m-b-10"><code class="language-bash">host_base = localhost:9000
host_bucket = localhost:9000
access_key = YOUR_ACCESS_KEY_HERE
secret_key = YOUR_SECRET_KEY_HERE
signature_v2 = False
</code></pre>
</li>

<li><i class="fa fa-caret-right"></i> To make a bucket

<pre class="m-b-10"><code class="language-bash">$ s3cmd mb s3://mybucket
Bucket 's3://mybucket/' created
</code></pre>
</li>

<li><i class="fa fa-caret-right"></i> To list buckets.

<pre class="m-b-10"><code class="language-bash">$ s3cmd ls s3://
2015-12-09 16:12  s3://testbbucket
</code></pre>
</li>

<li><i class="fa fa-caret-right"></i> To list contents inside bucket.

<pre class="m-b-10"><code class="language-bash">$ s3cmd ls s3://testbucket/
DIR   s3://testbucket/test/
2015-12-09 16:05    138504   s3://testbucket/newfile
</code></pre>
</li>

<li><i class="fa fa-caret-right"></i> To copy an object to bucket

<pre class="m-b-10"><code class="language-bash">$ s3cmd put newfile.txt s3://testbucket
upload: 'newfile' -> 's3://testbucket/newfile'  
</code></pre>
</li>

<li><i class="fa fa-caret-right"></i> Delete an object from bucket

<pre class="m-b-10"><code class="language-bash">$ s3cmd del s3://testbucket/newfile
delete: 's3://testbucket/newfile'
</code></pre>
</li>
<li><i class="fa fa-caret-right"></i> Delete a bucket

<pre class="m-b-10"><code class="language-bash">$ s3cmd rb s3://testbucket
Bucket 's3://testbucket/' removed
</code></pre> 
</li>
</ul> 

## <span>3</span> Next Steps - Explore Further
<table class="table table-bordered">
<tbody>
	<tr>
	 <td>Need tools to work with filesystems or Amazon S3 compatible cloud storge? </td>
	 <td><a href="minio-client.html"> Go to Minio Client</a></td>
	</tr>
	<tr>
	 <td>Need access to Minio functionality inside your programs? </td>
	 <td><a href="minio-sdk.html"> Go to Minio SDK</a></td>
	</tr> 
</tbody>
</table>

<!-- Table -->

Minio Client : mc provides minimal tools to work with Amazon S3 compatible cloud storage and filesystems. It has features like resumable uploads/downloads, progress bar, mirroring etc. mc is written in golang and released under Apache license v2. <a href="minio-client.html"> Minio Client</a>

Minio SDK : Need to use Minio's functionality inside your programs? Please explore our available SDKs. <a href="minio-sdk.html">Minio SDK </a>

  
