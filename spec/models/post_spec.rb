require 'spec_helper'

describe Post do
  before(:each) do
    @attr = {:headline => "Test headline"}
  end
  
  it "should create a instance of Post with included attributes" do
    Post.create!(@attr)
  end
  
  it "should require a headline" do
    no_headline_post = Post.new(@attr.merge(:headline => ""))
    
    no_headline_post.should_not be_valid
  end
end
