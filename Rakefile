require 'rubygems'
require 'highline'


desc 'update all libaries'
task :update do
  sh 'brew update; brew upgrade; brew cleanup; gem update --system; gem update; gem cleanup; bundle update;'
end


desc 'generate new site and launch server'
task :preview do
  # http://quaran.to/blog/2013/01/09/use-jekyll-scss-coffeescript-without-plugins/
  sh 'JEKYLL_ENV=development jekyll serve --config _site.yml,_config.common.yml,_config.local.yml --incremental --future --drafts;'
end

desc 'shutdown local jekyll server'
task :shutdown do
  sh 'pkill -f jekyll'
end

desc 're-generate site and upload to S3'
task :publish do
  sh 'JEKYLL_ENV=production jekyll build --config _site.yml,_config.common.yml,_config.prod.yml ; s3_website push --force;'
end


# Usage: rake new title="A Title" [date="2012-02-09"] [tags=[tag1, tag2]]
desc "create new post"
task :new do
  title = ENV["title"] || "New Post Title"
  tags = ENV["tags"] || "[]"
  slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

  begin
    date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
  rescue Exception => e
    puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
    exit -1
  end

  filename = File.join('_posts', "#{date}-#{slug}.markdown")
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end

  puts "Creating new post: #{filename}"
  File.open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title}\""
    post.puts "categories: [\"mobility\"] "
    post.puts "tags: [\"mobility\"] "
    post.puts "social_photo: filename.jpg"
    post.puts "excerpt: \"\""
    post.puts "---"
    post.puts ""
    post.puts "<h2 class=\"sub-title\"><small></small></h2>"
    post.puts ""
  end
end
