# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
TKComRails::Application.initialize!
if ENV['RAILS_ENV'] == 'production' || ENV['RAILS_ENV'] == 'triage'
  module Heroku
    class StaticAssetsMiddleware
      def cache_static_asset(reply)
        return reply unless can_cache?(reply)

        status, headers, response = reply

        headers['Cache-Control'] = 'public, max-age=31556926' # 1 year

        build_new_reply(status, headers, response)
      end
    end
  endend
