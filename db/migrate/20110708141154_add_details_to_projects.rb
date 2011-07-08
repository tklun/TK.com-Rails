class AddDetailsToProjects < ActiveRecord::Migration
  def self.up
    remove_column :projects, :client_type
    add_column :projects, :organization, :string
    add_column :projects, :agency, :string
    add_column :projects, :link_url, :string
  end

  def self.down
    remove_column :projects
  end
end
