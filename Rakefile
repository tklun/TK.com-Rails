# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)
require 'rake'

require 'jammit'
Jammit.package! :base_url => "http://falling-flower-212.heroku.com/"

module ::TKComRails
  class Application
    include Rake::DSL
  end
end

module ::RakeFileUtils
  extend Rake::FileUtilsExt
end


TKComRails::Application.load_tasks

