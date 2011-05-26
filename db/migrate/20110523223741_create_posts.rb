class CreatePosts < ActiveRecord::Migration
  def self.up
    create_table :posts do |t|
      t.string  :headline
      t.text    :content
      t.string  :image_path
      t.string  :post_tag

      t.timestamps
    end
  end

  def self.down
    drop_table :posts
  end
end
