Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # post 'api/test', to: 'application#test'
  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: {format: :json} do
    # ...
    resources :users, only: [:create]
    resources :businesses, only: [:index, :show]
    resources :reviews, only: [:index, :create, :update, :destroy, :show]
    resource :session, only: [:create, :show, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
