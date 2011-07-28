class HomeController < ApplicationController
  def index
    @title = "Home"
    @class = "home"
    @projects = Project.all
    
    @tracks = Track.get_all_tracks
    
    response.headers['Content-Encoding'] = 'gzip'
    render :text => "Rendered at #{Time.now}"
  end

end
