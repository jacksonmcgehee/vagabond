class Api::CitiesController < ApplicationController
  def index
    @cities = City.all 
    render json: @cities

  end

  # def show
    

  # end

  # def destroy

  # end

  # def update

  # end
  
end
