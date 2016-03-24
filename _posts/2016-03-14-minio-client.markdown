---
layout: post
title:  MINIO CLIENT
comments: true
categories : [minio, client, ruby, docs, examples]
permalink: minio-client
sub: client
page: Quick Start Guide
---

Minio Client (mc) provides a modern alternative to UNIX commands like ls, cat, cp, mirror, diff etc. It supports filesystems and Amazon S3 compatible cloud storage service (AWS Signature v2 and v4).

`mc` implements the following commands

<pre class="m-b-10"><code class="language-bash">ls        List files and folders.
mb        Make a bucket or folder.
cat       Display contents of a file.
pipe      Write contents of stdin to one or more targets. When no target is specified,
          it writes to stdout.
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
</code></pre>

## <span>1</span> Install

<ul class="list-unstyled list-inline d-tabs dt-ms">
    {% assign item = site.minioGuide | sort: 'order' %}
        {% for p in item limit:6 %}
        <li class="{% if p.title == 'GNU/Linux' %}active{% endif %}">
            <a href="#{{ p.tab }}" data-toggle="tab"><i class="fa fa-{{ p.icon }} m-r-5"></i>{{ p.title }}</a>
        </li>
    {% endfor %}
</ul>

<div class="tab-content tc-alt">
    <!-- GNU/Linux -->
    <div class="tab-pane fade active in" id="linux-amd64">
        <ul class="list-unstyled list-inline btn-action m-b-30">
            <li>
                <a href="https://dl.minio.io/client/mc/release/linux-amd64/mc"><i class="fa fa-download m-r-5"></i>Download x64</a>
            </li>
            <li>
                <a href="https://dl.minio.io/client/mc/release/linux-386/mc"><i class="fa fa-download m-r-5"></i>Download x32</a>
            </li>
            <li>
                <a href="https://dl.minio.io/client/mc/release/linux-arm/mc"><i class="fa fa-download m-r-5"></i>Download A32</a>
            </li>
        </ul>

        <pre class="code-toolbar pre-alt"><code class="language-bash">$ chmod +x mc
$ ./mc --help</code></pre>
    </div>

    <!-- OSX -->
    <div class="tab-pane fade" id="darwin-amd64">
        <ul class="list-unstyled list-inline btn-action m-b-30">
            <li>
                <a href="https://dl.minio.io/client/mc/release/darwin-amd64/mc"><i class="fa fa-download m-r-5"></i>Download x64</a>
            </li>
        </ul>
            
        <pre class="code-toolbar pre-alt"><code class="language-bash">$ chmod 755 mc
$ ./mc --help</code></pre>
    </div>

    <!-- Windows -->
    <div class="tab-pane fade" id="windows-amd64">
        <ul class="list-unstyled list-inline btn-action m-b-30">
            <li>
                <a href="https://dl.minio.io/client/mc/release/windows-amd64/mc.exe"><i class="fa fa-download m-r-5"></i>Download x64</a>
            </li>
            <li>
                <a href="https://dl.minio.io/client/mc/release/windows-386/mc.exe"><i class="fa fa-download m-r-5"></i>Download x32</a>
            </li>
        </ul>
    
        <pre class="code-toolbar pre-alt"><code class="language-bash">C:\Users\Username\Downloads> mc.exe --help </code></pre>
    </div>

    <!-- Solaris -->
    <div class="tab-pane fade" id="solaris-amd64">
        <ul class="list-unstyled list-inline btn-action m-b-30">
            <li>
                <a href="https://dl.minio.io/client/mc/release/solaris-amd64/mc"><i class="fa fa-download m-r-5"></i>Download x64</a>
            </li>
        </ul>
        
        <pre class="code-toolbar pre-alt"><code class="language-bash">$ chmod 755 mc
$ ./mc --help</code></pre>
    </div>

    <!-- FreeBSD -->
    <div class="tab-pane fade" id="freebsd-amd64">
        <ul class="list-unstyled list-inline btn-action m-b-30">
            <li>
                <a href="https://dl.minio.io/client/mc/release/freebsd-amd64/mc"><i class="fa fa-download m-r-5"></i>Download x64</a>
            </li>
        </ul>

        <pre class="code-toolbar pre-alt"><code class="language-bash">$ chmod 755 mc
$ ./mc --help</code></pre>
    </div>

    <!-- Source -->
    <div class="tab-pane fade" id="source">
        <p class="m-b-30">Source installation is intended for only developers and advanced users. <code>mc update</code> continuous delivery mechanism is not supported for <code>go get</code> based binary builds. Please download official releases from <a href="">https://minio.io/#mc</a></p>

        <pre class="code-toolbar pre-alt"><code class="language-bash">$ GO15VENDOREXPERIMENT=1 go get -u github.com/minio/mc</code></pre>
    </div>
</div>

## <span>3</span> Examples

<div class="panel-group" id="accordion">
    <div class="accordion">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><code>mc</code> for Amazon S3</a>
        
        <div id="collapseOne" class="panel-collapse collapse">
            <div class="panel-body">
                <ul class="list-alt m-b-0">
                    <li>Get your AccessKeyID and SecretAccessKey by following <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html">AWS Credentials  Guide.</a> </li>
                    <li>Minio client adds all your configuration to  ~/.mc/config.json with this command.
<pre class="m-b-10"><code class="language-bash">$ mc config host add &lt;ALIAS&gt; &lt;YOUR-S3-ENDPOINT&gt; &lt;YOUR-ACCESS-KEY&gt; &lt;YOUR-SECRET-KEY&gt; S3v4
</code></pre>
                    </li>
                    <li>Example
<pre class="code-toolbar"><code class="language-bash">
$ mc config host add mys3 https://s3.amazonaws.com BKIKJAA5BMMU2RHO6IBB V7f1CwQqAcwo80UEIJEjc5gVQUSSx5ohQ9GSrr12
</code></pre>
                    NOTE: S3v4 is default if not specified.
                    <br><br>
                    </li>
                    
                    <li>Make Bucket
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc mb  &lt;S3 Alias&gt;/&lt;BUCKETNAME&gt;
</code></pre>
                    </li>
                    
                    <li>Make Bucket : Example
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc mb mys3/mybucket
Bucket created successfully ‘mys3/mybucket’.
</code></pre>
                    </li>
                    
                    <li>List Bucket
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc ls &lt;S3 Alias&gt;</code></pre>
                    </li>
                    
                    <li>List Bucket : Example
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc ls mys3
[2016-03-22 18:44:17 IST] 0B mybucket/
</code></pre>
                    </li>
                    
                    <li>Mirror : sync content of local file to remote bucket
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc mirror &lt;LOCALDIRECTORY&gt; &lt;S3 Alias&gt;/&lt;BUCKETNAME&gt;
</code></pre>
                    </li>
                    
                    <li>Mirror : Example
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc mirror localdir/ mys3/mybucket
...yobject.txt: 14 B / 14 B ┃▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓┃ 100.00 % 48 B/s 0
</code></pre>
                    </li>
                    
                    <li>Diff : find the diff between local directory amd remote bucket
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc diff &lt;LOCALDIRECTORY&gt; &lt;S3 Alias&gt;/&lt;BUCKETNAME&gt;
</code></pre>
                    </li>
                    
                    <li>Diff : Example
<pre class="code-toolbar"><code class="language-bash">$ mc diff localdir mys3/mybucket
‘localdir/another.txt’ and ‘https://s3.amazonaws.com/mybucket/another.txt’ - only in first.
</code></pre>
                    </li>                
                </ul>
            </div>
        </div>
    </div>
    
    <div class="accordion">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><code>mc</code> for Minio Server</a>
        
        <div id="collapseTwo" class="panel-collapse collapse">
            <div class="panel-body">
                <ul class="list-alt m-b-0">
                    <li>Following examples use Minio server hosted at https://play.minio.io:9000, intended for testing and temporary public use.</li>
                    
                    <li>Make Bucket
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc mb play/&lt;BUCKETNAME&gt;
</code></pre>
                    </li>
                    
                    <li>Make Bucket on Play : Example
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc mb play/'mytestbucket'
Bucket created successfully ‘play/mytestbucket’.
</code></pre>
                    </li>
                    
                    <li>List Bucket
<pre class="code-toolbar m-b-10"><code class="language-bash">$ mc ls play
</code></pre>
                    </li>
                    
                    <li>List Buckets on Play : Example
<pre class="code-toolbar"><code class="language-bash">$ mc ls play
[2016-02-08 11:47:12 PST]     0B aaron/
[2016-03-17 17:02:04 PDT]     0B dee/
[2016-01-31 09:23:07 PST]     0B flib/
[2016-03-10 02:00:04 PST]     0B images-eu-vm224/
[2016-03-22 17:14:04 PDT]     0B kline/
[2016-02-05 05:53:52 PST]     0B mark/
[2016-03-22 19:47:48 PDT]     0B my-bucketname/
[2016-03-22 22:01:07 PDT]     0B mytestbucket/
[2016-03-22 20:04:39 PDT]     0B mybucketname/
[2016-01-28 17:23:11 PST]     0B newbucket/
[2016-03-21 13:27:17 PDT]     0B rmskd/
[2016-03-20 09:08:36 PDT]     0B s3git-test/
</code></pre>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="accordion">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Further Reading</a>
        
        <div id="collapseThree" class="panel-collapse collapse">
            <div class="panel-body">
                <a target="_blank_" href="https://blog.minio.io/command-line-access-to-google-cloud-storage-35b5c6806aab#.a8rpex4lm"><code>mc</code> for Google Cloud Storage</a>
            </div>
        </div>
    </div>
</div>

## <span>3</span> Next Steps - Explore Further

Bundle the Minio Cloud Storage Server with your Application Stack with <a href="minio-server.html"> Minio Server</a>

Need Minio functionality inside your applications / programs? <a href="minio-sdk.html"> Go to Minio SDK</a>
