module ApplicationHelper
  
  def title
    base_title = "TomKlun.com"
    if @title.nil?
      base_title
    else
      "#{base_title} | #{@title}"
    end
  end
  
  def body_class
    base_class = ""
    if @class.nil?
      base_class
    else
      "#{@class}"
    end
  end
end
