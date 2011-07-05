module PostsHelper
  include ActionView::Helpers::TextHelper
  def top_posts(num_of_posts)
    # Without pagination
    @top_posts = Post.find(:all, :limit => num_of_posts)
  end
  
  def tags_and_time
  end
  
end
