Rails.application.routes.draw do
  resources :welcomes
  devise_for :users
  resources :reservations
  authenticated :user do
    root 'reservations#index', as: "authenticated_root"
  end

  root "welcomes#index"
end
