class ProjectsController < ApplicationController
  def index #Show all projects
    
  end

  def show #Show individual project
    @project = Project.find(params[:id])
  end
  
  def new
  end

  def edit
    
  end
  
  def destroy
  
  end
end
