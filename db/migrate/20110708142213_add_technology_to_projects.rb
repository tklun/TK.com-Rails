class AddTechnologyToProjects < ActiveRecord::Migration
  def self.up
    add_column :projects, :technology, :text
  end

  def self.down
    remove_column :projects, :technology
  end
end
