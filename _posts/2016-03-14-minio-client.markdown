---
layout: post
title:  MINIO CLIENT
comments: true
categories : [minio, client, ruby, docs, examples]
permalink: minio-client 
sub: client 
page: Quick Start Guide
---

Minio Client (mc) provides a modern alternative to Unix commands like ls, cat, cp, sync, and diff. It supports filesystems and Amazon S3 compatible cloud storage systems. mc is entirely written in Golang.

 

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

 


 



## <span>3</span> Examples


#### Minio Client for Minio's Public Cloud Storage Server
<ul style="list-style: none;">
 <li>Minio cloud storage server is hosted at https://play.minio.io:9000 for public use. This service is primarily intended for developers and users to familiarize themselves with Amazon S3 compatible cloud storage. Minio runs with filesystem backend with auto-expiry for objects in about 24 hours. We have configured mc to work with play by default. See ~/.mc/config.json </li>
 <br> 
  <li><i class="fa fa-caret-right"></i> Make Bucket 
  <pre class="m-b-10"><code class="language-bash"> $ mc mb  play/&lt;BUCKETNAME&gt;
  </code></pre>	
  </li>
  
  <li><i class="fa fa-caret-right"></i> Make Bucket on Play : Example
  <pre class="code-toolbar m-b-10"><code class="language-bash">./mc mb play/'mytestbucket'
Bucket created successfully ‘play/mytestbucket’.
  </code></pre>
  </li>
  <br>
  
  <li><i class="fa fa-caret-right"></i>List Bucket
  <pre class="m-b-10"><code class="language-bash"> $ mc ls play
  </code></pre>
	
  </li>
  
  <li><i class="fa fa-caret-right"></i> List Buckets on Play : Example
<pre class="code-toolbar m-b-10"><code class="language-bash">$ ./mc ls play
[2016-02-08 11:47:12 PST]     0B aaron/
[2016-03-17 17:02:04 PDT]     0B dee/
[2016-01-31 09:23:07 PST]     0B flib/
[2016-03-10 02:00:04 PST]     0B images-eu-vm224/
[2016-03-22 17:14:04 PDT]     0B kline/
[2016-02-05 05:53:52 PST]     0B mark/
[2016-02-07 18:19:39 PST]     0B mc-binaries/
[2016-02-18 13:00:42 PST]     0B minio-binaries/
[2016-03-22 19:47:48 PDT]     0B my-bucketname/
[2016-03-22 22:01:07 PDT]     0B mytestbucket/
[2016-03-22 20:04:39 PDT]     0B mybucketname/
[2016-01-28 17:23:11 PST]     0B newbucket/
[2016-03-21 13:27:17 PDT]     0B rmskd/
[2016-03-20 09:08:36 PDT]     0B s3git-test/
[2016-02-29 15:30:15 PST]     0B test/
[2016-01-27 21:19:18 PST]     0B test123/
[2016-02-26 20:09:11 PST]     0B testhelen/
 </code></pre>
  </li>
</ul>
  
 
#### Minio Client for Amazon S3

<ul style="list-style: none;">
 <li> <i class="fa fa-caret-right"></i> Get your AccessKeyID and SecretAccessKey by following <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html">AWS Credentials  Guide.</a> </li>
 <br>
<li> <i class="fa fa-caret-right"></i> Using your keys configure ~/.mc/config.json configuration file with this command 
<pre class="m-b-10"><code class="language-bash">$ mc config host add &lt;ALIAS&gt; &lt;YOUR-S3-ENDPOINT&gt; &lt;YOUR-ACCESS-KEY&gt; &lt;YOUR-SECRET-KEY&gt; S3v4
</code></pre>	
</li>
<li> <i class="fa fa-caret-right"></i> Example
	
<pre class="code-toolbar m-b-10"><code class="language-bash">
$ mc config host add mys3 https://s3.amazonaws.com BKIKJAA5BMMU2RHO6IBB V7f1CwQqAcwo80UEIJEjc5gVQUSSx5ohQ9GSrr12 
</code></pre>
NOTE: S3v4 is default if not specified.
</li>

<br>
<li><i class="fa fa-caret-right"></i> Make Bucket
<pre class="m-b-10"><code class="language-bash"> $ mc mb  &lt;S3 Alias&gt;/&lt;BUCKETNAME&gt;
</code></pre>
	
</li>
<li><i class="fa fa-caret-right"></i> Make Bucket : Example
<pre class="code-toolbar m-b-10"><code class="language-bash">mc mb mys3/mybucket
Bucket created successfully ‘mys3/mybucket’.
</code></pre>
</li>	
<br>

<li><i class="fa fa-caret-right"></i> List Bucket
<pre class="m-b-10"><code class="language-bash">$ mc ls <S3 Alias>  
</code></pre>
	
</li>
<li><i class="fa fa-caret-right"></i> List Bucket : Example
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc ls mys3
[2016-03-22 18:44:17 IST]     0B mybucket/ 
</code></pre>
</li>	
<br>

<li><i class="fa fa-caret-right"></i> Mirror : sync content of local file to remote bucket
	
<pre class="m-b-10"><code class="language-bash">$ mc mirror &lt;LOCALDIRECTORY&gt; &lt;S3 Alias&gt;/&lt;BUCKETNAME&gt; 
</code></pre>
	
</li>
<li><i class="fa fa-caret-right"></i> Mirror : Example
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc mirror localdir/ mys3/mybucket
...yobject.txt: 14 B / 14 B ┃▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓┃ 100.00 % 48 B/s 0
```
</code></pre>
</li>	
<br>

<li><i class="fa fa-caret-right"></i> Diff : find the diff between local directory amd remote bucket 
<pre class="m-b-10"><code class="language-bash">$ mc diff &lt;LOCALDIRECTORY&gt; &lt;S3 Alias&gt;/&lt;BUCKETNAME&gt; 
</code></pre>
	
</li>
<li><i class="fa fa-caret-right"></i> Diff : Example
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc diff localdir mys3/mybucket
‘localdir/another.txt’ and ‘https://s3.amazonaws.com/mybucket/another.txt’ - only in first. 
</code></pre>
</li>	
<br>

</ul>

#### Minio Client  for Google Cloud Storage

<ul style="list-style: none;">
	 
 <li> <i class="fa fa-caret-right"></i> Get your AccessKeyID and SecretAccessKey by following Google Credentials Guide. </li>

<li> <i class="fa fa-caret-right"></i> Once you have them update your ~/.mc/config.json configuration file.
<pre class="m-b-10"><code class="language-bash">$ mc config host add &lt;ALIAS&gt; https://storage.googleapis.com &lt;YOUR-ACCESS-KEY&gt; &lt;YOUR-SECRET-KEY&gt; S3v2
</code></pre>
NOTE: Google Cloud Storage only supports Legacy Signature Version 2, so you have to pick - S3v2  
</li>
</ul>    					 
 
## <span>3</span> Next Steps - Explore Further

<table class="table table-bordered">
<tbody>
	<tr>
	 <td>Bundle the Minio Cloud Storage Server with your Application Stack. </td>
	 <td><a href="minio-client.html"> Go to Minio Server</a></td>
	</tr>
	<tr>
	 <td>Need Minio functionality inside your applications / programs? </td>
	 <td><a href="minio-sdk.html"> Go to Minio SDK</a></td>
	</tr> 
</tbody>
</table>

 Minio Server : Minio is an open source object storage server that stores objects such as photos, videos, log files, backups, container / VM images and so on. Minio is best suited for storing blobs of information ranging from KBs to TBs each.  <a href="minio-sdk.html">Minio Server </a>
 
 Minio SDK : 

 Need to use Minio's functionality inside your programs? Please explore our available SDKs. <a href="minio-sdk.html">Minio SDK </a>

 
