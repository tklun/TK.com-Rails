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
  # use the "title" column as the basis of the friendly_id, and use slugs
  has_friendly_id :headline, :use_slug => true,
    # remove accents and other diacritics from Latin characters
    :approximate_ascii => true,
    # don't use slugs larger than 50 bytes
    :max_length => 50
  
  attr_accessible :headline, :content, :image_path, :post_tag, :tag_list
  attr_accessor :tag_list
  after_save :update_tags
  
  validates :headline, :presence => true
  validates :content, :presence => true
  
  markdownize! :content
  
  # def self.find_by_date(year, month)
  #   conditions = []
  #   conditions << ["strftime(%Y,created_at)= ?",year] if year
  #   conditions << ["strftime(%m,created_at)= ?",month] if month
  # 
  #   find(:all, :conditions => [conditions.transpose.first.join(' AND '), *conditions.transpose.last], :order => "created_at ASC")
  # end
  
  private
  def update_tags
    tags.delete_all
    selected_tags = tag_list.nil? ? [] : tag_list.keys.collect{|id| Tag.find_by_id(id)}
    selected_tags.each {|tag| self.tags << tag}
  end

end
