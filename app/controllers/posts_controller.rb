class PostsController < ApplicationController
  before_filter :authenticate_user!, :except => [:show, :index]

  def index #Show all posts
    @title = "Posts"
    @posts = Post.all
    # @posts = Post.find(:all, :limit => 5)
    # Person.find(:all, :offset => 10, :limit => 10)
  end

  def show #Show individual posts
    @post = Post.find(params[:id])
    @title = @post.headline
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
  end

  def edit
    @post = Post.find(params[:id])
    @title = "Edit Post"
    get_all_tags
  end
  
  def update
    params[:tags] ||= {}
    @post = Post.find(params[:id])
    get_all_tags

    respond_to do |format|
      if @post.update_attributes(params[:post])
        flash[:notice] = 'Post was successfully updated.'
        format.html { redirect_to(@post) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @post.errors, :status => :unprocessable_entity }
      end
    end
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
