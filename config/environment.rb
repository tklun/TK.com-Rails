# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
TKComRails::Application.initialize!
# if ENV['RAILS_ENV'] == 'production' || ENV['RAILS_ENV'] == 'triage'
# Haml::Template.options[:ugly] = true
# end
ActionMailer::Base.smtp_settings = {
  :address        => "smtp.sendgrid.net",
  :port           => "25",
  :authentication => :plain,
  :user_name      => ENV['SENDGRID_USERNAME'],
  :password       => ENV['SENDGRID_PASSWORD'],
  :domain         => ENV['SENDGRID_DOMAIN']
}