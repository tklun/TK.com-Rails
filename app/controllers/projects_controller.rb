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
    
  end
  
  def destroy
  
  end
end
