require 'spec_helper'

describe PostsController do
  render_views

  describe "GET 'new'" do
    
    it "should be successful" do
      get :new
      response.should be_success
    end

    it "should have the right title" do
      get :new
      response.should have_selector("title", :content => "New Post")
    end
  end
  
  describe "POST 'create'" do

    describe "failure" do

      before(:each) do
        @attr = { :headline => "", :content => "", :image_path => "",
                  :tag => "" }
      end

      it "should not create a user" do
        lambda do
          post :create, :post => @attr
        end.should_not change(Post, :count)
      end

      it "should have the right title" do
        post :create, :post => @attr
        response.should have_selector("title", :content => "New Post")
      end

      it "should render the 'new' page" do
        post :create, :post => @attr
        response.should render_template('new')
      end
    end

    describe "success" do

      before(:each) do
        @attr = { :headline => "New Post", :content => "Lipsum",
                  :image_path => "", :tag => "tag" }
      end

      it "should create a post" do
        lambda do
          post :create, :post => @attr
        end.should change(Post, :count).by(1)
      end

      it "should redirect to the post show page" do
        post :create, :post => @attr
        response.should redirect_to(post_path(assigns(:post)))
      end    
    end
  end
end
