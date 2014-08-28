---
layout: post
title: "Fedora: Image Manipulation Servlet"
created: 1148747489
categories: ["tech"]
---
During the 2nd semester of my junior year at <a href="http://www.cornell.edu">Cornell University</a> (circa April 2003), I worked on an independent study where I developed an image manipulation servlet to tie into <a href="http://www.fedora.info/">Fedora</a>, an "open source software [package that] gives organizations a flexible service-oriented architecture for managing and delivering their digital content."

At the time of my project, Fedora was managing massive digital libraries for both the University of Virginia and Cornell University. Both universities were looking for a solution to better manipulate images and that is where my project comes in.

I wrote and developed a Java servlet to perform image manipulations on the fly, including resizing, cropping, zooming, brightness adjustments, watermarking, and converting from one format to another. All of these translations occured through HTTP GET requests. The benefit of this approach, was that only the original image needed to be stored in the database and any derivative of it could be generated on the fly.

Back then, storage wasn't as abundant as it is today :-)

Below, you'll find the servlet in two flavors: one with more generic, portable code, and the latter, relying on more comprehensive image libraries. With the changes in Java over the past few years, I expect  the latter one to be just as portable as the former. Additionally, the readme and examples file should provide sufficent documentation for using the servlet. And for the curious, attached are the XML files for some basic integration into Fedora.
