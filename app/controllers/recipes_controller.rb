class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    render "index.html.erb"
  end

  def new
    @users = User.all
    render "new.html.erb"
  end

  def create
    @recipe = Recipe.new(
      user_id: params[:user_id],
      title: params[:input_title],
      chef: params[:input_chef],
      prep_time: params[:input_prep_time],
      ingredients: params[:input_ingredients],
      directions: params[:input_directions],
      image_url: params[:input_image_url],
    )
    @recipe.save
    redirect_to "/recipes/#{@recipe.id}"
  end

  def show
    @recipe = Recipe.find_by(id: params[:id])
    render "show.html.erb"
  end
end
