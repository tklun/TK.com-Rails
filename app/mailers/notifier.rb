class Notifier < ActionMailer::Base
  def contact_me(contact_message)
    @contact_message = contact_message

    mail(:to => ENV['GMAIL_SMTP_USER'],
         :from => contact_message.email,
         :subject => contact_message.subject)
  end
end