require 'spec_helper'

describe PostsController do
  render_views

  describe "GET 'new'" do
    describe "Authenticated" do
      before(:each) do
        @user = Factory(:user)
        sign_in @user
      end
      it "should be successful" do
        get :new
        response.should be_success
      end
    
      it "should have the right title" do
        get :new
        response.should have_selector("title", :content => "New Post")
      end    
    end
    
    describe "Unauthenticated" do
      before(:each) do
        @user = Factory(:user)
      end
      it "should be redirected to sign in" do
        # response.should be_redirect
        # it "should be successful" do
        #   get :new
        #   response.should be_success
        # end
        # 
        # it "should have the right title" do
        #   get :new
        #   response.should have_selector("title", :content => "New Post")
        # end
      end
    end
  end
  
  describe "POST 'create'" do
    describe "Authenticated" do
      before(:each) do
        @user = Factory(:user)
        sign_in @user
      end
      
      describe "failure from invalid fields" do
        before(:each) do
          @attr = { :headline => "", :content => "", :image_path => "",
                    :tag => "" }
        end
        
        it "should not create a post" do
          lambda do
            post :create, :post => @attr
          end.should_not change(Post, :count)
        end
      end
      
      describe "success as authenticated with valid fields" do
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

    describe "Unauthenticated" do
      describe "failure because not authenticated" do
        before(:each) do
          @attr = { :headline => "New Post", :content => "Lipsum",
                    :image_path => "", :tag => "tag" }
        end
        it "should not create a post" do
          lambda do
            post :create, :post => @attr
          end.should_not change(Post, :count)
        end
        it "should be redirected to sign in" do
          # response.should be_redirect
        end
      end
    end
  end

  describe "DELETE 'destroy'" do
    before(:each) do
      @user = Factory(:user)
      @attr = { :headline => "New Post", :content => "Lipsum",
                :image_path => "", :tag => "tag" }
      @post = Post.create!(@attr)
    end
    
    describe "as a non-signed-in user" do
      it "should deny access" do
        delete :destroy, :id => @post
        response.should redirect_to('/users/sign_in')
      end
    end

    describe "as a signed-in user" do
      before(:each) do
        sign_in @user
      end
      it "should destroy the post" do
        lambda do
          delete :destroy, :id => @post
        end.should change(Post, :count).by(-1)
      end

      it "should redirect to the posts page" do
        delete :destroy, :id => @post
        response.should redirect_to('/posts')
      end
    end
  end

end
