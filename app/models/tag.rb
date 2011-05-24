# == Schema Information
# Schema version: 20110524040312
#
# Table name: tags
#
#  id         :integer         not null, primary key
#  tag_name   :string(255)
#  post_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class Tag < ActiveRecord::Base
  belongs_to :post
end
