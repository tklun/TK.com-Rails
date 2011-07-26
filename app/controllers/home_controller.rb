class HomeController < ApplicationController
  def index
    @title = "Home"
    @class = "home"
    @projects = Project.all
    
    @tracks = Track.get_all_tracks
  end

end
