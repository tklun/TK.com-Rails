require 'spec_helper'

describe "Authenticated projects/new.haml.erb" do
  
  describe "Authenticated" do
    before(:each) do
      @user = Factory(:user)
      sign_in @user
    end
    
    it "should have headline field" do
      # pending(rendered.should have_tag('#project_headline'))
    end
  end
end

# describe "Unauthenticated projects/new.haml.erb" do
# end