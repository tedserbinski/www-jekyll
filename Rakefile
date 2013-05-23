require 'rubygems'
require 'highline/import'
require 'bundler/setup'

Bundler.require



desc 'update all libaries'
task :update do
  sh 'rvm get stable; rvm gemset update; brew update; brew upgrade; gem update --system; gem update; bundle update'
end



desc 'generate new site and launch server'
task :preview do
  sh 'rm -rf _site ; jekyll server --lsi --watch --config=_config.local.yml ;'
end



desc 're-generate site and upload to S3'
task :publish do
  sh 'rm -rf _site ; image_optim -r *.{jpg,png,gif} ; jekyll build --lsi --config=_config.prod.yml; jekyll-s3 --headless ;'
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
    post.puts 'description: " "'
    post.puts "category: "
    post.puts "tags: [\"#{tags}\"]"
    post.puts "---"
    post.puts ""
  end
end
