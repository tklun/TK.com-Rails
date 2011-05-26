# == Schema Information
# Schema version: 20110526033958
#
# Table name: tags
#
#  id         :integer         primary key
#  tag_name   :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Tag < ActiveRecord::Base
  has_and_belongs_to_many :posts
  attr_accessible :tag_name
  
  def display_name
    "#{tag_name}"
  end
  
end
