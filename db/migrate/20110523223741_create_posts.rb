class CreatePosts < ActiveRecord::Migration
  def self.up
    create_table :posts do |t|
      t.string :headline
      t.text :content
      t.string :image_path
      t.string :tag

      t.timestamps
    end
  end

  def self.down
    drop_table :posts
  end
end
