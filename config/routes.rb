Rails.application.routes.draw do
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    root to: 'home#index'
  end

  get '/pay', to: redirect('https://paypal.me/gmuraleekrishna')
end
