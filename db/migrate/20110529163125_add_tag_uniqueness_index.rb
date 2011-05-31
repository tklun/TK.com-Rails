class AddTagUniquenessIndex < ActiveRecord::Migration
  def self.up
    add_index :tags, :tag_name, :unique => true
  end

  def self.down
    remove_index :tags, :tag_name
  end
end
