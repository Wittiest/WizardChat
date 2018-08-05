Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [ :create, :show]
    # post '/user_search', to: 'users#search'

    resource :session, only: [:create, :destroy]
  end
end
