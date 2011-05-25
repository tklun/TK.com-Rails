class PostsController < ApplicationController
  before_filter :authenticate_user!, :except => [:show, :index]

  def index #Show all posts
    @title = "Posts"
    @posts = Post.all
  end

  def show #Show individual posts
    @post = Post.find(params[:id])
    @title = @post.headline
    @tag_text = get_tag(@post)
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
  
  def get_tags
    @tags = Tag.all
  end

  def get_tag(post)
    @tag_id = post.tag
    @tag = Tag.find(@tag_id)
  end

end
