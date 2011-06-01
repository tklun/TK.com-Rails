module PostsHelper
  
  def top_posts(num_of_posts)
    # Without pagination
    @top_posts = Post.find(:all, :limit => num_of_posts)
  end
  
end
