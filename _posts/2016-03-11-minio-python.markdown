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

#Instantiate a client
minoClient = Minio('play.minio.io:9000',
	         access_key='Q3AM3UQ867SPQQA43P2F',
	         secret_key='zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG')

#List buckets
buckets = minioClient.list_buckets()
for bucket in buckets:
	print('bucket:', bucket.name, bucket.creation_date)</code></pre>
	
 

####Running the above example

    >> Drop them into a REPL and show output here
						     					 
 
## <span>3</span> Next Steps

 Now that you have run this example successfully, you can go look at all our other APIs in our API Guide or check out our full examples. You can also visit our Recipes sections to get answers to specific needs in your project. 