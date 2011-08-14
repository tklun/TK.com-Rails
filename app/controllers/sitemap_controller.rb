class SitemapController < ApplicationController
  def show
    @posts = Post.all
    @tags = Tag.all
  end
end