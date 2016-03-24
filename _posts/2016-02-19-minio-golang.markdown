---
layout: post
title:  MINIO SDK Golang
comments: true
categories : [minio, sdk, golang, docs, examples]
permalink: minio-golang
sub: golang
page: Quick Start Guide
---

This document assumes that you have installed Golang, if not please follow these <a href="https://github.com/minio/minio-go/blob/master/INSTALLGO.md" target="_blank">instructions.</a>

## <span>1</span>Install

<pre class=""><code class="language-bash">$ go get github.com/minio/minio-go</code></pre>


## <span>2</span>Example

Following example lists buckets.

<pre class="code-toolbar m-b-10"><code class="language-go">package main

import (
	"log"

	"github.com/minio/minio-go"
)

func main() {

    // Do not disable SSL, use a secure connection.
    disableSSL := false

    // Initialize minio client object.
	minioClient, err := minio.New("play.minio.io:9000", "Q3AM3UQ867SPQQA43P2F", "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG", disableSSL)
	if err != nil {
		log.Fatalln(err)
	}

    // List buckets.
	buckets, err := minioClient.ListBuckets()
	if err != nil {
		log.Fatalln(err)
	}

    // Loop through the bucket list and print them.
	for _, bucket := range buckets {
		log.Println(bucket.Name, bucket.CreationDate)
	}
}
</code></pre>

Running the above example on CLI

<pre><code class="language-bash">$ go run listbuckets.go
2016/03/22 21:27:52 aaron 2016-02-08 19:47:12.453 +0000 UTC
2016/03/22 21:27:52 dee 2016-03-18 00:02:04.181 +0000 UTC
2016/03/22 21:27:52 flib 2016-01-31 17:23:07.757 +0000 UTC
2016/03/22 21:27:52 kline 2016-03-22 15:33:54.185 +0000 UTC
2016/03/22 21:27:52 mark 2016-02-05 13:53:52.717 +0000 UTC
</code></pre>

## <span>3</span> Next Steps : Explore Further

Bundle the Minio Cloud Storage Server with your Application Stack with <a href="minio-server.html"> Minio Server</a>

Need Minio functionality inside your applications / programs? <a href="minio-sdk.html"> Go to Minio SDK</a>