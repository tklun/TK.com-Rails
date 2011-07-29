class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :custom_headers
  
  rescue_from CanCan::AccessDenied do |exception|
    flash[:error] = exception.message
    redirect_to root_url
  end   

   private
   def custom_headers
     response.headers['Vary'] = 'Accept-Encoding'
   end

end
