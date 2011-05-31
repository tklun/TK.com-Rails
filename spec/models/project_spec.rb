require 'spec_helper'

describe Project do
  before(:each) do
    @attr = {:headline => "Test headline", :details => "I'm the content", :role => "Test"}
  end
  
  it "should create a instance of Project with included attributes" do
    Project.create!(@attr)
  end
  
  it "should require a headline" do
    no_headline_project = Project.new(@attr.merge(:headline => ""))
    no_headline_project.should_not be_valid
  end

  it "should require details" do
    no_details_post = Project.new(@attr.merge(:details => ""))
    no_details_post.should_not be_valid
  end
  
  it "should require a role" do
    no_role_post = Project.new(@attr.merge(:role => ""))
    no_role_post.should_not be_valid
  end
end
