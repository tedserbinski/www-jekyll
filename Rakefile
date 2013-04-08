desc 'update all libaries'
task :update do
  sh 'rvm get stable; rvm gemset update; brew update; brew upgrade; gem update --system; gem update;'
end


desc 're-generate site and upload to S3'
task :deploy do
  sh 'rm -rf _site ; jekyll ; jekyll-s3 --headless'
end

desc 're-generate site'
task :generate do
  sh 'rm -rf _site ; time jekyll'
end


desc 'create new post'
# rake new type=(post) future=0 title="New post title goes here" slug="slug-override-title" category="category"
task :new do
  require 'rubygems'
  require 'chronic'
  
  type = ENV["type"] || "post"
  title = ENV["title"] || "New Title"
  future = ENV["future"] || 0
  slug = ENV["slug"].to_s.gsub(' ','-').downcase || title.to_s.gsub(' ','-').downcase
  category = ENV["category"] || "startups"
 
  if future.to_i < 3
    TARGET_DIR = "_posts"
  else
    TARGET_DIR = "_drafts"
  end
 
  if future.to_i.zero?
    filename = "#{Time.new.strftime('%Y-%m-%d')}-#{slug}.md"
  else
    stamp = Chronic.parse("in #{future} days").strftime('%Y-%m-%d')
    filename = "#{stamp}-#{slug}.md"
  end
  
  path = File.join(TARGET_DIR, filename)
  post = <<-HTML
--- 
layout: TYPE
title: "TITLE"
date: DATE
category: CATEGORY
---
 
HTML
  post.gsub!('TITLE', title).gsub!('DATE', Time.new.to_s).gsub!('TYPE', type).gsub('CATEGORY', category)
  File.open(path, 'w') do |file|
    file.puts post
  end
  puts "new #{type} generated in #{path}"
  system "coda #{path}"
end