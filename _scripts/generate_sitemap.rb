# Regenerates sitemap.xml from the pages Jekyll actually builds.
#
#   bundle exec ruby _scripts/generate_sitemap.rb
#
# Run it after adding, removing or renaming pages, then commit sitemap.xml.
# <lastmod> is the date of the last git commit touching each source file, so
# run it from a full clone (`git fetch --unshallow` if needed).
# This folder starts with "_", so Jekyll does not publish it.

require "jekyll"
require "tmpdir"

BASE = "https://datama-solutions.github.io/docs"
SKIP_LAYOUTS = %w[redirect search].freeze
SKIP_URLS = %w[/404.html].freeze

root = File.expand_path("..", __dir__)
site = Jekyll::Site.new(Jekyll.configuration(
  "source" => root, "destination" => Dir.mktmpdir, "quiet" => true
))
site.reset
site.read
site.generate

entries = (site.pages + site.posts.docs).filter_map do |doc|
  next unless doc.output_ext == ".html"
  next if SKIP_URLS.include?(doc.url) || SKIP_LAYOUTS.include?(doc.data["layout"])

  lastmod = `git -C "#{root}" log -1 --format=%cs -- "#{doc.relative_path}"`.strip
  [BASE + doc.url, lastmod]
end
entries.sort_by! { |loc, _| [loc == "#{BASE}/" ? 0 : 1, loc] }

xml = +%(<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n)
entries.each do |loc, lastmod|
  xml << "  <url>\n    <loc>#{loc}</loc>\n"
  xml << "    <lastmod>#{lastmod}</lastmod>\n" unless lastmod.empty?
  xml << "  </url>\n"
end
xml << "</urlset>\n"

File.write(File.join(root, "sitemap.xml"), xml)
puts "sitemap.xml: #{entries.size} URLs"
