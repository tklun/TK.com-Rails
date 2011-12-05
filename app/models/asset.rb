class Asset < ActiveRecord::Base
	belongs_to :post
	has_attached_file :photo, 
	:styles => {
	  :thumb => "100x100",
	  :medium => "419>x314",
	  :large => "514>x386",
	},
	:s3_credentials => S3_CREDENTIALS,
	:storage => :s3,
	:path => ":attachment/:id/:style.:extension"

	# attr_accessible :photo, :photo_file_name, :photo_content_type, :photo_file_size, :photo_updated_at
end