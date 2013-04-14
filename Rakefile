desc 'update all libaries'
task :update do
  sh 'rvm get stable; rvm gemset update; brew update; brew upgrade; gem update --system; gem update;'
end


desc 're-generate site and upload to S3'
task :deploy do
  sh 'rm -rf _site ; jekyll build --lsi ; jekyll-s3 --headless'
end

desc 'generate new site and launch server'
task :preview do
  sh 'rm -rf _site ; time jekyll ; jekyll server --lsi --watch ;'
end


# Usage: rake post title="A Title" [date="2012-02-09"] [tags=[tag1, tag2]]
desc "create new post"
task :post do
  title = ENV["title"] || "New Post Title"
  tags = ENV["tags"] || "[]"
  slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  begin
    date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
  rescue Exception => e
    puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
    exit -1
  end
  filename = File.join(CONFIG['posts'], "#{date}-#{slug}.markdown")
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/-/,' ')}\""
    post.puts 'description: ""'
    post.puts "category: "
    post.puts "tags: []"
    post.puts "---"
  end
end # task :post
