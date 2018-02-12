Rails.application.routes.draw do
  namespace :api do
    get 'users/index'
  end

  namespace :api do
    get 'users/show'
  end

  namespace :api do
    get 'users/update'
  end

  namespace :api do
    get 'users/destroy'
  end

  namespace :api do
    get 'comments/index'
  end

  namespace :api do
    get 'comments/destroy'
  end

  get 'api/index'

  get 'api/destroy'

  namespace :api do
    get 'posts/index'
  end

  namespace :api do
    get 'posts/show'
  end

  namespace :api do
    get 'posts/destroy'
  end

  namespace :api do
    get 'posts/update'
  end

  namespace :api do
    get 'cities/index'
  end

  namespace :api do
    get 'cities/show'
  end

  namespace :api do
    get 'cities/destroy'
  end

  namespace :api do
    get 'cities/update'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :cities do
      resources :posts do
      resources :comments do
      end
    end
    end
  end

end
