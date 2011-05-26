# == Schema Information
# Schema version: 20110526033958
#
# Table name: posts
#
#  id         :integer         primary key
#  headline   :string(255)
#  content    :text
#  image_path :string(255)
#  post_tag   :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Post < ActiveRecord::Base
  has_and_belongs_to_many :tags
  
  attr_accessible :headline, :content, :image_path, :post_tag, :tag_list
  attr_accessor :tag_list
  after_save :update_tags
  
  validates :headline, :presence => true
  validates :content, :presence => true
  # validates :post_tag, :presence => true
  
  private
  def update_tags
    tags.delete_all
    selected_tags = tag_list.nil? ? [] : tag_list.keys.collect{|id| Tag.find_by_id(id)}
    selected_tags.each {|tag| self.tags << tag}
  end

end
