require 'spec_helper'

describe PagesController do
  render_views
  describe "GET 'about'" do
    it "should be successful" do
      get 'about'
      response.should be_success
    end
  end

end
