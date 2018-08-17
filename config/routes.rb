Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: { format: 'json' } do

    resource :user, only: [ :create, :show, :update]

    post '/user_search/', to: 'users#search'

    resources :chats, only: [:index, :create, :show, :update] do
      resources :messages, only: [:create]
    end

    resources :chat_users, only: [:update, :create, :destroy]

    resource :session, only: [:create, :destroy]
  end
  mount ActionCable.server => '/cable'
end
