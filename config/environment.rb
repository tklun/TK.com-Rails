# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
TKComRails::Application.initialize!
config.gem "jammit"
# if ENV['RAILS_ENV'] == 'production' || ENV['RAILS_ENV'] == 'triage'
# Haml::Template.options[:ugly] = true
# end