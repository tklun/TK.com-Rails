# == Schema Information
# Schema version: 20110524205616
#
# Table name: projects
#
#  id          :integer         not null, primary key
#  headline    :string(255)
#  details     :text
#  client      :string(255) # Client Name
#  role        :string(255)
#  client_type :string(255) # "Agency" or "Organization"
#  created_at  :datetime
#  updated_at  :datetime
#

class Project < ActiveRecord::Base
  attr_accessible :headline, :details, :agency, :client, :organization, :technology, :role, :link_url
  
  validates :headline, :presence => true
  validates :details, :presence => true
  validates :role, :presence => true
  has_friendly_id :headline, :use_slug => true

end
