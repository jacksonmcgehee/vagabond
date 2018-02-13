class Api::CommentsController < ApplicationController
  def index
    @city = City.find(params[:city_id])
    @post = Post.find(params[:post_id])
    @comment = Comment.find(params[:post_id]).comments

    @response = {city: @city, post: @post, comment: @comment}
    
    render json: @response
  end

  def destroy
    @comment = Comment.find(params[:id]).destroy
    render status: :ok
  end

end
