module PostsHelper
  include ActionView::Helpers::TextHelper
  def top_posts(num_of_posts)
    # Without pagination
    @top_posts = Post.find(:all, :limit => num_of_posts)
  end
  
  def tags_and_time
  end
  
  def tags(post)
    # post.tags.each do |tag|
    #   
    # end
    post.tags.collect{|tag| link_to tag.tag_name, tag}.join(', ').html_safe
    # @tags_list = Post.find(post).collect{|tags| link_to tag.tag_name, tag}.join(', ')
  end
  
end
