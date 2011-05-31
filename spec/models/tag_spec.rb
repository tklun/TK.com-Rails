require 'spec_helper'

describe Tag do
  before(:each) do
    @attr = {:tag_name => 'test'}
  end
  
  it "should reject duplicate tags" do
    Tag.create!(@attr)
    tag_with_duplicate_name = Tag.new(@attr)
    tag_with_duplicate_name.should_not be_valid
  end
  
  it "should reject tags identical up to case" do
    upcased_tag = @attr[:tag_name].upcase
    Tag.create!(@attr.merge(:tag_name => upcased_tag))
    tag_with_duplicate_name = Tag.new(@attr)
    tag_with_duplicate_name.should_not be_valid
  end
end
