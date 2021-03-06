class Recipe < ApplicationRecord
  belongs_to :user
  validates :ingredients, presence: true
  validates :directions, presence: true
  validates :prep_time, presence: true

  def ingredients_list
    ingredients.split(", ")
  end

  def directions_list
    directions.split(", ")
  end

  def friendly_created_at
    created_at.strftime("%B %e, %Y")
  end

  def friendly_prep_time
    hours = prep_time / 60
    minutes = prep_time % 60
    result = ""
    result += "#{hours} hour(s) " if hours > 0
    result += "#{minutes} minute(s)" if minutes > 0
    result
  end
end
