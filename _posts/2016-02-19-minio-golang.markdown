---
layout: post
title:  MINIO SDK Golang
comments: true
categories : [minio, sdk, golang, docs, examples]
permalink: minio-golang 
sub: golang 
page: Quick Start Guide
---

## <span>1</span>Install
 
    $ go get github.com/minio/minio-go
 				 

## <span>2</span>Example

<pre class="code-toolbar m-b-10"><code class="language-go">package main
    import (
        "log"
        "github.com/minio/minio-go"
    )

    func main() {
        // Requests are always secure (HTTPS) by default. Set insecure=true to enable insecure (HTTP) access.
        // This boolean value is the last argument for New().
    
        // New returns an Amazon S3 compatible client object. API copatibality (v2 or v4) is automatically
        // determined based on the Endpoint value.
        minioClient, err := minio.New("play.minio.io:9000", "Q3AM3UQ867SPQQA43P2F", "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG", false)
    
    if err != nil {
        log.Fatalln(err)
    }
    
    buckets, err := minioClient.ListBuckets()
    
    if err != nil {
        log.Fatalln(err)
    }
    
    for _, bucket := range buckets {
        log.Println(bucket)
    }
}</code></pre>
 		
	

Running the above example

    TBD : drop them into go repl. And show the output results.
 
## <span>3</span>Next Steps : Explore Further

Now that you have run this example successfully, you can go look at all our other APIs in our API Guide or check out our full examples. You can also visit our Recipes sections to get answers to specific needs in your project. 
