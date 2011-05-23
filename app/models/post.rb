# == Schema Information
# Schema version: 20110523223741
#
# Table name: posts
#
#  id         :integer         not null, primary key
#  headline   :string(255)
#  content    :text
#  image_path :string(255)
#  tag        :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Post < ActiveRecord::Base
  attr_accessible :headline, :content, :image_path, :tag
  
  validates :headline, :presence => true
end
