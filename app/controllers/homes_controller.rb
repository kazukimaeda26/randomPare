class HomesController < ApplicationController
  before_action :set_theme, :index
  def index
  end

  private
  def set_theme
    now = Time.now
  end
end
