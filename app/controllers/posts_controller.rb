class PostsController < ApplicationController

  def index #Show all posts
    @title = "Posts"
  end

  def show #Show individual posts
    @post = Post.find(params[:id])
    @title = @post.headline
  end
  
  def new
    @post = Post.new
    @title = "New Post"
  end

  def create
    @post = Post.new(params[:post])
    if @post.save
      redirect_to @post
    else
      @title = "New Post"
      render 'new'
    end
  end

  def edit
    
  end
  
  def destroy
  
  end

end
