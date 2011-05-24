class CreateProjects < ActiveRecord::Migration
  def self.up
    create_table :projects do |t|
      t.string :headline
      t.text :details
      t.string :client
      t.string :role
      t.string :client_type

      t.timestamps
    end
  end

  def self.down
    drop_table :projects
  end
end
