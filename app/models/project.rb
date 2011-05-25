# == Schema Information
# Schema version: 20110524205616
#
# Table name: projects
#
#  id          :integer         not null, primary key
#  headline    :string(255)
#  details     :text
#  client      :string(255)
#  role        :string(255)
#  client_type :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

class Project < ActiveRecord::Base
  attr_accessible :headline, :details, :client, :client_type, :role
  
  validates :headline, :presence => true
  validates :details, :presence => true
  validates :role, :presence => true

end
