class PostsController < ApplicationController    
  before_filter :authenticate_user!, :except => [:show, :index, :archive]
  before_filter :fetch_post, :only => :show
  before_filter :ensure_current_post_url, :only => :show
  
  def index #Show all posts
    @title = "Posts"
    @class = "posts"
    @posts = Post.paginate( :all, :per_page => 3, :page => params[:page],:order => "created_at DESC" )
    # @sidebarPosts = Post.paginate( :all, :per_page => 10, :page => params[:page],:order => "created_at DESC" )
    @sidebarPosts = Post.limit(10).order("created_at DESC")

  end

  def show #Show individual posts
    @post = Post.find(params[:id])
    @title = @post.headline
    @class = "posts-long"
    @sidebarPosts = Post.paginate( :all, :per_page => 10, :page => params[:page],:order => "created_at DESC" )
  end
  
  def archive #Show archive
    @class = "posts"
    # @year = params[:year]
    # @month = params[:month]
    # @day = params[:day]
    # @posts = Post.find_by_date(params[:year], params[:month])
      @posts = Post.find(:all,:order => "created_at DESC" )
      # where(:created_at => params[:date].to_date.beginning_of_month..params[:date].to_date.end_of_month).
      # order("created_at desc")
      # where(:year => params[:year], :month => params[:month]).order("created_at DESC")
      # @posts = Post.all(:select => "headline, id, created_at", :order => "created_at DESC")

      #set defaults if we didn't get month/year
      @month_number = params[:month].to_i
      @month = Date::MONTHNAMES[@month_number]
      @year = params[:year].to_i
      #set start date to first day of a month
      start_date = Date.parse("01-#{params[:month]}-#{params[:year]}")

      end_date = start_date + 1.month 
      
      @month_posts = Post.find(:all,:order => "created_at DESC", :conditions => ["created_at >= ? and created_at < ?", start_date, end_date])
      # @post_months = @posts.group_by { |t| t.created_at.beginning_of_month }   
    @sidebarPosts = Post.paginate( :all, :per_page => 10, :page => params[:page],:order => "created_at DESC" )
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
private
    def fetch_post
      @post = Post.find(params[:id])
    end

    def ensure_current_post_url
      redirect_to @post, :status => :moved_permanently unless @post.friendly_id_status.best?
    end