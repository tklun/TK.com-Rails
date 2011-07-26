class Track
  include HTTParty

  format :json
  default_params :format => 'json', :api_key => ENV['LASTFM_APIKEY'], :user => ENV['LASTFM_USERNAME']
  
  def self.get_all_tracks
    response = self.get_all_data
    response['recenttracks']['track']
  end
  
  def self.get_all_data
    response = self.make_request
    if (response.code != 200 or response.empty?)
      output = nil
    else
      output = response.parsed_response
    end
    output
  end

  def self.make_request
    self.get("http://ws.audioscrobbler.com/2.0/", :query => {:method => 'user.getRecentTracks'})
  end
end

