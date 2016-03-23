---
layout: post
title:  MINIO SDK Python
comments: true
categories : [minio, sdk, python, docs, examples]
permalink: minio-python 
sub: python 
page: Quick Start Guide
---
 
## <span>1</span>Install with PIP

<pre><code class="language-bash">$ pip install minio</code></pre>

## <span>2</span> Example

<pre class="code-toolbar m-b-10"><code class="language-python">from minio import Minio

minioclient = Minio('play.minio.io:9000',
               access_key='Q3AM3UQ867SPQQA43P2F',
               secret_key='zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG', insecure=False )

buckets = minioclient.list_buckets()

for bucket in buckets:
    print(bucket.name, bucket.creation_date)</code></pre>
	
 
#### Running the above example

<ul style="list-style: none;"> 	
<li> <i class="fa fa-caret-right"></i> Run on CLI
<pre><code class="language-bash">$ python list_buckets.py
('aaron', datetime.datetime(2016, 2, 8, 19, 47, 12, 453000, tzinfo=<UTC>))
('dee', datetime.datetime(2016, 3, 18, 0, 2, 4, 181000, tzinfo=<UTC>))
('flib', datetime.datetime(2016, 1, 31, 17, 23, 7, 757000, tzinfo=<UTC>))
('images-eu-vm224', datetime.datetime(2016, 3, 10, 10, 0, 4, 557000, tzinfo=<UTC>))
('kline', datetime.datetime(2016, 3, 23, 0, 14, 4, 137000, tzinfo=<UTC>))
('mark', datetime.datetime(2016, 2, 5, 13, 53, 52, 717000, tzinfo=<UTC>))
('mc-binaries', datetime.datetime(2016, 2, 8, 2, 19, 39, 69000, tzinfo=<UTC>))
('minio-binaries', datetime.datetime(2016, 2, 18, 21, 0, 42, 229000, tzinfo=<UTC>))
('my-bucketname', datetime.datetime(2016, 3, 23, 2, 47, 48, 641000, tzinfo=<UTC>))
('mybucket', datetime.datetime(2016, 3, 23, 2, 47, 47, 185000, tzinfo=<UTC>))
('newbucket', datetime.datetime(2016, 1, 29, 1, 23, 11, 525000, tzinfo=<UTC>))
('rmskd', datetime.datetime(2016, 3, 21, 20, 27, 17, 465000, tzinfo=<UTC>))
('s3git-test', datetime.datetime(2016, 3, 20, 16, 8, 36, 589000, tzinfo=<UTC>))
('test', datetime.datetime(2016, 2, 29, 23, 30, 15, 765000, tzinfo=<UTC>))
('test123', datetime.datetime(2016, 1, 28, 5, 19, 18, 829000, tzinfo=<UTC>))
('testhelen', datetime.datetime(2016, 2, 27, 4, 9, 11, 861000, tzinfo=<UTC>))
</code></pre></li>
</ul>	
 
## <span>3</span> Next Steps : Explore Further

<table class="table table-bordered">
<tbody>
	<tr>
	 <td>Bundle the Minio Cloud Storage Server with your Application Stack. </td>
	 <td><a href="minio-client.html"> Go to Minio Server</a></td>
  
	</tr>
	<tr>
	 <td>Need Minio functionality inside your applications / programs? </td>
	 <td><a href="minio-sdk.html">Go to Minio SDK</a></td>
  
	</tr> 
</tbody>
</table>
 
