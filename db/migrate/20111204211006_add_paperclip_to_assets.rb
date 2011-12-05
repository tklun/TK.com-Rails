class AddPaperclipToAssets < ActiveRecord::Migration
  def self.up
    remove_column :assets, :image_file_name
    remove_column :assets, :image_content_type
    remove_column :assets, :image_file_size
    add_column :assets, :photo_file_name, :string
    add_column :assets, :photo_content_type, :string
    add_column :assets, :photo_file_size, :integer
    add_column :assets, :photo_updated_at, :datetime
  end

  def self.down
    remove_column :assets, :photo_file_name
    remove_column :assets, :photo_content_type
    remove_column :assets, :photo_file_size
    remove_column :assets, :photo_updated_at
  end
end