---
layout: post
title:  MINIO CLIENT
comments: true
categories : [minio, client, ruby, docs, examples]
permalink: minio-client 
sub: client 
page: Quick Start Guide
---

Minio Client (mc) provides a modern alternative to Unix commands like ls, cat, cp, sync, and diff. It supports POSIX compatible filesystems and Amazon S3 compatible cloud storage systems. It is entirely written in Golang.

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


## <span>1</span> Example

  
 
  
    					 
 
## <span>3</span> Next Steps

  