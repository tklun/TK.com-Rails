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

  describe "GET 'new' not authenticated" do
    before(:each) do
      @user = Factory(:user)
    end
    it "should be successful" do
      get 'new'
      response.should_not be_success
    end
  end
  
  describe "DELETE 'destroy'" do
    before(:each) do
      @user = Factory(:user)
      @attr = { :headline => "New Project", :details => "Lipsum",
                :role => "Role", :client => "", :client_type => "" }
      @project = Project.create!(@attr)
    end
    
    describe "as a non-signed-in user" do
      it "should deny access" do
        delete :destroy, :id => @project
        response.should redirect_to('/users/sign_in')
      end
    end

    describe "as a signed-in user" do
      before(:each) do
        sign_in @user
      end
      it "should destroy the post" do
        lambda do
          delete :destroy, :id => @project
        end.should change(Project, :count).by(-1)
      end

      it "should redirect to the projects page" do
        delete :destroy, :id => @project
        response.should redirect_to('/projects')
      end
    end
  end

end
