---
layout: post
title:  MINIO SDK Node.js
comments: true
categories : [minio, sdk, nodejs, docs, examples]
permalink: minio-nodejs 
sub: nodejs 
page: Quick Start Guide
---
 
## <span>1</span> Install

<ul class="d-tabs list-inline list-unstyled">
    <li class="active">
        <a href="#install-npm" data-toggle="tab">From NPM</a>
    </li>
    <li>
        <a href="#install-source" data-toggle="tab">From Source</a>
    </li>
</ul>

<div class="tab-content">
    <div id="install-npm" class="tab-pane active fade in">
        <p>Minio Node.js API can be installed with npm on the command line</p>
        
        <div class="clearfix"></div>
        
        <pre><code class="language-bash">$ npm install minio --save </code></pre>
    </div>
    
    <div id="install-source" class="tab-pane fade">
            <p>You may also install from our sources by doing:</p>
            
            <div class="clearfix"></div>
            
            <pre class="code-toolbar"><code class="language-bash">$ git clone https://github.com/minio/minio-js 
$ cd minio-js
$ npm install
$ npm install -g</code></pre>
        </div>
</div>
  
## <span>2</span> Example
<pre class="code-toolbar m-b-10"><code class="language-javascript">var Minio = require('minio')
	   
var minioClient = new Minio({
    endPoint: 'play.minio.io:9000', 
    accessKey: 'Q3AM3UQ867SPQQA43P2F', 
    secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
});

minioClient.listBuckets(function(e, buckets) {

if (e)
    return console.log(e);
    console.log('buckets :', buckets);
});
</code></pre>
 
Running the above example - app.js

<pre class="code-toolbar m-b-10"><code class="language-bash">var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars'),hbs;
var Minio = require('minio');
var app = express();

var minioClient = new Minio({
     endPoint: 'play.minio.io',
     port: 9000,
     accessKey: 'Q3AM3UQ867SPQQA43P2F',
     secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
});


app.set('port',1337);
app.set('views', path.join(__dirname,'views'));

hbs = handlebars.create({
    defaultLyout: 'main'
});

app.engine('handlebars',hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', function(request, response) {
  minioClient.listBuckets(function(e, buckets) {
     if (e) {
         return console.log(e);
     }
     console.log('buckets :', buckets);
     });
  response.render('index');
});

http.createServer(app).listen(app.get('port'), function() {
        console.log('Server listening on port ' + app.get('port'));
});
</code></pre>

Running the above example - Console Output 

<pre class="code-toolbar m-b-10"><code class="language-json">$ node app
Server listening on port 1337

buckets : [
    { 
        name: 'aaron', 
        creationDate: Tue Mar 22 2016 17:14:04 GMT-0700 (PDT) 
    },
    { 
        name: 'mark',
        creationDate: Fri Feb 05 2016 05:53:52 GMT-0800 (PST) 
    },
    { 
        name: 'mc-binaries',
        creationDate: Sun Feb 07 2016 18:19:39 GMT-0800 (PST) },
    { 
        name: 'minio-binaries',
        creationDate: Thu Feb 18 2016 13:00:42 GMT-0800 (PST) },
    { 
        name: 'my-bucketname',
        creationDate: Tue Mar 22 2016 19:47:48 GMT-0700 (PDT) },
    { 
        name: 'mybucket',
        creationDate: Tue Mar 22 2016 22:01:07 GMT-0700 (PDT) },
    { 
        name: 'mybucketname',
        creationDate: Tue Mar 22 2016 20:04:39 GMT-0700 (PDT) },
    { 
        name: 'mydee',
        creationDate: Wed Mar 23 2016 01:25:13 GMT-0700 (PDT) },
    { 
        name: 'newbucket',
        creationDate: Thu Jan 28 2016 17:23:11 GMT-0800 (PST) },
    { 
        name: 'rmskd',
        creationDate: Mon Mar 21 2016 13:27:17 GMT-0700 (PDT) },
    { 
        name: 's3git-test',
        creationDate: Sun Mar 20 2016 09:08:36 GMT-0700 (PDT) },
    { 
        name: 'test',
        creationDate: Mon Feb 29 2016 15:30:15 GMT-0800 (PST) },
    { 
        name: 'test123',
        creationDate: Wed Jan 27 2016 21:19:18 GMT-0800 (PST) },
    { 
        name: 'testhelen',
        creationDate: Fri Feb 26 2016 20:09:11 GMT-0800 (PST) 
    }
]
</code></pre>


Open <a href="http://localhost:1337">http://localhost:1337</a> on your browser

<!--
<pre class="code-toolbar"><code class="language-html">TBD. WE need to be able to do minioClient.public_url 

&lt;!doctype html&gt;
&lt;html&gt;
    &lt;body&gt;
        &lt;h1&gt; Your URLS &lt;/h1&gt;
        &#123;&#123;#each urls&#125;&#125;
        &lt;p&gt;
            &lt;a href="/url/{{id}}"&gt;
                &#123;&#123;url&#125;&#125;
            &lt;/a&gt;
        &lt;/p&gt;
        {{/each}}
    &lt;/body&gt;
&lt;/html&gt;
</code></pre> -->

 
## <span>3</span> Next Steps : Explore Further

Bundle the Minio Cloud Storage Server with your Application Stack with <a href="minio-server.html"> Minio Server</a>

Need Minio functionality inside your applications / programs? <a href="minio-sdk.html"> Go to Minio SDK</a>