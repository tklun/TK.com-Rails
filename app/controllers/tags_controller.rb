class TagsController < ApplicationController
  before_filter :authenticate_user!, :except => [:show, :index]

  def index #Show all Tags
    @title = "Tags"
    @tags = Tag.all
    @posts = Post.all
  end

  def show #Show individual Tag
    @tag = Tag.find(params[:id])
    @posts = Post.all
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
    @tag = Tag.find(params[:id])
    @title = "Edit Tag"
  end
  
  def update
    @tag = Tag.find(params[:id])

    respond_to do |format|
      if @tag.update_attributes(params[:tag])
        flash[:notice] = 'Tag was successfully updated.'
        format.html { redirect_to(@tag) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @tag.errors, :status => :unprocessable_entity }
      end
    end
  end
  
  def destroy
    Tag.find(params[:id]).destroy
    flash[:success] = "Successfully deleted"
    redirect_to '/tags'
  end
end
