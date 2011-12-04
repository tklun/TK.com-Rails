# If an s3.yml file exists, use the key, secret key, and bucket values from there.
# Otherwise, pull them from the environment.
if Rails.env == "production" 
   S3_CREDENTIALS = { :access_key_id => ENV['S3_ACCESS_KEY_ID'], :secret_access_key => ENV['S3_SECRET_ACCESS_KEY'], :bucket => ENV['S3_BUCKET']} 
 else 
   S3_CREDENTIALS = Rails.root.join("config/s3.yml")
end