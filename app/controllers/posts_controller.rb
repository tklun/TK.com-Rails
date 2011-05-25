class PostsController < ApplicationController
  before_filter :authenticate_user!, :except => [:show, :index]

  def index #Show all posts
    @title = "Posts"
    @posts = Post.all
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
