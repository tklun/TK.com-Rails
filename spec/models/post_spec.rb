require 'spec_helper'

describe Post do
  before(:each) do
    @attr = {:headline => "Test headline", :content => "I'm the content", :tag => "Test"}
  end
  
  it "should create a instance of Post with included attributes" do
    Post.create!(@attr)
  end
  
  it "should require a headline" do
    no_headline_post = Post.new(@attr.merge(:headline => ""))
    no_headline_post.should_not be_valid
  end

  it "should require a content" do
    no_content_post = Post.new(@attr.merge(:content => ""))
    no_content_post.should_not be_valid
  end
  
  #Not sure how to test this
  it "should require a tag" do
    pending(no_tag_post = Post.new(@attr.merge(:tag => "")))
    no_tag_post.should_not be_valid
  end
end
