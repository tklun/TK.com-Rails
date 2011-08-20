class TagsController < ApplicationController
  before_filter :authenticate_user!, :except => [:show, :index]
  before_filter :fetch_tag, :only => :show
  before_filter :ensure_current_tag_url, :only => :show
  def index #Show all Tags
    @title = "Tags"
    @tags = Tag.all
    @posts = Post.all
  end

  def show #Show individual Tag
    @tag = Tag.find(params[:id])
    @tagname = @tag.tag_name
    @title = @tagname
    @posts = @tag.posts
    @tagposts = @posts.paginate( :all, :per_page => 3, :page => params[:page],:order => "created_at DESC" )
    @sidebarPosts = Post.paginate( :all, :per_page => 10, :page => params[:page],:order => "created_at DESC" )
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

private
    def fetch_tag
      @tag = Tag.find(params[:id])
    end

    def ensure_current_tag_url
      redirect_to @tag, :status => :moved_permanently unless @tag.friendly_id_status.best?
    end