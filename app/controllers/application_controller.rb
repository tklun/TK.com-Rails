class ApplicationController < ActionController::Base
  protect_from_forgery
  response.headers['Vary'] = 'Accept-Encoding'
  rescue_from CanCan::AccessDenied do |exception|
    flash[:error] = exception.message
    redirect_to root_url
  end   

end
