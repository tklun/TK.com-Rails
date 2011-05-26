class PostsController < ApplicationController
  before_filter :authenticate_user!, :except => [:show, :index]

  def index #Show all posts
    @title = "Posts"
    @posts = Post.all
  end

  def show #Show individual posts
    @post = Post.find(params[:id])
    @title = @post.headline
    # @tag_text = get_tag(@post)
    # @tag_list = get_post_tags
    # get_post_tags(@post)
    # create_tag_name_array(@post)
  end
  
  def new
    @post = Post.new
    @title = "New Post"
    get_all_tags
  end

  def create
    @post = Post.new(params[:post])
    get_all_tags
    
    respond_to do |format|
      if @post.save
        flash[:notice] = 'Post was successfully created.'
        format.html { redirect_to(@post) }
        format.xml  { render :xml => @post, :status => :created, :location => @post }
      else
        @title = "New Post"
        format.html { render :action => "new" }
        format.xml  { render :xml => @post.errors, :status => :unprocessable_entity }
      end
    end
    # if @post.save
    #   redirect_to @post
    # else
    #   @title = "New Post"
    #   render 'new'
    # end
  end

  def edit
    
  end
  
  def destroy
  
  end
  
  def get_all_tags
    @tags = Tag.all # No order specified as there is only one field
  end

  # Saving code below as a reference, but it has successfully been refactored out.
  
  # def get_post_tags(post)
  #   @tag_array = []
  #   @post_tag_list = post.tags
  #   @post_tag_list.each do |tag|
  #     @tag_array << tag.tag_name
  #   end
  # end
  # 
  # def create_tag_name_array(post)
  #   @tag_array = []
  #   post.tags.each do |tag|
  #     @tag_array << tag.tag_name
  #   end
  # end

end
