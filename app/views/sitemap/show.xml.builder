xml.instruct!
xml.urlset "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9" do

  xml.url do
    xml.loc "http://www.tomklun.com"
    xml.priority 1.0
  end

  xml.url do
    xml.loc "http://www.tomklun.com/posts/"
    xml.priority 1.0
  end

  @posts.each do |post|
    xml.url do
      xml.loc post_url(post)
      xml.lastmod post.updated_at.to_date
      xml.priority 0.9
    end
  end

  @tags.each do |tag|
    xml.url do
      xml.loc tag_url(tag)
      xml.priority 0.9
    end
  end

  xml.url do
    xml.loc "http://www.tomklun.com/projects/"
    xml.priority 1.0
  end

end