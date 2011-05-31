class ProjectsController < ApplicationController
  before_filter :authenticate_user!, :except => [:show, :index]

  def index #Show all projects
    @title = "Portfolio"
    @projects = Project.all
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
