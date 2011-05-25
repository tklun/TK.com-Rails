class TagsController < ApplicationController
  before_filter :authenticate_user!, :except => [:show, :index]

  def index #Show all Tags
    @title = "Tags"
    @tags = Tag.all
  end

  def show #Show individual Tag
    @tag = Tag.find(params[:id])
  end
  
  def new
    @tag = Tag.new
    @title = "New Tag"
  end

  def create
    @tag = Tag.new(params[:tag])
    if @tag.save
      redirect_to @tag
    else
      @title = "New Tag"
      render 'new'
    end
  end
  def edit
    
  end
  
  def destroy
  
  end
end
