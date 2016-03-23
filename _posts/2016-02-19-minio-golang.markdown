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
}
</code></pre>
 		
	

####Running the above example 

<ul style="list-style: none;"> 
	
<li> <i class="fa fa-caret-right"></i> Run on CLI
<pre><code class="language-bash">$ go run listbuckets.go
2016/03/22 21:27:52 {aaron 2016-02-08 19:47:12.453 +0000 UTC}
2016/03/22 21:27:52 {dee 2016-03-18 00:02:04.181 +0000 UTC}
2016/03/22 21:27:52 {flib 2016-01-31 17:23:07.757 +0000 UTC}
2016/03/22 21:27:52 {images-eu-vm224 2016-03-10 10:00:04.557 +0000 UTC}
2016/03/22 21:27:52 {kline 2016-03-22 15:33:54.185 +0000 UTC}
2016/03/22 21:27:52 {mark 2016-02-05 13:53:52.717 +0000 UTC}
2016/03/22 21:27:52 {mc-binaries 2016-02-08 02:19:39.069 +0000 UTC}
2016/03/22 21:27:52 {minio-binaries 2016-02-18 21:00:42.229 +0000 UTC}
2016/03/22 21:27:52 {newbucket 2016-01-29 01:23:11.525 +0000 UTC}
2016/03/22 21:27:52 {rmskd 2016-03-21 20:27:17.465 +0000 UTC}
2016/03/22 21:27:52 {s3git-test 2016-03-20 16:08:36.589 +0000 UTC}
2016/03/22 21:27:52 {test 2016-02-29 23:30:15.765 +0000 UTC}
2016/03/22 21:27:52 {test123 2016-01-28 05:19:18.829 +0000 UTC}
2016/03/22 21:27:52 {testhelen 2016-02-27 04:09:11.861 +0000 UTC}
</code></pre>

     
 
## <span>3</span> Next Steps : Explore Further

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
 