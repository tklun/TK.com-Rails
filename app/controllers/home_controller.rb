class HomeController < ApplicationController
  def index
    @title = "Home"
    @top_posts = Post.paginate( :all, :per_page => 5, :page => params[:page] ) 
  end

end
