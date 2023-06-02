Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # post 'api/test', to: 'application#test'
  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: {format: :json} do
    # ...
    resources :users, only: [:create]
    resources :businesses, only: [:index, :show, :create]
    resource :session, only: [:create, :show, :destroy]
  end
end
