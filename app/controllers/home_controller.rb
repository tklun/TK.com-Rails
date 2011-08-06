class HomeController < ApplicationController
  def index
    @title = "Home"
    @class = "home"
    @projects = Project.limit(2).order("created_at DESC")
    @tracks = Track.get_all_tracks    
    # response.headers['Content-Encoding'] = 'gzip'
  end

end
