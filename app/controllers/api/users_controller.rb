class Api::UsersController < ApplicationController

  def search
    query = "" # TODO Extract from params
    matches = []
    matched_users = User.all.each do |user|
      next if user.id == current_user.id
      if user.first_name.include?(query) || user.last_name.include?(query) ||
        (user.first_name + user.last_name).include?(query)
        matches << user
      end
    end
    if (matches.length >= 1)
       # TODO jbuilder template of user info (id, full name)
    else
      # TODO custom JSON for no results
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
