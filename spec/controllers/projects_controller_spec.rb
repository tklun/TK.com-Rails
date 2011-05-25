require 'spec_helper'

describe ProjectsController do

  describe "GET 'new'" do
    before(:each) do
      @user = Factory(:user)
      sign_in @user
    end
    it "should be successful" do
      get 'new'
      response.should be_success
    end
  end

end
