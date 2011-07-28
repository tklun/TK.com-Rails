class ApplicationController < ActionController::Base
  protect_from_forgery

  rescue_from CanCan::AccessDenied do |exception|
    flash[:error] = exception.message
    redirect_to root_url
  end   

  def index
    response.headers['Content-Encoding'] = 'gzip'
    render :text => "Rendered at #{Time.now}"
  end
end
