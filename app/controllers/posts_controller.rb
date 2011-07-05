class PostsController < ApplicationController    
  before_filter :authenticate_user!, :except => [:show, :index]

  def index #Show all posts
    @title = "Posts"
    @posts = Post.paginate( :all, :per_page => 10, :page => params[:page] )
  end

  def show #Show individual posts
    @post = Post.find(params[:id])
    @posts = Post.paginate( :all, :per_page => 10, :page => params[:page] )
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
    Post.find(params[:id]).destroy
    flash[:success] = "Successfully deleted"
    redirect_to '/posts'
  end
  
  def get_all_tags
    @tags = Tag.all # No order specified as there is only one field
  end
  
end
