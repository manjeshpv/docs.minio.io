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
            
            <pre><code class="language-bash">$ git clone https://github.com/minio/minio-js 
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
});</code></pre>
 
 
Running the above example
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
&lt;/html&gt;</code></pre> 

 
## <span>3</span> Next Steps : Explore Further

Now that you have run this example successfully, you can go look at all our other APIs in our API Guide or check out our full examples. You can also visit our Recipes sections to get answers to specific needs in your project. 
