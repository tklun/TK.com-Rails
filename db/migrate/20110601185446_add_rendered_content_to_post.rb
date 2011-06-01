class AddRenderedContentToPost < ActiveRecord::Migration
  def self.up
    add_column :posts, :rendered_content, :text
  end

  def self.down
    remove_column :posts, :rendered_content
  end
end
