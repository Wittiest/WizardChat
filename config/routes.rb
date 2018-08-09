Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: { format: 'json' } do
    resource :user, only: [ :create, :show]
    # post '/user_search', to: 'users#search'
    resources :chats, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]
  end
  mount ActionCable.server => '/cable'
end
