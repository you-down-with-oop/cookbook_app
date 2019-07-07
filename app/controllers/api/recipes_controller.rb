class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all

    if params[:title_search]
      @recipes = @recipes.where("title ILIKE ?", "%" + params[:title_search].to_s + "%")
    end

    @recipes = @recipes.order(:id => :asc)

    render "index.json.jb"
  end

  def create
    @recipe = Recipe.new(
      title: params["title"],
      chef: params["chef"],
      ingredients: params["ingredients"],
      directions: params["directions"],
      user_id: current_user.id,
    )
    @recipe.save
    render "show.json.jb"
  end

  def show
    @recipe = Recipe.find_by(id: params["id"])
    render "show.json.jb"
  end

  def update
    @recipe = Recipe.find_by(id: params["id"])
    @recipe.title = params["title"] || @recipe.title
    @recipe.chef = params["chef"] || @recipe.chef
    @recipe.ingredients = params["ingredients"] || @recipe.ingredients
    @recipe.directions = params["directions"] || @recipe.directions
    @recipe.image_url = params["image_url"] || @recipe.image_url
    @recipe.prep_time = params["prep_time"] || @recipe.prep_time
    @recipe.save
    render "show.json.jb"
  end

  def destroy
    @recipe = Recipe.find_by(id: params["id"])
    @recipe.destroy
    render json: { message: "Recipe successfully destroyed!" }
  end
end
