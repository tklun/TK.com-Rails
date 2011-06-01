module PostsHelper
  
  def top_posts(num_of_posts)
    # Without pagination
    # @top_posts = Post.find(:all, :limit => 5)
    
    # With pagination
    @top_posts = Post.paginate( :all, :per_page => num_of_posts, :page => params[:page] )
  end
  
end
