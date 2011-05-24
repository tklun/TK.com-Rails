class User < ActiveRecord::Base
  has_and_belongs_to_many :roles
  devise :database_authenticatable, :recoverable, :rememberable, :trackable, :validatable

  def role?(role)
      return !!self.roles.find_by_name(role.to_s.camelize)
  end

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
end
