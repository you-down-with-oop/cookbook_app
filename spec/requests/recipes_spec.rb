require "rails_helper"

RSpec.describe "Recipes", type: :request do
  describe "GET /recipes" do
    it "returns an array of recipes" do
      user = User.create!(name: "peter", email: "peter@email.com", password: "password")
      Recipe.create!(title: "example title 1", chef: "example chef", ingredients: "fdsfd", directions: "...", image_url: "...", prep_time: 100, user_id: user.id)
      Recipe.create!(title: "example title 2", chef: "example chef", ingredients: "fdsfd", directions: "...", image_url: "...", prep_time: 100, user_id: user.id)
      Recipe.create!(title: "example title 3", chef: "example chef", ingredients: "fdsfd", directions: "...", image_url: "...", prep_time: 100, user_id: user.id)

      get "/api/recipes"
      recipes = JSON.parse(response.body)

      expect(response).to have_http_status(200)
      expect(recipes.length).to eq(3)
    end
  end

  describe "POST /recipes" do
    it "creates a recipe" do
      user = User.create!(name: "peter", email: "peter@email.com", password: "password")
      jwt = JWT.encode({ user_id: user.id }, Rails.application.credentials.fetch(:secret_key_base), "HS256")

      post "/api/recipes",
        params: { title: "New title", ingredients: "Something", directions: "Something", prep_time: 100 },
        headers: { "Authorization" => "Bearer #{jwt}" }
      recipe = JSON.parse(response.body)

      expect(response).to have_http_status(200)
      expect(recipe["title"]).to eq("New title")
    end

    it "should be unprocessable with invalid params" do
      user = User.create!(name: "peter", email: "peter@email.com", password: "password")
      jwt = JWT.encode({ user_id: user.id }, Rails.application.credentials.fetch(:secret_key_base), "HS256")

      post "/api/recipes",
        params: {},
        headers: { "Authorization" => "Bearer #{jwt}" }
      recipe = JSON.parse(response.body)

      expect(response).to have_http_status(422)
    end

    it "should be unauthorized without a valid jwt" do
      post "/api/recipes", params: {}
      recipe = JSON.parse(response.body)

      expect(response).to have_http_status(401)
    end
  end

  describe "GET /recipes/:id" do
    it "returns a hash with the appropriate attributes" do
      user = User.create!(name: "peter", email: "peter@email.com", password: "password")
      recipe = Recipe.create!(title: "example title 1", chef: "example chef", ingredients: "fdsfd", directions: "...", image_url: "...", prep_time: 100, user_id: user.id)

      get "/api/recipes/#{recipe.id}"
      recipe = JSON.parse(response.body)

      expect(response).to have_http_status(200)
      expect(recipe["title"]).to eq("example title 1")
      expect(recipe["chef"]).to eq("example chef")
      expect(recipe["ingredients"]).to eq("fdsfd")
      expect(recipe["directions"]).to eq("...")
      expect(recipe["image_url"]).to eq("...")
      expect(recipe["prep_time"]).to eq(100)
    end
  end
end
