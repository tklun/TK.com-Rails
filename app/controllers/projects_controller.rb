class ProjectsController < ApplicationController
  before_filter :authenticate_user!, :except => [:show, :index]
  before_filter :fetch_project, :only => :show
  before_filter :ensure_current_project_url, :only => :show
  def index #Show all projects
    @title = "Portfolio"
    @projects = Project.limit(10).order("created_at ASC") # Limiting to 10.  Pagination needed if this goes further
    @class = "work"
  end

  def show #Show individual project
    @project = Project.find(params[:id])
  end
  
  def new
    @project = Project.new
    @title = "New Project"
  end

  def create
    @project = Project.new(params[:project])
    if @project.save
      redirect_to @project
    else
      @title = "New Project"
      render 'new'
    end
  end
  
  def edit
    @project = Project.find(params[:id])
    @title = "Edit Project"
  end
  
  def update
    @project = Project.find(params[:id])

    respond_to do |format|
      if @project.update_attributes(params[:project])
        flash[:notice] = 'Project was successfully updated.'
        format.html { redirect_to(@project) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @project.errors, :status => :unprocessable_entity }
      end
    end
  end
  
  def destroy
    Project.find(params[:id]).destroy
    flash[:success] = "Successfully deleted"
    redirect_to '/projects'
  end
end
private
    def fetch_project
      @project = Project.find(params[:id])
    end

    def ensure_current_project_url
      redirect_to @project, :status => :moved_permanently unless @project.friendly_id_status.best?
    end