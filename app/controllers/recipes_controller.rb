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
    if @recipe.save
      redirect_to "/recipes/#{@recipe.id}"
    else
      @users = User.all
      render "new.html.erb"
    end
  end

  def show
    @recipe = Recipe.find_by(id: params[:id])
    render "show.html.erb"
  end

  def edit
    @recipe = Recipe.find_by(id: params[:id])
    @users = User.all
    render "edit.html.erb"
  end

  def update
    @recipe = Recipe.find_by(id: params[:id])
    @recipe.title = params[:input_title]
    @recipe.chef = params[:input_chef]
    @recipe.prep_time = params[:input_prep_time]
    @recipe.ingredients = params[:input_ingredients]
    @recipe.directions = params[:input_directions]
    @recipe.image_url = params[:input_image_url]
    @recipe.user_id = params[:user_id]
    @recipe.save
    redirect_to "/recipes"
  end
end
