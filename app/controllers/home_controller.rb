class HomeController < ApplicationController
  def index
    @title = "Home"
    @class = "home"
    @projects = Project.all
  end

end
