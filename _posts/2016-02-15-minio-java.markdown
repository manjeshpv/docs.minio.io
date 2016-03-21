---
layout: post
title:  MINIO SDK Java
comments: true
categories : [minio, sdk, java, docs, examples]
permalink: minio-java
sub: java 
page: Quick Start Guide
---
 
## <span>1</span>Install

<ul class="d-tabs list-unstyled list-inline">
    <li class="active"><a href="#maven" data-toggle="tab">From Maven</a></li>
    <li><a href="#gradle" data-toggle="tab">From Gradle</a></li>
    <li><a href="#jar" data-toggle="tab">From Jar</a></li>
</ul>

<div class="tab-content">
    <div class="tab-pane active fade in" id="maven">
        <pre class="code-toolbar"><code class="language-markup">&lt;dependency&gt;
    &lt;groupId&gt;io.minio&lt;/groupId&gt;
    &lt;artifactId&gt;minio&lt;/artifactId&gt;
    &lt;artifactId&gt;minio&lt;/artifactId&gt;
    &lt;version&gt;1.0.1&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
    </div>
    
    <div class="tab-pane fade" id="gradle">
        <pre class="code-toolbar"><code class="language-java">dependencies {
    compile 'io.minio:minio:1.0.1'
}</code></pre>     
    </div>
    
    <div class="tab-pane fade" id="jar">
        You can directly download the JAR file <a href="http://repo1.maven.org/maven2/io/minio/minio/1.0.1/">here</a> and include it in your java or android project.	 
    </div>
</div>
 
						 
## <span>2</span>Example

<pre class="code-toolbar m-b-10"><code class="language-java">import io.minio.MinioClient;
import io.minio.messages.Bucket;
import io.minio.errors.MinioException;
import java.util.Iterator;
import java.util.List;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.InvalidKeyException;
import org.xmlpull.v1.XmlPullParserException;

public class HelloListBuckets {
    public static void main(String[] args) throws NoSuchAlgorithmException, IOException, InvalidKeyException,  XmlPullParserException, MinioException {

        // Create a minioClient with the Minio Server name, Port, ACCESS KEY and SECRET KEY
        MinioClient minioClient = new MinioClient("play.minio.io",9002, "Q3AM3UQ867SPQQA43P2F", "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG");

        // list buckets
        List<Bucket> bucketList = minioClient.listBuckets();
        Iterator<Bucket> bucketIterator = bucketList.iterator();

        while (bucketIterator.hasNext()) {
            Bucket bucket = bucketIterator.next();
            System.out.println(bucket.name());
        }
    }
}
~</code></pre>
	  
Compile the above snippet by typing in your terminal 
	  
<pre class="code-toolbar m-b-10"><code class="language-java">javac -cp "minio-1.0.1-all.jar"  HelloListBuckets.java</code></pre>

Run the above snipper by typing in your terminal 

<pre class="code-toolbar m-b-10"><code class="language-java">java HelloListBuckets</code></pre>
	 
Results should look like this :
			
<pre class="code-toolbar m-b-10"><code class="language-java">&lt; java HelloListBuckets
productimages-bucket
marketingimages-bucket
testbucket
logfiles-bucket</code></pre>
				 
		 

## <span>3</span>Next Steps : Explore Further

Now that you have run this example successfully, you can go look at all our other APIs in our API Guide or check out our full examples. You can also visit our Recipes sections to get answers to specific needs in your project. 